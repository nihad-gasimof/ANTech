import React from "react";
import { TabType } from "../types";
import { IMAGES, testimonials } from "../data";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Zap,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  setActiveTab: (tab: TabType) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16 py-8"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* Text block */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:col-span-6"
          >
            <div className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700">
              <Zap className="h-3.5 w-3.5 animate-pulse text-blue-600" />
              <span>Gələcəyin Texnoloji Həlləri Bakıda</span>
            </div>
            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              İdeyalarınızı <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Mükəmməl Rəqəmsal
              </span>{" "}
              Reallığa Çeviririk
            </h1>
            <p className="font-sans text-base text-gray-500 max-w-xl">
              AN Tech Solutions Azərbaycan sənayesində veb-inkişaf, mobil tətbiqlərin yaradılması və fərdi CRM/ERP idarəetmə sistemləri üzrə ixtisaslaşmış premium IT tərəfdaşınızdır.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setActiveTab("ai-advisor")}
                className="flex items-center justify-center space-x-2 rounded-lg bg-blue-600 px-5 py-3 font-sans text-sm font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-98 transition-all cursor-pointer"
              >
                <span>AI Məsləhətçi ilə Başla</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveTab("crm")}
                className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-sans text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-98 transition-all cursor-pointer"
              >
                <span>Qiymət Təklifi Al (Dinamik)</span>
              </button>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
              <div>
                <p className="font-sans text-2xl font-bold text-gray-900">100+</p>
                <p className="font-sans text-xs text-gray-400">Uğurlu Layihə</p>
              </div>
              <div>
                <p className="font-sans text-2xl font-bold text-gray-900">10+</p>
                <p className="font-sans text-xs text-gray-400">Sənaye Təcrübəsi</p>
              </div>
              <div>
                <p className="font-sans text-2xl font-bold text-gray-900">100%</p>
                <p className="font-sans text-xs text-gray-400">Məmnuniyyət</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div
            variants={itemVariants}
            className="mt-12 lg:mt-0 lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-lg"></div>
              <img
                src={IMAGES.homeHero}
                alt="AN Tech Solutions Digital Dashboard Overview"
                className="relative rounded-2xl border border-gray-100 bg-white shadow-xl max-h-[420px] w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center space-y-3 mb-10">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            Peşəkar Xidmətlərimiz
          </p>
          <h2 className="font-sans text-2xl sm:text-3.5xl font-extrabold text-gray-950">
            Biznesiniz üçün Güclü Texnoloji Alətlər
          </h2>
          <p className="font-sans text-sm text-gray-400 max-w-xl mx-auto">
            Hər bir şirkətin rəqəmsal transformasiyası fərdi və unikal yanaşma tələb edir. Biz sizə ən uyğun həlləri təklif edirik.
          </p>
        </motion.div>

        {/* Dynamic Bento Box */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Web service card */}
          <motion.div
            variants={itemVariants}
            onClick={() => setActiveTab("services")}
            className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-blue-100 hover:shadow-md transition duration-200"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Globe className="h-5.5 w-5.5" />
            </div>
            <h3 className="mt-4 font-sans text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
              Veb İnkişafı
            </h3>
            <p className="mt-2 font-sans text-sm text-gray-500">
              Yüksək sürətli korporativ saytlar, portallar və e-ticarət platformaları. React və Next.js ilə tam fərdi proqramlaşdırma.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-blue-600">
              <span>Ətraflı Bax</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Mobile service card */}
          <motion.div
            variants={itemVariants}
            onClick={() => setActiveTab("services")}
            className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-blue-100 hover:shadow-md transition duration-200"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Smartphone className="h-5.5 w-5.5" />
            </div>
            <h3 className="mt-4 font-sans text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
              Mobil Tətbiqlər
            </h3>
            <p className="mt-2 font-sans text-sm text-gray-500">
              iOS və Android platformaları üçün doğma (native) və çarpaz platformalı (Flutter/React Native) mobil tətbiqlərin yaradılması.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-blue-600">
              <span>Ətraflı Bax</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* CRM service card */}
          <motion.div
            variants={itemVariants}
            onClick={() => setActiveTab("crm")}
            className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-blue-100 hover:shadow-md transition duration-200"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Database className="h-5.5 w-5.5" />
            </div>
            <h3 className="mt-4 font-sans text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
              Fərdi CRM & ERP
            </h3>
            <p className="mt-2 font-sans text-sm text-gray-500">
              Biznes proseslərinin idarə edilməsi, müştəri münasibətləri və satış analitikası üçün tamamilə şirkətinizə xas proqram təminatı.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-blue-600">
              <span>Ətraflı Bax</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section (Cooling Fans Visual / Why Us) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <img
              src={IMAGES.homeFans}
              alt="High-performance data infrastructure visual representation"
              className="rounded-2xl w-full max-h-[300px] object-cover shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-7 space-y-5 lg:pl-6">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-950">
              Niyə AN Tech Solutions-u Seçməlisiniz?
            </h3>
            <p className="font-sans text-sm text-gray-500">
              Biz təkcə proqram təminatı hazırlamırıq, həm də biznesinizin gəlirliliyini, effektivliyini və kiber təhlükəsizliyini təmin edən həllər qururuq.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "100% Azərbaycan Qanunvericiliyi və Ödəniş Sistemlərinə uyğunluq",
                "Fərdi UI/UX dizayn (Şablonlardan istifadə edilmir)",
                "ISO 27001 səviyyəsində yüksək təhlükəsizlik və kiber-müdafiə",
                "6 aylıq ödənişsiz texniki zəmanət və 24/7 operativ dəstək",
              ].map((text, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs font-medium text-gray-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab("about")}
                className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Haqqımızda və Texnologiyalarımızla Tanış Olun</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-2 mb-10">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
              Müştərilərimizin Səsi
            </p>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-gray-950">
              Birlikdə İşlədiyimiz Partnyorların Rəyləri
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs relative"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-3.5 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="font-sans text-sm text-gray-600 italic">
                    "{test.feedback}"
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-3 border-t border-gray-50 pt-4">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="h-10 w-10 rounded-full object-cover border border-gray-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-sans text-sm font-bold text-gray-900">
                      {test.name}
                    </h4>
                    <p className="font-sans text-xs text-gray-400">
                      {test.role}, {test.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action (Discussion) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-10 shadow-xl sm:px-12 sm:py-14 text-center space-y-6">
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500 opacity-25"></div>
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-500 opacity-25"></div>
          
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-white max-w-xl mx-auto">
            Gəlin Yeni Müvəffəqiyyət Layihənizi Birlikdə Qururuq!
          </h2>
          <p className="font-sans text-sm text-blue-100 max-w-xl mx-auto">
            Hər hansı bir veb tətbiq, mobil inkişaf və ya daxili CRM avtomatlaşdırılması ilə bağlı suallarınız var? Süni İntellekt IT məsləhətçimiz suallarınızı cavablandırmaq üçün buradadır.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              onClick={() => setActiveTab("contact")}
              className="w-full sm:w-auto rounded-lg bg-white px-5 py-3 font-sans text-sm font-semibold text-blue-600 hover:bg-blue-50 active:scale-98 transition"
            >
              Bizə Mesaj Göndərin
            </button>
            <button
              onClick={() => setActiveTab("ai-advisor")}
              className="w-full sm:w-auto rounded-lg bg-blue-700 px-5 py-3 font-sans text-sm font-semibold text-white hover:bg-blue-800 active:scale-98 transition border border-blue-500"
            >
              Süni İntellekt ilə Dərhal Müzakirə Et
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
