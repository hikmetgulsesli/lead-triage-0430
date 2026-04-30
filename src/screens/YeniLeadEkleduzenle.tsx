// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Yeni Lead Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface YeniLeadEkleduzenleProps {}

export function YeniLeadEkleduzenle(props: YeniLeadEkleduzenleProps) {
  return (
    <>
      {/* Background Mock: Leads List (Blurred/Disabled for Modal Context) */}
      <div className="flex-1 w-full h-full flex flex-col opacity-30 pointer-events-none filter blur-[2px]">
      {/* TopNavBar (Rendered via JSON) */}
      <header className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 docked full-width top-0 border-b border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none duration-200 ease-in-out">
      {/* Brand */}
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-['Inter'] text-sm antialiased">
                      Lead Triage 0430
                  </div>
      {/* Navigation Links (Centered) */}
      <nav className="hidden md:flex space-x-8 items-center h-full">
      {/* Active Nav Item */}
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 font-['Inter'] text-sm antialiased flex flex-col h-full justify-center" href="#">Adaylar</a>
      {/* Inactive Nav Items */}
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-['Inter'] text-sm antialiased flex flex-col h-full justify-center hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-2" href="#">Pipeline</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-['Inter'] text-sm antialiased flex flex-col h-full justify-center hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-2" href="#">Analizler</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-['Inter'] text-sm antialiased flex flex-col h-full justify-center hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-2" href="#">Ayarlar</a>
      </nav>
      {/* Trailing Icons */}
      <div className="flex items-center space-x-4">
      <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Dummy Content Area */}
      <main className="flex-1 p-margin overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-md">
      <div className="flex justify-between items-center mb-xl">
      <h1 className="font-h1 text-h1">Aday Listesi</h1>
      <button className="bg-primary text-on-primary px-sm py-xs rounded flex items-center space-x-xs">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>Yeni Aday Ekle</span>
      </button>
      </div>
      {/* Mock Data Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-surface-variant shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-md border-b border-surface-variant flex font-label-bold text-label-bold text-on-surface-variant">
      <div className="w-1/4">AD SOYAD</div>
      <div className="w-1/4">ŞİRKET</div>
      <div className="w-1/4">DURUM</div>
      <div className="w-1/4">KAYIT TARİHİ</div>
      </div>
      <div className="p-md border-b border-surface-variant flex items-center bg-surface-container-low">
      <div className="w-1/4 font-body-main text-body-main text-on-surface">Ahmet Yılmaz</div>
      <div className="w-1/4 text-on-surface-variant">Tech Solutions A.Ş.</div>
      <div className="w-1/4"><span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded text-caption">Yeni</span></div>
      <div className="w-1/4 text-on-surface-variant">12 Eki 2023</div>
      </div>
      <div className="p-md border-b border-surface-variant flex items-center">
      <div className="w-1/4 font-body-main text-body-main text-on-surface">Ayşe Demir</div>
      <div className="w-1/4 text-on-surface-variant">Global Lojistik</div>
      <div className="w-1/4"><span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded text-caption">Görüşmede</span></div>
      <div className="w-1/4 text-on-surface-variant">10 Eki 2023</div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Modal Overlay */}
      <div className="absolute inset-0 z-[100] flex items-center justify-center bg-on-surface/20 backdrop-blur-sm p-4">
      {/* Modal Form Container */}
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.10)] border border-surface-variant flex flex-col max-h-[921px]">
      {/* Modal Header */}
      <div className="px-lg py-md border-b border-surface-variant flex justify-between items-center bg-surface-container-lowest rounded-t-xl sticky top-0 z-10">
      <h2 className="font-h2 text-h2 text-on-surface">Aday Ekle / Düzenle</h2>
      <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full p-2 transition-colors">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Modal Body (Scrollable) */}
      <div className="p-lg overflow-y-auto">
      <form className="space-y-lg">
      {/* Form Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-md">
      {/* Ad Soyad (Required - with Validation Error Mock) */}
      <div className="col-span-1 md:col-span-2 space-y-base">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="fullName">
                                      Ad Soyad <span className="text-error">*</span>
      </label>
      {/* Input with Error State */}
      <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-sm text-error">
      <span className="material-symbols-outlined text-[20px]">person</span>
      </span>
      <input className="w-full pl-10 pr-sm py-sm rounded border border-error bg-error-container/10 text-on-surface focus:outline-none focus:ring-2 focus:ring-error focus:border-error transition-all font-body-main text-body-main" id="fullName" name="fullName" placeholder="Örn: Ali Veli" type="text" value="" />
      <span className="absolute inset-y-0 right-0 flex items-center pr-sm text-error">
      <span className="material-symbols-outlined text-[20px]">error</span>
      </span>
      </div>
      <p className="font-caption text-caption text-error">Ad Soyad alanı zorunludur.</p>
      </div>
      {/* Şirket */}
      <div className="col-span-1 space-y-base">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="company">Şirket</label>
      <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]">business</span>
      </span>
      <input className="w-full pl-10 pr-sm py-sm rounded border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-main text-body-main hover:border-outline" id="company" name="company" placeholder="Firma Adı" type="text" />
      </div>
      </div>
      {/* Tahmini Değer */}
      <div className="col-span-1 space-y-base">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="estimatedValue">Tahmini Değer (₺)</label>
      <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]">payments</span>
      </span>
      <input className="w-full pl-10 pr-sm py-sm rounded border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-main text-body-main hover:border-outline" id="estimatedValue" name="estimatedValue" placeholder="0.00" type="number" />
      </div>
      </div>
      {/* Kaynak (Dropdown) */}
      <div className="col-span-1 space-y-base">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="source">Kaynak</label>
      <div className="relative">
      <select className="w-full pl-sm pr-10 py-sm rounded border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-main text-body-main hover:border-outline appearance-none cursor-pointer" id="source" name="source">
      <option disabled={true} selected={true} value="">Seçiniz...</option>
      <option value="web">Web Sitesi</option>
      <option value="referral">Referans</option>
      <option value="cold_call">Soğuk Arama</option>
      <option value="event">Etkinlik/Fuar</option>
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-sm text-on-surface-variant pointer-events-none">
      <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
      </span>
      </div>
      </div>
      {/* Durum (Dropdown) */}
      <div className="col-span-1 space-y-base">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="status">Durum</label>
      <div className="relative">
      <select className="w-full pl-sm pr-10 py-sm rounded border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-main text-body-main hover:border-outline appearance-none cursor-pointer" id="status" name="status">
      <option selected={true} value="new">Yeni</option>
      <option value="contacted">İletişime Geçildi</option>
      <option value="meeting">Görüşme Ayarlandı</option>
      <option value="proposal">Teklif Verildi</option>
      <option value="won">Kazanıldı</option>
      <option value="lost">Kaybedildi</option>
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-sm text-on-surface-variant pointer-events-none">
      <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
      </span>
      </div>
      </div>
      {/* Kayıt Tarihi (Read-only / Auto-filled mock) */}
      <div className="col-span-1 space-y-base">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="regDate">Kayıt Tarihi</label>
      <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-sm text-on-surface-variant/50">
      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
      </span>
      <input className="w-full pl-10 pr-sm py-sm rounded border border-surface-variant bg-surface-container-high text-on-surface-variant cursor-not-allowed font-body-main text-body-main" disabled={true} id="regDate" name="regDate" type="text" value="24 Eki 2023" />
      </div>
      </div>
      {/* Sonraki Aksiyon */}
      <div className="col-span-1 md:col-span-2 space-y-base">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="nextAction">Sonraki Aksiyon</label>
      <div className="relative">
      <span className="absolute top-sm left-0 flex items-start pl-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]">flag</span>
      </span>
      <textarea className="w-full pl-10 pr-sm py-sm rounded border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-main text-body-main hover:border-outline resize-y" id="nextAction" name="nextAction" placeholder="Örn: Yarın sabah teklif detayları için aranacak." rows={3}></textarea>
      </div>
      </div>
      </div>
      </form>
      </div>
      {/* Modal Footer (Actions) */}
      <div className="px-lg py-md border-t border-surface-variant flex justify-end space-x-sm bg-surface-container-lowest rounded-b-xl sticky bottom-0 z-10">
      <button className="px-md py-sm rounded border border-surface-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container-low hover:text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-colors font-label-bold text-label-bold shadow-[0_1px_2px_rgba(0,0,0,0.05)]" type="button">
                          İptal
                      </button>
      <button className="px-md py-sm rounded bg-primary text-on-primary hover:bg-on-primary-fixed-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors font-label-bold text-label-bold flex items-center space-x-xs shadow-[0_1px_2px_rgba(0,0,0,0.10)]" type="submit">
      <span className="material-symbols-outlined text-[18px]">save</span>
      <span>Kaydet</span>
      </button>
      </div>
      </div>
      </div>
    </>
  );
}
