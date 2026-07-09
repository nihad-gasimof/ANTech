import React from "react";
import { TabType } from "../types";
import {
  Globe,
  Home,
  Info,
  Layers,
  Cpu,
  Mail,
  MessageSquareCode,
  Lock,
  Menu,
  X,
} from "lucide-react";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  quoteCount: number;
  inquiryCount: number;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  quoteCount,
  inquiryCount,
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: "home" as TabType, label: "Ana Səhifə", icon: Home },
    { id: "about" as TabType, label: "Haqqımızda", icon: Info },
    { id: "services" as TabType, label: "Xidmətlər", icon: Layers },
    { id: "portfolio" as TabType, label: "Portfel", icon: Cpu },
    { id: "crm" as TabType, label: "CRM", icon: MessageSquareCode },
    { id: "contact" as TabType, label: "Əlaqə", icon: Mail },
  ];

  const totalNotifications = quoteCount + inquiryCount;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div
          onClick={() => setActiveTab("home")}
          className="flex cursor-pointer items-center space-x-2.5 transition-transform active:scale-95"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
<img src="assets\high_definition_hd_instagram_profile_picture_version_of_the_network_nodes_logo.png" alt="AN Tech Logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <span className="font-sans text-lg font-bold tracking-tight text-gray-950">
              AN Tech
            </span>
            <span className="ml-1 rounded bg-blue-50 px-1.5 py-0.5 font-sans text-xs font-semibold text-blue-600">
              Solutions
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-1.5 rounded-lg px-3 py-2 font-sans text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Dynamic CTA buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {/* AI IT Advisor Button */}
          <button
            onClick={() => setActiveTab("ai-advisor")}
            className={`relative flex items-center space-x-2 rounded-full px-4 py-2 font-sans text-xs font-semibold transition-all duration-200 ${
              activeTab === "ai-advisor"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>AI Məsləhətçi</span>
          </button>

          {/* Admin Back-office Console */}
          <button
            onClick={() => setActiveTab("admin")}
            className={`relative flex h-9 w-9 items-center justify-center rounded-lg border text-gray-500 transition-all ${
              activeTab === "admin"
                ? "border-blue-300 bg-blue-50 text-blue-600"
                : "border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900"
            }`}
            title="Sifarişlər və Mesajlar Konsolu"
          >
            <Lock className="h-4 w-4" />
            {totalNotifications > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {totalNotifications}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setActiveTab("ai-advisor")}
            className={`flex items-center space-x-1 rounded-full px-3 py-1.5 text-xs font-semibold ${
              activeTab === "ai-advisor"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span>AI</span>
          </button>

          <button
            onClick={() => setActiveTab("admin")}
            className="relative flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500"
          >
            <Lock className="h-3.5 w-3.5" />
            {totalNotifications > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                {totalNotifications}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center space-x-2.5 rounded-lg px-3 py-2.5 font-sans text-sm font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="border-t border-gray-100 pt-2.5 mt-2.5">
              <button
                onClick={() => {
                  setActiveTab("ai-advisor");
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-center space-x-2 rounded-lg py-2.5 font-sans text-sm font-semibold ${
                  activeTab === "ai-advisor"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>AI IT Məsləhətçi ilə Söhbət</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
