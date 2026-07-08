import React from "react";
import { ChatMessage } from "../types";
import {
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  Cpu,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AIAdvisorView() {
  const [messages, setMessages] = React.useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem("antech_chat_messages");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved messages", e);
      }
    }
    return [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Salam! Mən AN Tech Solutions-ın Süni İntellekt IT Məsləhətçisiyəm. Sizə veb inkişafı, fərdi mobil tətbiqlər (iOS/Android), CRM/ERP avtomatlaşdırılması, kiber təhlükəsizlik və ya bizim xidmətlərlə bağlı necə kömək edə bilərəm? Layihəniz üçün qiymət təxminini də soruşa bilərsiniz!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ];
  });

  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const threadEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    localStorage.setItem("antech_chat_messages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (textToSend?: string) => {
    const content = textToSend || input;
    if (!content.trim() || loading) return;

    if (!textToSend) setInput("");
    setError(null);

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Süni İntellektlə əlaqə qurularkən xəta baş verdi.");
      }

      const data = await response.json();

      const botMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: data.text || "Bağışlayın, cavab hazırlana bilmədi.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error(err);
      setError("Bağışlayın, serverlə bağlantı qurula bilmədi. Zəhmət olmasa bir az sonra yenidən cəhd edin.");
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm("Söhbət keçmişini təmizləmək istədiyinizdən əminsiniz?")) {
      const reset = [
        {
          id: "welcome",
          role: "assistant" as const,
          content:
            "Salam! Mən AN Tech Solutions-ın Süni İntellekt IT Məsləhətçisiyəm. Sizə veb inkişafı, fərdi mobil tətbiqlər (iOS/Android), CRM/ERP avtomatlaşdırılması, kiber təhlükəsizlik və ya bizim xidmətlərlə bağlı necə kömək edə bilərəm? Layihəniz üçün qiymət təxminini də soruşa bilərsiniz!",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ];
      setMessages(reset);
      localStorage.removeItem("antech_chat_messages");
    }
  };

  const quickPrompts = [
    "Veb inkişafı xidmətləriniz haqqında məlumat verin.",
    "Baku Logistics Group üçün hazırladığınız tətbiq nədir?",
    "Fərdi CRM sisteminin mənə nə kimi faydaları olar?",
    "Layihələr üçün inkişaf müddəti və zəmanətiniz necədir?",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-6 px-4"
    >
      <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-xl flex flex-col h-[75vh]">
        {/* Thread Header */}
        <div className="border-b border-gray-50 bg-gradient-to-r from-blue-600 to-blue-700 p-4.5 sm:px-6 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
              <Sparkles className="h-5.5 w-5.5 animate-pulse" />
            </div>
            <div>
              <h2 className="font-sans text-sm sm:text-base font-bold">AI IT Məsləhətçi</h2>
              <p className="font-sans text-[10px] text-blue-100 flex items-center space-x-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>Gemini 3.5 Flash tərəfindən idarə olunur</span>
              </p>
            </div>
          </div>

          <button
            onClick={clearChat}
            className="flex h-8.5 w-8.5 items-center justify-center rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
            title="Keçmişi Təmizlə"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50/40 space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((msg) => {
              const isBot = msg.role === "assistant";
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                >
                  <div className={`flex items-start space-x-2.5 max-w-[85%] ${!isBot && "flex-row-reverse space-x-reverse"}`}>
                    {/* Avatar */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        isBot ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>

                    {/* Speech Bubble */}
                    <div className="space-y-1">
                      <div
                        className={`rounded-2xl p-3.5 sm:px-4 font-sans text-xs sm:text-sm shadow-xs leading-relaxed ${
                          isBot
                            ? "bg-white text-gray-800 border border-gray-100"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        {msg.content.split("\n").map((line, idx) => (
                          <p key={idx} className={line === "" ? "h-2" : "mb-0.5"}>
                            {line}
                          </p>
                        ))}
                      </div>
                      <p className={`font-sans text-[10px] text-gray-400 ${!isBot && "text-right"}`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Loading Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl bg-white border border-gray-100 p-3.5 flex items-center space-x-1.5 shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce delay-150"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce delay-300"></span>
                </div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="rounded-xl bg-red-50 border border-red-100 p-3.5 text-center flex flex-col items-center gap-1.5">
              <p className="font-sans text-xs font-semibold text-red-600">{error}</p>
              <button
                onClick={() => handleSend()}
                className="flex items-center space-x-1 text-[11px] font-bold text-red-700 underline"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Yenidən sına</span>
              </button>
            </div>
          )}

          <div ref={threadEndRef} />
        </div>

        {/* Quick Prompts Carousel */}
        {messages.length === 1 && (
          <div className="p-4 bg-gray-50/50 border-t border-gray-50">
            <p className="font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              Tez-tez Verilən Suallar
            </p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="flex items-center space-x-1.5 rounded-lg border border-gray-100 bg-white px-3 py-1.5 text-left font-sans text-xs font-medium text-gray-600 hover:border-blue-200 hover:bg-blue-50/20 hover:text-blue-600 transition cursor-pointer"
                >
                  <span>{prompt}</span>
                  <ArrowRight className="h-3 w-3 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message Input Box */}
        <div className="border-t border-gray-100 p-4 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2.5"
          >
            <input
              type="text"
              required
              disabled={loading}
              placeholder="IT Məsləhətçidən soruşun... (Məs: Veb sayt hazırlanma qiyməti nə qədərdir?)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 font-sans text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-100 hover:bg-blue-700 active:scale-95 transition disabled:opacity-40 cursor-pointer"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
