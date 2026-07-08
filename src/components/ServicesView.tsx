import React from "react";
import { TabType } from "../types";
import { services } from "../data";
import {
  Globe,
  Smartphone,
  Database,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

interface ServicesViewProps {
  setActiveTab: (tab: TabType) => void;
  setSelectedServiceForQuote: (service: string) => void;
}

export default function ServicesView({
  setActiveTab,
  setSelectedServiceForQuote,
}: ServicesViewProps) {
  const [activeAccordion, setActiveAccordion] = React.useState<string>("web");

  const iconMap: Record<string, any> = {
    Globe: Globe,
    Smartphone: Smartphone,
    Database: Database,
    ShieldCheck: ShieldCheck,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleStartQuote = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId);
    setActiveTab("crm");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16 py-8"
    >
      {/* Services Hero */}
      <section className="text-center space-y-4 px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-1 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span>Fərdi & Genişləndirilə bilən İnfrastruktur</span>
        </div>
        <h1 className="font-sans text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4.5xl">
          Müasir Biznes Üçün Texnoloji Həllər
        </h1>
        <p className="font-sans text-sm text-gray-500">
          Biznesinizin ehtiyac duyduğu bütün texnoloji infrastruktur, proqram təminatı və təhlükəsizlik həllərini bir dam altında təklif edirik.
        </p>
      </section>

      {/* Main Interactive Service Bento Accordion */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left panel: Quick List */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="font-sans text-sm font-bold text-gray-400 uppercase tracking-widest mb-1.5">
              Xidmət Siyahısı
            </h3>
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Globe;
              const isActive = activeAccordion === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveAccordion(service.id)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition duration-150 ${
                    isActive
                      ? "border-blue-500 bg-blue-50/60 shadow-xs"
                      : "border-gray-100 bg-white hover:bg-gray-50/50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-gray-950">
                        {service.title}
                      </h4>
                      <p className="font-sans text-[11px] text-gray-400 max-w-xs truncate">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 text-gray-400 transition-transform ${
                      isActive ? "rotate-90 text-blue-600" : ""
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right panel: Active Service Details */}
          <div className="lg:col-span-7">
            {services.map((service) => {
              if (service.id !== activeAccordion) return null;
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xs space-y-5"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-sans text-lg sm:text-xl font-bold text-gray-950">
                        {service.title}
                      </h3>
                      <span className="inline-block rounded bg-blue-50 px-2 py-0.5 font-sans text-xs font-semibold text-blue-600">
                        {service.pricing}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {service.longDesc}
                  </p>

                  <div className="border-t border-gray-50 pt-5">
                    <h4 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-3.5">
                      Əsas Funksionallıq və Üstünlüklər
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-50 pt-5 flex items-center justify-between">
                    <div>
                      <p className="font-sans text-[10px] text-gray-400">Texniki Dəstək</p>
                      <p className="font-sans text-xs font-semibold text-gray-800">
                        6 Ay Ödənişsiz Texniki Dəstək & Zəmanət
                      </p>
                    </div>
                    <button
                      onClick={() => handleStartQuote(service.id)}
                      className="rounded-xl bg-blue-600 px-4.5 py-2.5 font-sans text-xs font-semibold text-white shadow-md shadow-blue-100 hover:bg-blue-700 transition cursor-pointer"
                    >
                      Qiymət Hesabla
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech stack logo wall */}
      <section className="bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-100 text-center">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
            İstifadə Etdiyimiz Texnologiyalar
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 grayscale hover:grayscale-0 transition duration-300">
            {["React", "Next.js", "TypeScript", "Node.js", "Docker", "PostgreSQL", "AWS", "Firebase", "Flutter"].map((tech, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 px-4.5 py-2 rounded-xl shadow-xs text-xs font-semibold font-mono text-gray-500"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
