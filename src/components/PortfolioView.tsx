import React from "react";
import { PortfolioItem } from "../types";
import { portfolioItems } from "../data";
import { Search, X, Check, ArrowRight, Hourglass, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioView() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<"all" | "web" | "mobile" | "crm">("all");
  const [selectedProject, setSelectedProject] = React.useState<PortfolioItem | null>(null);

  const categories = [
    { id: "all" as const, label: "Hamısı" },
    { id: "web" as const, label: "Veb İnkişafı" },
    { id: "mobile" as const, label: "Mobil Tətbiqlər" },
    { id: "crm" as const, label: "CRM & ERP" },
  ];

  // Filter projects
  const filteredProjects = portfolioItems.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12 py-8"
    >
      {/* Portfolio Header */}
      <section className="text-center space-y-4 px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
          İşlərimiz
        </p>
        <h1 className="font-sans text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
          Son IT Layihələrimiz
        </h1>
        <p className="font-sans text-sm text-gray-500">
          Uğurla yekunlaşdırdığımız, müştərilərimizin biznes fəaliyyətini tamamilə rəqəmsallaşdıran proqram təminatı işlərimizlə tanış olun.
        </p>
      </section>

      {/* Filters and Search Panel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-lg px-4 py-2 font-sans text-xs font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Layihə və ya texnologiya axtar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="font-sans text-sm text-gray-400">Axtarışınıza uyğun layihə tapılmadı.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="font-sans text-xs font-semibold text-blue-600 underline"
            >
              Bütün filtrləri sıfırla
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-xs hover:shadow-md transition duration-200"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-black/50 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Hourglass className="h-3.5 w-3.5 text-blue-600" />
                      <span>{project.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User className="h-3.5 w-3.5 text-blue-600" />
                      <span className="truncate max-w-24">{project.client}</span>
                    </span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-gray-950 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded bg-gray-50 px-2 py-0.5 font-mono text-[9px] text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Expanded Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header Image banner */}
              <div className="relative h-56 sm:h-64 bg-gray-100 shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-50 pb-4">
                  <div>
                    <span className="inline-block rounded bg-blue-50 px-2 py-0.5 font-sans text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h2 className="mt-1 font-sans text-xl font-bold text-gray-950">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <div className="flex items-center space-x-4 text-xs font-mono text-gray-400">
                    <div>
                      <p className="text-[10px] text-gray-400">Layihə Müddəti</p>
                      <p className="font-bold text-gray-800">{selectedProject.duration}</p>
                    </div>
                    <div className="border-l border-gray-100 pl-4">
                      <p className="text-[10px] text-gray-400">Sifarişçi</p>
                      <p className="font-bold text-gray-800">{selectedProject.client}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                    Layihə Haqqında
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                    Tətbiq Olunmuş Əsas Funksiyalar
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="font-sans text-xs text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-50 pt-4 space-y-2">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                    İstifadə Olunan Texnoloji Yığın (Stack)
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded bg-gray-100 px-2.5 py-1 font-mono text-[10px] font-semibold text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
