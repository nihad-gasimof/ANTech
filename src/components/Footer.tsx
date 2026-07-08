import React from "react";
import { TabType } from "../types";
import { Globe, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-4 col-span-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Globe className="h-5 w-5" />
              </div>
              <span className="font-sans text-base font-bold text-gray-900">
                AN Tech Solutions
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs font-sans">
              Bizneslərin rəqəmsal transformasiyası üçün mükəmməl və etibarlı proqram təminatı, veb, mobil inkişaf və CRM həlləri təqdim edirik.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                  Xidmətlər
                </h3>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <button
                      onClick={() => setActiveTab("services")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      Veb İnkişafı
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("services")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      Mobil Tətbiqlər
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("crm")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      Fərdi CRM & ERP
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("services")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      Kiber Təhlükəsizlik
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                  Korporativ
                </h3>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <button
                      onClick={() => setActiveTab("about")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      Haqqımızda
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("portfolio")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      İşlərimiz (Portfel)
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("ai-advisor")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      Süni İntellekt
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("contact")}
                      className="font-sans text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      Əlaqə & Dəstək
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Address & Contact info */}
            <div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                Ofisimiz Bakıda
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start space-x-2.5 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs">
                    Baku Tower, Heydər Əliyev pr. 109, Bakı, Azərbaycan
                  </span>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-gray-500">
                  <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                  <span className="font-sans text-xs">+994 (12) 400-TECH</span>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-gray-500">
                  <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                  <span className="font-sans text-xs">info@antechsolutions.az</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="font-sans text-xs text-gray-400">
            &copy; {currentYear} AN Tech Solutions. Bütün hüquqlar qorunur.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <button
              onClick={() => setActiveTab("admin")}
              className="font-sans text-xs text-gray-400 hover:text-blue-600 underline"
            >
              Müştəri Sifarişləri Portalı (Admin Girişi)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
