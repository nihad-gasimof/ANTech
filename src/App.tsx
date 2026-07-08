import React from "react";
import { TabType, QuoteRequest, ContactInquiry } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import PortfolioView from "./components/PortfolioView";
import CRMView from "./components/CRMView";
import ContactView from "./components/ContactView";
import AIAdvisorView from "./components/AIAdvisorView";
import AdminView from "./components/AdminView";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Default pre-populated demo data
const DEFAULT_QUOTES: QuoteRequest[] = [
  {
    id: "q-1",
    name: "Elvin Məmmədov",
    company: "Baku Logistics Group",
    email: "elvin@bakulogistics.az",
    phone: "+994 (50) 123-4567",
    serviceType: "mobile",
    budget: "4,900 AZN",
    deadline: "3 Ay",
    requirements: "Logistika İzləmə Tətbiqi inkişafı. GPS izləmə və Flutter ilə kross-platform inkişaf.",
    status: "Completed",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString("az-AZ"),
  },
  {
    id: "q-2",
    name: "Orxan Əliyev",
    company: "Capital Finance Azerbaijan",
    email: "orxan@capitalfinance.az",
    phone: "+994 (12) 444-5566",
    serviceType: "web",
    budget: "5,500 AZN",
    deadline: "4 Ay",
    requirements: "Korporativ Maliyyə Portalı. React, Node.js və Excel/PDF analitik hesabatlar.",
    status: "Completed",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toLocaleDateString("az-AZ"),
  },
  {
    id: "q-3",
    name: "Lalə Qasımova",
    company: "Azeri Premium Retail LLC",
    email: "lala@retail.az",
    phone: "+994 (55) 777-8899",
    serviceType: "crm",
    budget: "6,200 AZN",
    deadline: "3.5 Ay",
    requirements: "Fərdi Sales CRM. Sifarişlərin emalı, WhatsApp bildirişləri, ödəniş Gateway.",
    status: "Pending",
    date: new Date().toLocaleDateString("az-AZ"),
  },
];

const DEFAULT_INQUIRIES: ContactInquiry[] = [
  {
    id: "i-1",
    firstName: "Elnur",
    lastName: "Həsənov",
    email: "elnur.hasan@outlook.com",
    subject: "Məsləhətləşmə",
    message: "Salam, bizim inşaat şirkətimiz üçün daxili layihə idarəetmə və tikinti izləmə ERP proqram təminatı qiymətini öyrənmək istərdik. Əməkdaşlarınız ofisimizə gələ bilərmi?",
    status: "Pending",
    date: new Date().toLocaleDateString("az-AZ"),
    newsletter: true,
  },
  {
    id: "i-2",
    firstName: "Səbinə",
    lastName: "Quliyeva",
    email: "sabina@medica.az",
    subject: "Kiber Təhlükəsizlik",
    message: "Salam, klinikamızın pasiyent məlumat bazasının təhlükəsizlik auditini etmək və serverlərimizi AWS bulud sisteminə köçürmək istəyirik. Zəhmət olmasa kiber təhlükəsizlik rəhbəriniz bizimlə əlaqə saxlasın.",
    status: "Contacted",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString("az-AZ"),
    newsletter: false,
  },
];

export default function App() {
  const [activeTab, setActiveTab] = React.useState<TabType>("home");
  const [selectedServiceForQuote, setSelectedServiceForQuote] = React.useState<string>("web");

  // Load Quotes state
  const [quotes, setQuotes] = React.useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem("antech_quotes");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved quotes", e);
      }
    }
    return DEFAULT_QUOTES;
  });

  // Load Inquiries state
  const [inquiries, setInquiries] = React.useState<ContactInquiry[]>(() => {
    const saved = localStorage.getItem("antech_inquiries");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved inquiries", e);
      }
    }
    return DEFAULT_INQUIRIES;
  });

  // Toast notifications state
  const [toast, setToast] = React.useState<{ message: string; type: "success" | "error" } | null>(null);

  React.useEffect(() => {
    localStorage.setItem("antech_quotes", JSON.stringify(quotes));
  }, [quotes]);

  React.useEffect(() => {
    localStorage.setItem("antech_inquiries", JSON.stringify(inquiries));
  }, [inquiries]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Submit quote handler
  const onSubmitQuote = (newQuoteData: Omit<QuoteRequest, "id" | "date" | "status">) => {
    const newQuote: QuoteRequest = {
      ...newQuoteData,
      id: `q-${Date.now()}`,
      status: "Pending",
      date: new Date().toLocaleDateString("az-AZ"),
    };
    setQuotes((prev) => [newQuote, ...prev]);
    showToast("Qiymət təklifi sorğunuz uğurla göndərildi! Sizinlə tezliklə əlaqə saxlayacağıq.");
  };

  // Submit inquiry handler
  const onSubmitInquiry = (newInquiryData: Omit<ContactInquiry, "id" | "date" | "status">) => {
    const newInquiry: ContactInquiry = {
      ...newInquiryData,
      id: `i-${Date.now()}`,
      status: "Pending",
      date: new Date().toLocaleDateString("az-AZ"),
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    showToast("Mesajınız uğurla göndərildi! Əməkdaşımız qısa zamanda cavablandıracaq.");
  };

  // Update Quote status
  const onUpdateQuoteStatus = (id: string, status: "Pending" | "Contacted" | "Completed") => {
    setQuotes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status } : q))
    );
    showToast("Qiymət sorğusunun statusu yeniləndi.");
  };

  // Update Inquiry status
  const onUpdateInquiryStatus = (id: string, status: "Pending" | "Contacted" | "Completed") => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
    showToast("Müraciət mesajının statusu yeniləndi.");
  };

  // Delete Quote
  const onDeleteQuote = (id: string) => {
    if (window.confirm("Bu qiymət sorğusunu silmək istədiyinizdən əminsiniz?")) {
      setQuotes((prev) => prev.filter((q) => q.id !== id));
      showToast("Qiymət sorğusu silindi.");
    }
  };

  // Delete Inquiry
  const onDeleteInquiry = (id: string) => {
    if (window.confirm("Bu müraciəti silmək istədiyinizdən əminsiniz?")) {
      setInquiries((prev) => prev.filter((inq) => inq.id !== id));
      showToast("Müraciət silindi.");
    }
  };

  // Reset demo Database
  const onResetDatabase = () => {
    if (window.confirm("Bütün məlumat bazasını ilkin demo vəziyyətinə qaytarmaq istəyirsiniz?")) {
      setQuotes(DEFAULT_QUOTES);
      setInquiries(DEFAULT_INQUIRIES);
      localStorage.removeItem("antech_quotes");
      localStorage.removeItem("antech_inquiries");
      showToast("Demo məlumatlar bərpa olundu.");
    }
  };

  // Retrieve pending counts for notification badges
  const pendingQuotes = quotes.filter((q) => q.status === "Pending").length;
  const pendingInquiries = inquiries.filter((i) => i.status === "Pending").length;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/20 text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Header / Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        quoteCount={pendingQuotes}
        inquiryCount={pendingInquiries}
      />

      {/* Main Container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
          >
            {activeTab === "home" && <HomeView setActiveTab={setActiveTab} />}
            
            {activeTab === "about" && <AboutView />}
            
            {activeTab === "services" && (
              <ServicesView
                setActiveTab={setActiveTab}
                setSelectedServiceForQuote={setSelectedServiceForQuote}
              />
            )}
            
            {activeTab === "portfolio" && <PortfolioView />}
            
            {activeTab === "crm" && (
              <CRMView
                onSubmitQuote={onSubmitQuote}
                selectedServiceId={selectedServiceForQuote}
                setSelectedServiceId={setSelectedServiceForQuote}
              />
            )}
            
            {activeTab === "contact" && (
              <ContactView onSubmitInquiry={onSubmitInquiry} />
            )}
            
            {activeTab === "ai-advisor" && <AIAdvisorView />}
            
            {activeTab === "admin" && (
              <AdminView
                quotes={quotes}
                inquiries={inquiries}
                onUpdateQuoteStatus={onUpdateQuoteStatus}
                onUpdateInquiryStatus={onUpdateInquiryStatus}
                onDeleteQuote={onDeleteQuote}
                onDeleteInquiry={onDeleteInquiry}
                onResetDatabase={onResetDatabase}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Global Interactive Notification Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex max-w-sm items-center space-x-3.5 rounded-2xl border border-gray-100 bg-white p-4.5 shadow-2xl"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-4.5 w-4.5" />
            </div>
            <div className="flex-1">
              <p className="font-sans text-xs font-semibold text-gray-800 leading-normal">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-gray-400 hover:text-gray-600 shrink-0"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
