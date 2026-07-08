import React from "react";
import { QuoteRequest, ContactInquiry } from "../types";
import {
  Briefcase,
  Mail,
  CheckCircle,
  Clock,
  PhoneCall,
  Search,
  Check,
  RotateCcw,
  BarChart3,
  DollarSign,
  Users,
  Eye,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AdminViewProps {
  quotes: QuoteRequest[];
  inquiries: ContactInquiry[];
  onUpdateQuoteStatus: (id: string, status: "Pending" | "Contacted" | "Completed") => void;
  onUpdateInquiryStatus: (id: string, status: "Pending" | "Contacted" | "Completed") => void;
  onDeleteQuote: (id: string) => void;
  onDeleteInquiry: (id: string) => void;
  onResetDatabase: () => void;
}

export default function AdminView({
  quotes,
  inquiries,
  onUpdateQuoteStatus,
  onUpdateInquiryStatus,
  onDeleteQuote,
  onDeleteInquiry,
  onResetDatabase,
}: AdminViewProps) {
  const [activeSubTab, setActiveSubTab] = React.useState<"quotes" | "inquiries">("quotes");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedQuote, setSelectedQuote] = React.useState<QuoteRequest | null>(null);
  const [selectedInquiry, setSelectedInquiry] = React.useState<ContactInquiry | null>(null);

  // Compute stats
  const totalInquiries = quotes.length + inquiries.length;
  const pendingCount =
    quotes.filter((q) => q.status === "Pending").length +
    inquiries.filter((i) => i.status === "Pending").length;
  
  const completedCount =
    quotes.filter((q) => q.status === "Completed").length +
    inquiries.filter((i) => i.status === "Completed").length;

  // Calculate pipeline valuation
  const pipelineValue = quotes.reduce((acc, q) => {
    const val = parseInt(q.budget.replace(/[^0-9]/g, "")) || 0;
    return acc + val;
  }, 0);

  // Filters
  const filteredQuotes = quotes.filter((q) => {
    const search = searchTerm.toLowerCase();
    return (
      q.name.toLowerCase().includes(search) ||
      q.company.toLowerCase().includes(search) ||
      q.email.toLowerCase().includes(search) ||
      q.serviceType.toLowerCase().includes(search)
    );
  });

  const filteredInquiries = inquiries.filter((inq) => {
    const search = searchTerm.toLowerCase();
    return (
      inq.firstName.toLowerCase().includes(search) ||
      inq.lastName.toLowerCase().includes(search) ||
      inq.email.toLowerCase().includes(search) ||
      inq.subject.toLowerCase().includes(search)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 py-6 px-4 max-w-7xl mx-auto"
    >
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <span className="rounded bg-red-100 px-2 py-0.5 font-sans text-[10px] font-bold text-red-700 uppercase tracking-wider">
            Daxili Back-Office
          </span>
          <h1 className="mt-1 font-sans text-2xl font-black text-gray-950 tracking-tight">
            Sifariş və Müraciət İdarəetmə Paneli
          </h1>
          <p className="font-sans text-xs text-gray-400">
            Dinamik olaraq gələn müştəri qiymət təkliflərini və suallarını anlıq emal edin.
          </p>
        </div>

        <button
          onClick={onResetDatabase}
          className="inline-flex items-center space-x-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 font-sans text-xs font-semibold text-gray-600 hover:bg-gray-50 active:scale-95 transition"
          title="Demo datanı yüklə"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Demo Məlumatları Bərpa Et</span>
        </button>
      </div>

      {/* Analytics Stats bar */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Pipeline Value */}
        <div className="rounded-2xl border border-blue-100 bg-blue-50/20 p-5 flex items-center space-x-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-100">
            <DollarSign className="h-5.5 w-5.5" />
          </div>
          <div>
            <p className="font-sans text-[10px] uppercase font-bold tracking-wider text-gray-400">
              Təxmini Layihə Pipeline-ı
            </p>
            <p className="font-sans text-lg font-black text-blue-600">
              {pipelineValue.toLocaleString()} AZN
            </p>
          </div>
        </div>

        {/* Total Leads */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 flex items-center space-x-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
            <Users className="h-5.5 w-5.5" />
          </div>
          <div>
            <p className="font-sans text-[10px] uppercase font-bold tracking-wider text-gray-400">
              Ümumi Müraciətlər
            </p>
            <p className="font-sans text-lg font-bold text-gray-900">{totalInquiries} Ədəd</p>
          </div>
        </div>

        {/* Pending Leads */}
        <div className="rounded-2xl border border-amber-100 bg-amber-50/20 p-5 flex items-center space-x-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-100">
            <Clock className="h-5.5 w-5.5" />
          </div>
          <div>
            <p className="font-sans text-[10px] uppercase font-bold tracking-wider text-gray-400">
              Gözləyən (Pending)
            </p>
            <p className="font-sans text-lg font-bold text-amber-600">{pendingCount} Ədəd</p>
          </div>
        </div>

        {/* Completed Leads */}
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-5 flex items-center space-x-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-100">
            <CheckCircle className="h-5.5 w-5.5" />
          </div>
          <div>
            <p className="font-sans text-[10px] uppercase font-bold tracking-wider text-gray-400">
              Həll Olunmuş
            </p>
            <p className="font-sans text-lg font-bold text-emerald-600">{completedCount} Ədəd</p>
          </div>
        </div>
      </div>

      {/* Sub Tabs and Search bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-3">
        <div className="flex space-x-1.5 border-b sm:border-0 border-gray-100 pb-2 sm:pb-0">
          <button
            onClick={() => setActiveSubTab("quotes")}
            className={`flex items-center space-x-2 rounded-lg px-4 py-2 font-sans text-xs font-bold transition ${
              activeSubTab === "quotes"
                ? "bg-gray-950 text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Qiymət Hesablamaları ({quotes.length})</span>
          </button>
          <button
            onClick={() => setActiveSubTab("inquiries")}
            className={`flex items-center space-x-2 rounded-lg px-4 py-2 font-sans text-xs font-bold transition ${
              activeSubTab === "inquiries"
                ? "bg-gray-950 text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Əlaqə Mesajları ({inquiries.length})</span>
          </button>
        </div>

        <div className="relative w-full max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Müştəri və ya mövzu axtar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-1.5 pl-9 pr-4 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500"
          />
        </div>
      </div>

      {/* Table grid */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs">
        {activeSubTab === "quotes" ? (
          filteredQuotes.length === 0 ? (
            <div className="text-center py-12 text-gray-400 font-sans text-xs">
              Müraciət tapılmadı.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Müştəri / Şirkət</th>
                    <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Xidmət Növü</th>
                    <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Büdcə Təxmini</th>
                    <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Müddət</th>
                    <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Status</th>
                    <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500 text-right">Əməliyyat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs text-gray-600">
                  {filteredQuotes.map((q) => (
                    <tr key={q.id} className="hover:bg-gray-50/40">
                      <td className="px-6 py-4.5">
                        <p className="font-bold text-gray-900">{q.name}</p>
                        <p className="text-[10px] text-gray-400">{q.company} • {q.email}</p>
                      </td>
                      <td className="px-6 py-4.5">
                        <span className="inline-block rounded bg-blue-50 px-2 py-0.5 font-bold text-blue-600 uppercase text-[9px]">
                          {q.serviceType}
                        </span>
                      </td>
                      <td className="px-6 py-4.5 font-bold text-gray-900">{q.budget}</td>
                      <td className="px-6 py-4.5 text-gray-500">{q.deadline}</td>
                      <td className="px-6 py-4.5">
                        <span
                          className={`inline-flex items-center space-x-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            q.status === "Pending"
                              ? "bg-amber-50 text-amber-700"
                              : q.status === "Contacted"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              q.status === "Pending"
                                ? "bg-amber-500"
                                : q.status === "Contacted"
                                ? "bg-blue-500"
                                : "bg-emerald-500"
                            }`}
                          ></span>
                          <span>
                            {q.status === "Pending"
                              ? "Gözləyir"
                              : q.status === "Contacted"
                              ? "Əlaqə saxlanılıb"
                              : "Tamamlanıb"}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4.5 text-right space-x-1">
                        <button
                          onClick={() => setSelectedQuote(q)}
                          className="inline-flex h-7 w-7 items-center justify-center rounded bg-gray-100 hover:bg-gray-200 text-gray-600"
                          title="Ətraflı bax"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        {q.status === "Pending" && (
                          <button
                            onClick={() => onUpdateQuoteStatus(q.id, "Contacted")}
                            className="inline-flex h-7 w-7 items-center justify-center rounded bg-blue-50 hover:bg-blue-100 text-blue-600"
                            title="Əlaqə saxlanıldı"
                          >
                            <PhoneCall className="h-3.5 w-3.5" />
                          </button>
                        )}
                        {q.status !== "Completed" && (
                          <button
                            onClick={() => onUpdateQuoteStatus(q.id, "Completed")}
                            className="inline-flex h-7 w-7 items-center justify-center rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
                            title="Tamamla"
                          >
                            <Check className="h-3.5 w-3.5" />
                          </button>
                        )}
                        <button
                          onClick={() => onDeleteQuote(q.id)}
                          className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-50 hover:bg-red-100 text-red-600"
                          title="Sil"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : filteredInquiries.length === 0 ? (
          <div className="text-center py-12 text-gray-400 font-sans text-xs">
            Mesaj tapılmadı.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Müraciətçi / E-poçt</th>
                  <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Mövzu</th>
                  <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Bülleten Abunəliyi</th>
                  <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500">Status</th>
                  <th className="px-6 py-3 font-sans text-xs font-bold text-gray-500 text-right">Əməliyyat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs text-gray-600">
                {filteredInquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-gray-50/40">
                    <td className="px-6 py-4.5">
                      <p className="font-bold text-gray-900">{inq.firstName} {inq.lastName}</p>
                      <p className="text-[10px] text-gray-400">{inq.email}</p>
                    </td>
                    <td className="px-6 py-4.5 font-semibold text-gray-800">{inq.subject}</td>
                    <td className="px-6 py-4.5 text-gray-400">
                      {inq.newsletter ? (
                        <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold">Razıdır</span>
                      ) : (
                        <span className="text-gray-400 bg-gray-50 px-2 py-0.5 rounded text-[10px]">İmtina</span>
                      )}
                    </td>
                    <td className="px-6 py-4.5">
                      <span
                        className={`inline-flex items-center space-x-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          inq.status === "Pending"
                            ? "bg-amber-50 text-amber-700"
                            : inq.status === "Contacted"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            inq.status === "Pending"
                              ? "bg-amber-500"
                              : inq.status === "Contacted"
                              ? "bg-blue-500"
                              : "bg-emerald-500"
                          }`}
                        ></span>
                        <span>
                          {inq.status === "Pending"
                            ? "Gözləyir"
                            : inq.status === "Contacted"
                            ? "Müzakirədə"
                            : "Cavablandırılıb"}
                        </span>
                      </span>
                    </td>
                    <td className="px-6 py-4.5 text-right space-x-1">
                      <button
                        onClick={() => setSelectedInquiry(inq)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded bg-gray-100 hover:bg-gray-200 text-gray-600"
                        title="Mesajı oxu"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      {inq.status === "Pending" && (
                        <button
                          onClick={() => onUpdateInquiryStatus(inq.id, "Contacted")}
                          className="inline-flex h-7 w-7 items-center justify-center rounded bg-blue-50 hover:bg-blue-100 text-blue-600"
                          title="Əlaqə saxlanıldı"
                        >
                          <PhoneCall className="h-3.5 w-3.5" />
                        </button>
                      )}
                      {inq.status !== "Completed" && (
                        <button
                          onClick={() => onUpdateInquiryStatus(inq.id, "Completed")}
                          className="inline-flex h-7 w-7 items-center justify-center rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
                          title="Tamamla"
                        >
                          <Check className="h-3.5 w-3.5" />
                        </button>
                      )}
                      <button
                        onClick={() => onDeleteInquiry(inq.id)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-50 hover:bg-red-100 text-red-600"
                        title="Sil"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Expanded Modal popups for details */}
      <AnimatePresence>
        {/* Quote Detail Modal */}
        {selectedQuote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div onClick={() => setSelectedQuote(null)} className="absolute inset-0 bg-black/55 backdrop-blur-xs"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl z-10 space-y-4"
            >
              <h3 className="font-sans text-base font-bold text-gray-950 border-b pb-2">Qiymət Sorğusu Təfərrüatları</h3>
              <div className="space-y-3.5 text-xs text-gray-700">
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Ad Soyad:</span>
                  <span className="col-span-2 font-sans font-bold text-gray-950">{selectedQuote.name}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Şirkət:</span>
                  <span className="col-span-2 font-sans">{selectedQuote.company}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Əlaqə:</span>
                  <span className="col-span-2 font-mono">{selectedQuote.phone} | {selectedQuote.email}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Xidmət növü:</span>
                  <span className="col-span-2 uppercase font-bold text-blue-600">{selectedQuote.serviceType}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Təxmini Büdcə:</span>
                  <span className="col-span-2 font-sans font-black text-emerald-600">{selectedQuote.budget}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Gözlənilən Müddət:</span>
                  <span className="col-span-2">{selectedQuote.deadline}</span>
                </div>
                <div className="border-t pt-3 space-y-1">
                  <p className="font-sans font-semibold text-gray-400">Layihə tələbləri / qeydlər:</p>
                  <p className="font-sans bg-gray-50 p-2.5 rounded text-gray-600 leading-relaxed max-h-28 overflow-y-auto">
                    {selectedQuote.requirements}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="rounded-lg bg-gray-900 px-4 py-2 font-sans text-xs font-bold text-white hover:bg-gray-800 transition"
                >
                  Bağla
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Inquiry Detail Modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div onClick={() => setSelectedInquiry(null)} className="absolute inset-0 bg-black/55 backdrop-blur-xs"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl z-10 space-y-4"
            >
              <h3 className="font-sans text-base font-bold text-gray-950 border-b pb-2">Mesaj Təfərrüatları</h3>
              <div className="space-y-3.5 text-xs text-gray-700">
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Müraciətçi:</span>
                  <span className="col-span-2 font-sans font-bold text-gray-950">{selectedInquiry.firstName} {selectedInquiry.lastName}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">E-poçt:</span>
                  <span className="col-span-2 font-mono">{selectedInquiry.email}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Mövzu:</span>
                  <span className="col-span-2 font-sans font-semibold text-gray-950">{selectedInquiry.subject}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-sans font-semibold text-gray-400">Məlumat bülleteni:</span>
                  <span className="col-span-2 font-sans">
                    {selectedInquiry.newsletter ? "Aylıq bülleten abunəliyi istəyir" : "İmtina edib"}
                  </span>
                </div>
                <div className="border-t pt-3 space-y-1">
                  <p className="font-sans font-semibold text-gray-400">Mətn mesajı:</p>
                  <p className="font-sans bg-gray-50 p-2.5 rounded text-gray-600 leading-relaxed max-h-36 overflow-y-auto">
                    {selectedInquiry.message}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="rounded-lg bg-gray-900 px-4 py-2 font-sans text-xs font-bold text-white hover:bg-gray-800 transition"
                >
                  Bağla
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
