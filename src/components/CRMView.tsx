import React from "react";
import { QuoteRequest } from "../types";
import { IMAGES } from "../data";
import {
  TrendingUp,
  BrainCircuit,
  Eye,
  ShieldCheck,
  PlusCircle,
  Calculator,
  ArrowRight,
  Sparkles,
  DollarSign,
  Briefcase,
} from "lucide-react";
import { motion } from "motion/react";

interface CRMViewProps {
  onSubmitQuote: (quote: Omit<QuoteRequest, "id" | "date" | "status">) => void;
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
}

export default function CRMView({
  onSubmitQuote,
  selectedServiceId,
  setSelectedServiceId,
}: CRMViewProps) {
  // Quotation Builder States
  const [complexity, setComplexity] = React.useState<"small" | "medium" | "enterprise">("medium");
  const [extraFeatures, setExtraFeatures] = React.useState<string[]>([]);
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [requirements, setRequirements] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  // Prices model
  const BASE_PRICES: Record<string, number> = {
    web: 2500,
    mobile: 4000,
    crm: 5000,
    security: 1500,
    other: 2000,
  };

  const COMPLEXITY_MULTIPLIER = {
    small: 0.8,
    medium: 1.0,
    enterprise: 1.5,
  };

  const EXTRA_FEATURES_PRICES: Record<string, { label: string; price: number }> = {
    payment: { label: "Ödəniş Sistemləri İnteqrasiyası", price: 600 },
    multilang: { label: "Çoxdilli (Multilingual) Dəstək", price: 400 },
    gps: { label: "GPS / Xəritə İzləmə Sistemi", price: 900 },
    ai: { label: "AI (Süni İntellekt) Köməkçisi", price: 1200 },
    biometric: { label: "FaceID / Barmaq izi Təhlükəsizliyi", price: 500 },
  };

  // Calculate estimated budget
  const calculateTotal = () => {
    const base = BASE_PRICES[selectedServiceId] || 2000;
    const mult = COMPLEXITY_MULTIPLIER[complexity];
    const extrasTotal = extraFeatures.reduce(
      (sum, featKey) => sum + (EXTRA_FEATURES_PRICES[featKey]?.price || 0),
      0
    );
    return Math.round(base * mult + extrasTotal);
  };

  const toggleExtraFeature = (key: string) => {
    if (extraFeatures.includes(key)) {
      setExtraFeatures(extraFeatures.filter((f) => f !== key));
    } else {
      setExtraFeatures([...extraFeatures, key]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      return;
    }

    const estimatedBudget = `${calculateTotal()} AZN`;
    onSubmitQuote({
      name,
      company: company || "Fərdi Müştəri",
      email,
      phone,
      serviceType: selectedServiceId as any,
      budget: estimatedBudget,
      deadline: complexity === "small" ? "1-2 Ay" : complexity === "medium" ? "2-3 Ay" : "4-6 Ay",
      requirements: requirements || `Complexity: ${complexity}. Extra Features: ${extraFeatures.join(", ")}`,
    });

    setSubmitted(true);
    // Reset form after a small timeout or keep state to show success
    setTimeout(() => {
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setRequirements("");
      setExtraFeatures([]);
      setSubmitted(false);
    }, 4500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16 py-8"
    >
      {/* CRM Hero */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
              <span>Daxili Biznes Avtomatlaşdırılması</span>
            </div>
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4.5xl">
              Müştəri Əlaqələrini Müasir Texnologiya ilə İdarə Edin
            </h1>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              AN Tech Solutions olaraq, biznesinizin böyüməsi üçün tamamilə sizə xas olan, şablonlardan uzaq fərdi CRM və ERP proqram təminatları yaradırıq. Satışlarınızı artırın, əməliyyat xərclərinizi azaldın və daxili proseslərinizi avtomatlaşdırın.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
              <div className="flex items-start space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-gray-900">Satışın Artırılması</h4>
                  <p className="font-sans text-[11px] text-gray-400">Satış kəmərlərinin vizuallaşdırılması və izlənməsi</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <BrainCircuit className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-gray-900">Ağıllı Avtomatlaşdırma</h4>
                  <p className="font-sans text-[11px] text-gray-400">Avtomatik bildirişlər və fərdi tapşırıq planlaması</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-span-6">
            <img
              src={IMAGES.crmHero}
              alt="AN Tech CRM and Business Dashboard UI Screenshot Mockup"
              className="rounded-2xl border border-gray-100 bg-white shadow-xl max-h-[380px] w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            Fərqlərimiz
          </p>
          <h2 className="font-sans text-2xl font-extrabold text-gray-950">
            Fərdi CRM Sistemlərinin Əsas Üstünlükləri
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Dərin Məlumat Analitikası",
              desc: "Biznesinizdəki gəlir, xərc və komanda KPI göstəricilərini anlıq interaktiv qrafiklərlə izləyin.",
              icon: TrendingUp,
              col: "text-blue-600 bg-blue-50",
            },
            {
              title: "Ağıllı Avtomatlaşdırma",
              desc: "E-poçt, WhatsApp və SMS bildirişlərini avtomatlaşdıraraq müştəri məmnuniyyətini artırın.",
              icon: BrainCircuit,
              col: "text-purple-600 bg-purple-50",
            },
            {
              title: "İntuitiv İnterfeys (UX)",
              desc: "Komandanızın əlavə təlimlərə ehtiyac duymadan asanlıqla istifadə edə biləcəyi təmiz, minimalist dizayn.",
              icon: Eye,
              col: "text-emerald-600 bg-emerald-50",
            },
            {
              title: "Korporativ Təhlükəsizlik",
              desc: "Hər bir əməkdaş üçün fərdi səlahiyyət rolları, biometrik təhlükəsizlik və sızmalara qarşı tam müdafiə.",
              icon: ShieldCheck,
              col: "text-amber-600 bg-amber-50",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs hover:shadow-sm transition"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.col}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3.5 font-sans text-sm font-bold text-gray-900">{item.title}</h4>
                <p className="mt-1 font-sans text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamic Quotation Builder / Price Estimator Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100/60 bg-blue-50/30 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
              <Calculator className="h-5.5 w-5.5" />
            </div>
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-gray-900">
              Dinamik Qiymət Hesablayıcı (Quotation Builder)
            </h2>
            <p className="font-sans text-xs text-gray-500 max-w-md mx-auto">
              Layihə növünü, mürəkkəbliyini və əlavə funksiyaları seçərək anında təxmini inkişaf büdcəsini hesablayın.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Service Type */}
            <div className="space-y-2.5">
              <label className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                1. Layihə Növünü Seçin
              </label>
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  { id: "web", label: "Veb İnkişafı", desc: "React, Next.js, Portal" },
                  { id: "mobile", label: "Mobil Tətbiq", desc: "Swift, Kotlin, Flutter" },
                  { id: "crm", label: "CRM / ERP Sistem", desc: "Fərdi Biznes Proqramı" },
                  { id: "security", label: "Bulud & Kiber Audit", desc: "Server, Audit, AWS" },
                  { id: "other", label: "Digər Xidmət", desc: "Fərdi İnkişaf" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`rounded-xl border p-3.5 text-left transition ${
                      selectedServiceId === s.id
                        ? "border-blue-500 bg-white shadow-xs"
                        : "border-gray-100 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="block font-sans text-xs font-bold text-gray-950">{s.label}</span>
                    <span className="block font-sans text-[10px] text-gray-400 mt-0.5">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Complexity / Scope */}
            <div className="space-y-2.5">
              <label className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                2. Layihə Həcmi və Mürəkkəbliyi
              </label>
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  { id: "small" as const, label: "Kiçik Həcmli (MVP)", desc: "1-2 Ay inkişaf, sadə sistem" },
                  { id: "medium" as const, label: "Orta Mürəkkəb (Biznes)", desc: "2-3 Ay inkişaf, inteqrasiyalar" },
                  { id: "enterprise" as const, label: "Böyük Müəssisə (Enterprise)", desc: "4-6 Ay inkişaf, maksimum təhlükəsizlik" },
                ].map((comp) => (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => setComplexity(comp.id)}
                    className={`rounded-xl border p-3.5 text-left transition ${
                      complexity === comp.id
                        ? "border-blue-500 bg-white shadow-xs"
                        : "border-gray-100 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="block font-sans text-xs font-bold text-gray-950">{comp.label}</span>
                    <span className="block font-sans text-[10px] text-gray-400 mt-0.5">{comp.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Extra Modules */}
            <div className="space-y-2.5">
              <label className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                3. Əlavə Modullar və İnteqrasiyalar
              </label>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {Object.entries(EXTRA_FEATURES_PRICES).map(([key, value]) => {
                  const isChecked = extraFeatures.includes(key);
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleExtraFeature(key)}
                      className={`flex items-center justify-between rounded-xl border p-3 text-left transition ${
                        isChecked
                          ? "border-blue-400 bg-blue-50/40"
                          : "border-gray-100 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div>
                        <span className="block font-sans text-xs font-semibold text-gray-900">
                          {value.label}
                        </span>
                        <span className="block font-sans text-[10px] text-gray-400 mt-0.5">
                          Təxmini: +{value.price} AZN
                        </span>
                      </div>
                      <PlusCircle
                        className={`h-4.5 w-4.5 shrink-0 transition ${
                          isChecked ? "text-blue-600 rotate-45" : "text-gray-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact Form info */}
            <div className="border-t border-gray-100 pt-5 space-y-4">
              <label className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400 block">
                4. Bizimlə Əlaqə Məlumatları
              </label>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Adınız, Soyadınız *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-gray-100 bg-white p-3 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Şirkətin Adı (istəyə bağlı)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-gray-100 bg-white p-3 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="E-poçt Ünvanı *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-100 bg-white p-3 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Telefon Nömrəsi *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-100 bg-white p-3 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Xüsusi layihə tələbləriniz və ya şərhləriniz..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full rounded-xl border border-gray-100 bg-white p-3 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Estimated Output Banner and Submit */}
            <div className="rounded-2xl bg-white border border-blue-100/50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <DollarSign className="h-5.5 w-5.5" />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    Hesablanmış Təxmini Büdcə
                  </p>
                  <p className="font-sans text-xl font-black text-blue-600">
                    {calculateTotal()} AZN
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                {submitted ? (
                  <button
                    type="button"
                    disabled
                    className="w-full sm:w-auto rounded-xl bg-emerald-600 px-6 py-3 font-sans text-xs font-bold text-white shadow-xs"
                  >
                    Sorğu Göndərildi!
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-blue-600 px-6 py-3 font-sans text-xs font-bold text-white shadow-md shadow-blue-100 hover:bg-blue-700 active:scale-98 transition cursor-pointer"
                  >
                    <span>Qiymət Təklifi Sorğula</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center font-sans text-xs font-semibold text-emerald-600"
              >
                Təşəkkür edirik! Qiymət təklifi sorğunuz qəbul olundu. Layihə strategimiz qısa zamanda sizinlə əlaqə saxlayacaq. Sorğunuza 'Admin' konsolundan baxa bilərsiniz.
              </motion.p>
            )}
          </form>
        </div>
      </section>
    </motion.div>
  );
}
