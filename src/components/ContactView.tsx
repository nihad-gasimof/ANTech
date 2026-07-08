import React from "react";
import { ContactInquiry } from "../types";
import { IMAGES } from "../data";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Bell,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

interface ContactViewProps {
  onSubmitInquiry: (inquiry: Omit<ContactInquiry, "id" | "date" | "status">) => void;
}

export default function ContactView({ onSubmitInquiry }: ContactViewProps) {
  // Form States
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("Məsləhətləşmə");
  const [message, setMessage] = React.useState("");
  const [newsletter, setNewsletter] = React.useState(true);
  const [agreedToTerms, setAgreedToTerms] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);

  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message || !agreedToTerms) {
      return;
    }

    onSubmitInquiry({
      firstName,
      lastName,
      email,
      subject,
      message,
      newsletter,
    });

    setSubmitted(true);
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 4500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16 py-8"
    >
      {/* Contact Hero */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
              <span>Daim Sizinləyik</span>
            </div>
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4.5xl">
              Texnoloji Gələcəyi Birlikdə Qururuq
            </h1>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Bizim komanda hər növ fərdi IT layihələri, inkişaf addımları və kiber təhlükəsizlik sualları ilə bağlı sizə kömək etməyə hazırdır. Sual və ya müraciətinizi göndərin, qısa zamanda ətraflı cavablandıraq.
            </p>

            <div className="space-y-3.5 border-t border-gray-100 pt-5">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="font-sans text-xs">Baku Tower, Heydər Əliyev pr. 109, Bakı, Azərbaycan</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="font-sans text-xs">+994 (55) 535-70-04 </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="font-sans text-xs">antechsolut@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-span-6">
            <img
              src={IMAGES.contactHero}
              alt="AN Tech Solutions glass office overview with Baku cityscape"
              className="rounded-2xl border border-gray-100 bg-white shadow-xl max-h-[380px] w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Panel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Contact details */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs space-y-5">
             

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <Clock className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />

                </div>

                <div className="flex items-start space-x-3">
                  <Bell className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-gray-900">Texniki Dəstək</h4>
                    <p className="font-sans text-[11px] text-gray-400">Zəmanətli müştərilərimiz üçün 24/7 operativ bilet və sistem monitorinq kanalı mövcuddur.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter widget */}
            <div className="rounded-2xl border border-blue-50 bg-blue-50/20 p-6 space-y-4">
              <h4 className="font-sans text-sm font-bold text-blue-900">Yeniliklərdən Xəbərdar Olun</h4>
              <p className="font-sans text-xs text-blue-700">
                Azərbaycandakı IT trendləri, yeni kiber təhlükəsizlik təlimatları və xidmətlərimiz haqqında aylıq məlumat bülleteni alın.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="E-poçtunuz..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-100 bg-white px-3 py-2 font-sans text-xs text-gray-800 placeholder-gray-400 outline-hidden focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-4 py-2 font-sans text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition"
                >
                  Abunə ol
                </button>
              </form>
              {newsletterSubscribed && (
                <p className="font-sans text-[11px] font-medium text-emerald-600">
                  Uğurla abunə olundunuz! Məlumat bülletenləri tezliklə göndəriləcək.
                </p>
              )}
            </div>
          </div>

          {/* Interactive message form */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="font-sans text-base sm:text-lg font-bold text-gray-950 mb-1">
                Bizə Mesaj Göndərin
              </h3>
              <p className="font-sans text-xs text-gray-400 mb-6">
                Aşağıdakı formanı dolduraraq bizə birbaşa yazın. Mesajınız 1 saat ərzində operatorumuz tərəfindən cavablandırılacaqdır.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="font-sans text-[11px] font-bold text-gray-500">Adınız *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ad"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 font-sans text-xs text-gray-800 outline-hidden focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans text-[11px] font-bold text-gray-500">Soyadınız *</label>
                    <input
                      type="text"
                      required
                      placeholder="Soyad"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 font-sans text-xs text-gray-800 outline-hidden focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="font-sans text-[11px] font-bold text-gray-500">E-poçt Ünvanı *</label>
                    <input
                      type="email"
                      required
                      placeholder="e-poct@unvan.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 font-sans text-xs text-gray-800 outline-hidden focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans text-[11px] font-bold text-gray-500">Mövzu</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 font-sans text-xs text-gray-800 outline-hidden focus:border-blue-500"
                    >
                      <option value="Məsləhətləşmə">Məsləhətləşmə (IT consulting)</option>
                      <option value="Sifariş">Yeni Proqram Təminatı Sifarişi</option>
                      <option value="Kiber Təhlükəsizlik">Kiber Təhlükəsizlik Auditi</option>
                      <option value="Dəstək">Mövcud Müştəri Dəstəyi</option>
                      <option value="Digər">Digər Mövzu</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-sans text-[11px] font-bold text-gray-500">Mesajınız *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Sual və ya tələblərinizi bura yazın..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white p-3 font-sans text-xs text-gray-800 outline-hidden focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start space-x-2.5">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="font-sans text-[11px] text-gray-400 select-none">
                      Məlumatlarımın Azərbaycan Respublikasının Şəxsi Məlumatların Mühafizəsi qanunvericiliyinə uyğun şəkildə emal edilməsinə razıyam. *
                    </label>
                  </div>

                  <div className="flex items-start space-x-2.5">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="font-sans text-[11px] text-gray-400 select-none">
                      Yeniliklər və faydalı IT mövzularında abunəlik bildirişləri almaq istəyirəm.
                    </label>
                  </div>
                </div>

                <div className="pt-3">
                  {submitted ? (
                    <button
                      type="button"
                      disabled
                      className="w-full rounded-xl bg-emerald-600 py-3.5 font-sans text-xs font-bold text-white shadow-xs"
                    >
                      Mesajınız Uğurla Göndərildi!
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!agreedToTerms}
                      className="w-full flex items-center justify-center space-x-2 rounded-xl bg-blue-600 py-3.5 font-sans text-xs font-bold text-white shadow-md shadow-blue-100 hover:bg-blue-700 active:scale-98 transition disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Mesajı Göndər</span>
                    </button>
                  )}
                </div>

                {submitted && (
                  <p className="text-center font-sans text-xs text-emerald-600 mt-2">
                    Təşəkkür edirik! Mesajınız daxili admin konsoluna yönləndirildi. Operatorumuz sizinlə tezliklə əlaqə saxlayacaq.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
