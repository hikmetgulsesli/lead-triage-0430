// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Yeni Lead Ekleme Modalı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface YeniLeadEklemeModaliProps {}

export function YeniLeadEklemeModali(props: YeniLeadEklemeModaliProps) {
  return (
    <>
      {/* TopNavBar (Rendered via JSON execution) */}
      <nav className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 font-['Inter'] text-sm antialiased border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none absolute top-0 left-0 right-0">
      <div className="flex items-center gap-8 h-full">
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                      Lead Triage 0430
                  </div>
      <ul className="flex items-center gap-6 h-full">
      {/* Active Item */}
      <li className="h-full flex flex-col justify-center text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 mt-4 cursor-pointer">
      <span className="pb-4">Adaylar</span>
      </li>
      {/* Inactive Items */}
      <li className="h-full flex items-center text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out cursor-pointer">
      <span>Pipeline</span>
      </li>
      <li className="h-full flex items-center text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out cursor-pointer">
      <span>Analizler</span>
      </li>
      <li className="h-full flex items-center text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out cursor-pointer">
      <span>Ayarlar</span>
      </li>
      </ul>
      </div>
      <div className="flex items-center gap-4">
      <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md transition-colors duration-200 ease-in-out">
      <span className="material-symbols-outlined block">notifications</span>
      </button>
      <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md transition-colors duration-200 ease-in-out">
      <span className="material-symbols-outlined block">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Background Canvas (Blurred Leads List) */}
      <div className="pt-[80px] px-margin h-full w-full filter blur-[3px] brightness-[0.97] pointer-events-none select-none flex flex-col gap-margin">
      <div className="flex justify-between items-end">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Adaylar</h1>
      <p className="font-body-main text-body-main text-on-surface-variant mt-base">Aktif potansiyel müşterileri yönetin ve takip edin.</p>
      </div>
      <button className="bg-primary text-on-primary px-lg py-xs rounded font-body-main font-medium flex items-center gap-xs">
      <span className="material-symbols-outlined text-[20px]">add</span>
                      Yeni Lead Ekle
                  </button>
      </div>
      <div className="grid grid-cols-12 gap-gutter w-full">
      {/* Fake Data Cards representing a modern bento list approach */}
      <div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant p-md flex items-center justify-between opacity-60">
      <div className="flex items-center gap-md">
      <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container font-h3 text-h3">AE</div>
      <div>
      <div className="font-h3 text-h3 text-on-surface">Ali Erdem</div>
      <div className="font-caption text-caption text-on-surface-variant">TechFlow Çözümleri</div>
      </div>
      </div>
      <div className="flex gap-xl text-right">
      <div>
      <div className="font-caption text-caption text-on-surface-variant">Değer</div>
      <div className="font-body-main text-body-main text-on-surface font-medium">₺ 45,000</div>
      </div>
      <div>
      <div className="font-caption text-caption text-on-surface-variant">Durum</div>
      <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-bold text-label-bold mt-base">İletişimde</span>
      </div>
      </div>
      </div>
      <div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant p-md flex items-center justify-between opacity-40">
      <div className="flex items-center gap-md">
      <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-on-surface-variant font-h3 text-h3">BY</div>
      <div>
      <div className="font-h3 text-h3 text-on-surface">Burcu Yılmaz</div>
      <div className="font-caption text-caption text-on-surface-variant">DataSync A.Ş.</div>
      </div>
      </div>
      <div className="flex gap-xl text-right">
      <div>
      <div className="font-caption text-caption text-on-surface-variant">Değer</div>
      <div className="font-body-main text-body-main text-on-surface font-medium">₺ 120,000</div>
      </div>
      <div>
      <div className="font-caption text-caption text-on-surface-variant">Durum</div>
      <span className="inline-flex items-center px-2 py-1 rounded bg-error-container text-on-error-container font-label-bold text-label-bold mt-base">Beklemede</span>
      </div>
      </div>
      </div>
      <div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant p-md flex items-center justify-between opacity-20">
      <div className="flex items-center gap-md">
      <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container font-h3 text-h3">CD</div>
      <div>
      <div className="font-h3 text-h3 text-on-surface">Can Demir</div>
      <div className="font-caption text-caption text-on-surface-variant">Lojistik Pro</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-[2px] z-[100] flex items-center justify-center p-margin">
      {/* Modal Content */}
      <div className="bg-surface-container-lowest rounded-xl shadow-2xl border border-outline-variant w-full max-w-2xl overflow-hidden flex flex-col">
      {/* Modal Header */}
      <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-bright">
      <h2 className="font-h2 text-h2 text-on-surface">Yeni Lead Ekle</h2>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors p-xs rounded hover:bg-surface-container-low">
      <span className="material-symbols-outlined text-[24px] block">close</span>
      </button>
      </div>
      {/* Modal Body (Form) */}
      <div className="p-lg grid grid-cols-2 gap-x-margin gap-y-md">
      {/* Ad Soyad */}
      <div className="col-span-1">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">Ad Soyad</label>
      <input className="w-full h-[40px] px-sm bg-surface-container-lowest border border-outline-variant rounded font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant" placeholder="Örn: Ayşe Yılmaz" type="text" />
      </div>
      {/* Şirket */}
      <div className="col-span-1">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">Şirket</label>
      <input className="w-full h-[40px] px-sm bg-surface-container-lowest border border-outline-variant rounded font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant" placeholder="Örn: TechFlow A.Ş." type="text" />
      </div>
      {/* Kaynak */}
      <div className="col-span-1 relative">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">Kaynak</label>
      <select className="w-full h-[40px] px-sm pr-xl bg-surface-container-lowest border border-outline-variant rounded font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
      <option disabled={true} selected={true} value="">Seçiniz</option>
      <option value="web">Web Sitesi</option>
      <option value="referans">Referans</option>
      <option value="fuar">Fuar / Etkinlik</option>
      <option value="soguk_arama">Soğuk Arama</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-[32px] text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
      </div>
      {/* Tahmini Değer */}
      <div className="col-span-1">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">Tahmini Değer</label>
      <div className="relative">
      <span className="absolute left-sm top-1/2 -translate-y-1/2 font-body-main text-body-main text-on-surface-variant">₺</span>
      <input className="w-full h-[40px] pl-[28px] pr-sm bg-surface-container-lowest border border-outline-variant rounded font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant" placeholder="0.00" type="number" />
      </div>
      </div>
      {/* Durum */}
      <div className="col-span-1 relative">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">Durum</label>
      <select className="w-full h-[40px] px-sm pr-xl bg-surface-container-lowest border border-outline-variant rounded font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
      <option selected={true} value="yeni">Yeni</option>
      <option value="iletisimde">İletişimde</option>
      <option value="teklif">Teklif Aşamasında</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-[32px] text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
      </div>
      {/* Kayıt Tarihi */}
      <div className="col-span-1">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">Kayıt Tarihi</label>
      <div className="relative">
      <input className="w-full h-[40px] px-sm pr-xl bg-surface-container-lowest border border-outline-variant rounded font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none [&amp;::-webkit-calendar-picker-indicator]:opacity-0 [&amp;::-webkit-calendar-picker-indicator]:absolute [&amp;::-webkit-calendar-picker-indicator]:right-0 [&amp;::-webkit-calendar-picker-indicator]:w-full [&amp;::-webkit-calendar-picker-indicator]:cursor-pointer" type="date" />
      <span className="material-symbols-outlined absolute right-sm top-[10px] text-on-surface-variant pointer-events-none text-[20px]">calendar_today</span>
      </div>
      </div>
      {/* Sonraki Aksiyon */}
      <div className="col-span-2">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs">Sonraki Aksiyon</label>
      <textarea className="w-full min-h-[100px] p-sm bg-surface-container-lowest border border-outline-variant rounded font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant resize-y" placeholder="Bu lead için planlanan sonraki adım nedir? Notlarınızı buraya ekleyin."></textarea>
      </div>
      </div>
      {/* Modal Footer */}
      <div className="px-lg py-md border-t border-outline-variant bg-surface-bright flex justify-end gap-md">
      <button className="h-[40px] px-lg rounded border border-outline-variant bg-surface-container-lowest text-on-surface font-body-main font-medium hover:bg-surface-container-low transition-colors">
                          Vazgeç
                      </button>
      <button className="h-[40px] px-lg rounded bg-primary text-on-primary font-body-main font-medium hover:bg-primary/90 transition-colors shadow-sm">
                          + Lead Ekle
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
