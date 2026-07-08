import React from "react";
import { IMAGES, teamMembers } from "../data";
import { Check, ShieldCheck, Heart, Eye, Target, Sparkles, Code2 } from "lucide-react";
import { motion } from "motion/react";

export default function AboutView() {
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

  const values = [
    {
      title: "Dəqiqlik",
      desc: "İşlərimizin hər bir mərhələsində planlaşdırma, kodlaşdırma və sınaq fazalarında dəqiq və professional ölçülərə əsaslanırıq.",
      icon: Target,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "İnnovasiya",
      desc: "Dünyadakı ən son texnoloji yenilikləri yaxından izləyir, tətbiqlərimizdə ən sürətli və müasir inkişaf alətlərindən istifadə edirik.",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Şəffaflıq",
      desc: "Layihə müddətində müştərilərimiz hər bir sprint, inkişaf və test addımlarını daxili idarəetmə sistemimizlə canlı izləyə bilirlər.",
      icon: Eye,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Etibarlılıq",
      desc: "Çatdırdığımız bütün sistemlərə tam təhlükəsizlik, məlumat şifrələnməsi zəmanəti və operativ texniki dəstək veririk.",
      icon: ShieldCheck,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  const techStack = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SwiftUI", "Flutter"] },
    { name: "Backend", items: ["Node.js", "C#", "Python (Django)", "PostgreSQL", "Redis", "GraphQL"] },
    { name: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS (Amazon Web Services)", "GitHub Actions", "Firebase"] },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16 py-8"
    >
      {/* About Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-5">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
              Biz Kimik?
            </p>
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Müəssisələrin Rəqəmsal Transformasiyası üçün Dəqiq Həllər
            </h1>
            <p className="font-sans text-sm text-gray-500">
              AN Tech Solutions olaraq, fəaliyyətə başladığımız ilk gündən etibarən əsas məqsədimiz yerli və qlobal şirkətləri müasir proqram təminatı sistemləri ilə gücləndirmək olmuşdur. 
            </p>
            <p className="font-sans text-sm text-gray-500">
              İnteqrasiya olunmuş proqramlaşdırma metodikası, güclü komanda ruhu və kiber təhlükəsizlik əsaslı inkişaf fəlsəfəmiz sayəsində layihələrimizi ən yüksək standartlarla təhvil veririk.
            </p>
            
            {/* Bento Stats Inside */}
            <div className="rounded-2xl bg-blue-50 border border-blue-100/50 p-5 mt-4">
              <p className="font-sans text-sm font-semibold text-blue-900">
                "10+ İllik Sənaye Təcrübəsi və Yüzlərlə Müvəffəqiyyətli Layihə."
              </p>
              <p className="mt-1 font-sans text-xs text-blue-600">
                Azərbaycanda rəqəmsallaşmanın aparıcı qüvvəsi.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 lg:mt-0 lg:col-span-6">
            <img
              src={IMAGES.aboutHero}
              alt="AN Tech Solutions core meeting and strategy planning"
              className="rounded-2xl border border-gray-100 bg-white shadow-lg max-h-[380px] w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* History & Expertise Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <motion.div variants={itemVariants} className="lg:col-span-6 order-last lg:order-first">
            <img
              src={IMAGES.aboutGlobal}
              alt="Modern technical infrastructure diagram visualization"
              className="rounded-2xl border border-gray-100 bg-white shadow-md max-h-[360px] w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-5">
            <h2 className="font-sans text-2xl font-bold text-gray-950">
              Qlobal Standartlar, Yerli Həllər
            </h2>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-sans text-sm font-bold text-gray-950 flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span>Yaranma Hekayəmiz</span>
                </h4>
                <p className="mt-1 font-sans text-xs text-gray-400 pl-3.5">
                  Böyük ideyalar kiçik bir proqramçı qrupu ilə başladı. Bu gün isə Bakının mərkəzində böyük sənaye müəssisələrinə rəqəmsal transformasiya yoldaşlığı edən aparıcı bir IT brendiyik.
                </p>
              </div>

              <div>
                <h4 className="font-sans text-sm font-bold text-gray-950 flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span>Keyfiyyət Təminatı (QA)</span>
                </h4>
                <p className="mt-1 font-sans text-xs text-gray-400 pl-3.5">
                  Kodlarımızın hər bir sətri avtomatlaşdırılmış sınaq testləri və kod auditlərindən keçir. Beləliklə, sizə qüsursuz işləyən və gələcəkdə asanlıqla genişləndirilə bilən proqram təminatı çatdırırıq.
                </p>
              </div>

              <div>
                <h4 className="font-sans text-sm font-bold text-gray-950 flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span>Modern Texnoloji Yığın</span>
                </h4>
                <div className="mt-2.5 pl-3.5 space-y-2">
                  {techStack.map((stack, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1">
                      <span className="font-sans text-[11px] font-bold text-gray-500 w-24 shrink-0">
                        {stack.name}:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {stack.items.map((item, j) => (
                          <span
                            key={j}
                            className="inline-block rounded bg-gray-100 px-2 py-0.5 font-mono text-[10px] text-gray-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center space-y-2 mb-10">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            Fəlsəfəmiz
          </p>
          <h2 className="font-sans text-2xl font-extrabold text-gray-950">
            Bizi Biz Edən Prinsiplər
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs hover:shadow-sm transition"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${v.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-sans text-base font-bold text-gray-900">{v.title}</h3>
                <p className="mt-1.5 font-sans text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
   
    </motion.div>
  );
}
