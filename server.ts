import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3001;

// Initialize Gemini SDK with telemetry header
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

const SYSTEM_INSTRUCTION = `You are the official interactive AI IT Advisor for AN Tech Solutions (based in Baku, Azerbaijan).
Your goal is to consult prospective clients about our services, explain our portfolio, estimate project scopes, and guide them in choosing the right solutions.

Company Overview:
AN Tech Solutions is Azerbaijan's premier full-service IT provider.
We build bespoke digital experiences including:
1. Web Development (React, Next.js, TypeScript, Node.js, Python, full-stack websites)
2. Mobile Development (iOS Swift, Android Kotlin, cross-platform Flutter/React Native)
3. Custom CRM & ERP Systems (Tailor-made for Azerbaijani and global businesses, integrated sales tracking, pipeline automation, localized reports)
4. Cyber Security Audits & AWS/Cloud Migration

Key Highlights:
- Over 10+ years of industrial experience in Azerbaijan.
- Located in Baku Tower, Baku.
- Hundreds of successful local and regional projects.

Our Portfolio:
- "Korporativ Maliyyə Portalı": A React + Node.js portal built for corporate financial automation.
- "Logistika İzləmə Tətbiqi": A Flutter + Firebase application for modern cargo/fleet tracking.
- "Enterprise Sales CRM": A robust Next.js + PostgreSQL CRM with advanced analytics.
- "Premium E-ticarət Platforması": A high-performance TypeScript commerce site with Stripe integration.
- "Analitik Müştəri Portalı": A Python + Tableau custom dashboard portal for commercial data analytics.
- "HealthTech Mobil Həll": A Swift + AWS mobile healthcare management ecosystem.

Our Core Team:
- Anar Nəzərov (CEO, Veteran Architect)
- Leyla Əliyeva (CTO, Frontend Guru)
- Tural Məmmədov (Security Lead, Certified CISSP expert)
- Orxan Quliyev (Business Strategist, MBA)

Tone & Behavior:
- Be highly professional, helpful, polite, and technical.
- Respond in Azerbaijani (Azeri) by default, since our core clients are in Baku, but you can also answer in Turkish, English, or Russian if the client asks in those languages.
- Suggest that they can use our interactive "Quotation Builder" (Qiymət Hesablayıcı) or fill in the "Əlaqə" (Contact) form in the application to get a direct callback or dynamic estimate from our team.
- Keep responses clear, concise, and structured. Use bullet points and paragraphs effectively.
`;

// API routes first
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    aiConfigured: !!ai,
    timestamp: new Date().toISOString(),
  });
});

app.post("/api/gemini/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required" });
  }

  if (!ai) {
    // Graceful fallback when the API key is not available
    const lastMessage = messages[messages.length - 1]?.content || "";
    const isEnglish = /hello|hi|help|services/i.test(lastMessage);
    const fallbackText = isEnglish
      ? "Thank you for reaching out to AN Tech Solutions! Our Gemini AI IT Advisor is currently initializing. How can we help you today with Web, Mobile, or CRM solutions? You can also leave a message in our Contact tab!"
      : "AN Tech Solutions-a müraciət etdiyiniz üçün təşəkkür edirik! Süni İntellekt IT Məsləhətçimiz hazırda tənzimlənir. Sizə Web, Mobil layihələr və ya CRM sistemləri ilə bağlı necə kömək edə bilərik? Əlaqə bölməsindən də bizə yaza bilərsiniz!";
    
    return res.json({ text: fallbackText });
  }

  try {
    // Translate message objects to the expected format for gemini-3.5-flash
    // We format the conversation history as a unified prompt or using contents array
    const contents = messages.map((m) => {
      return {
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      };
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text || "Bağışlayın, cavab hazırlana bilmədi." });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Error processing your request with AI",
      details: error.message,
    });
  }
});

// Vite middleware for development or static file serving for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export app for serverless deployment (Vercel)
export default app;

// Only start the local server if we are NOT running on Vercel
if (!process.env.VERCEL) {
  startServer();
}
