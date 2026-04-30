// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Uygulama Ayarları
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface UygulamaAyarlariProps {}

export function UygulamaAyarlari(props: UygulamaAyarlariProps) {
  return (
    <>
      {/* SideNavBar (Hidden on Mobile, Visible on Desktop) */}
      <aside className="hidden md:flex flex-col p-6 space-y-4 bg-white dark:bg-slate-900 fixed right-0 top-0 h-full w-80 border-l border-l border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-none z-40 transform transition-transform duration-300 ease-in-out font-['Inter'] text-sm leading-relaxed text-blue-600 dark:text-blue-400">
      <div className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">Kullanıcı Profili</h2>
      <p className="text-slate-600 dark:text-slate-400 mt-1">Yönetici Hesabı</p>
      </div>
      <nav className="flex-1 space-y-2">
      <a className="flex items-center space-x-3 px-4 py-3 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all" href="#">
      <span className="material-symbols-outlined text-lg" data-icon="person">person</span>
      <span>Profil Bilgileri</span>
      </a>
      <a className="flex items-center space-x-3 px-4 py-3 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all" href="#">
      <span className="material-symbols-outlined text-lg" data-icon="schedule">schedule</span>
      <span>Zaman Dilimi</span>
      </a>
      <a className="flex items-center space-x-3 px-4 py-3 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all" href="#">
      <span className="material-symbols-outlined text-lg" data-icon="notifications">notifications</span>
      <span>Bildirim Tercihleri</span>
      </a>
      <a className="flex items-center space-x-3 px-4 py-3 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all" href="#">
      <span className="material-symbols-outlined text-lg" data-icon="shield">shield</span>
      <span>Güvenlik</span>
      </a>
      </nav>
      <div className="mt-auto">
      <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-outline text-on-surface hover:bg-surface-variant transition-colors rounded-DEFAULT">
      <span className="material-symbols-outlined text-lg" data-icon="logout">logout</span>
      <span className="font-label-bold text-label-bold">Çıkış Yap</span>
      </button>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:mr-80">
      {/* TopNavBar */}
      <header className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-['Inter'] text-sm antialiased docked full-width top-0 border-b border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none duration-200 ease-in-out">
      <div className="flex items-center space-x-8">
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                          Lead Triage 0430
                      </div>
      <nav className="hidden md:flex space-x-6 h-full items-end pb-4 mt-4">
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2" href="#">Adaylar</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2" href="#">Pipeline</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2" href="#">Analizler</a>
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 px-3 py-2" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center space-x-4">
      <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50">
      <span className="material-symbols-outlined" data-icon="search">search</span>
      </button>
      <div className="h-6 w-px bg-slate-200 mx-2"></div>
      <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50 relative">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 p-margin overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-xl">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-xs">Sistem Ayarları</h1>
      <p className="font-body-main text-body-main text-on-surface-variant">Çalışma alanı tercihlerinizi ve operasyonel ayarlarınızı yapılandırın.</p>
      </div>
      <div className="grid grid-cols-1 gap-lg">
      {/* Görünüm Ayarları */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center space-x-3 mb-md border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-primary" data-icon="palette">palette</span>
      <h2 className="font-h3 text-h3 text-on-surface">Arayüz Yoğunluğu</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
      <label className="relative flex cursor-pointer rounded-lg border bg-surface p-4 shadow-sm focus:outline-none border-primary ring-1 ring-primary">
      <input checked={true} className="sr-only" name="density" type="radio" value="compact" />
      <span className="flex flex-1">
      <span className="flex flex-col">
      <span className="block font-label-bold text-label-bold text-on-surface">Kompakt (Sıkışık)</span>
      <span className="mt-1 flex items-center font-caption text-caption text-on-surface-variant">Veri yoğun tablolar ve hızlı tarama için optimize edilmiştir.</span>
      </span>
      </span>
      <span className="material-symbols-outlined text-primary ml-4" data-icon="check_circle" data-weight="fill">check_circle</span>
      </label>
      <label className="relative flex cursor-pointer rounded-lg border border-outline-variant bg-surface p-4 shadow-sm hover:bg-surface-container-low transition-colors focus:outline-none">
      <input className="sr-only" name="density" type="radio" value="comfortable" />
      <span className="flex flex-1">
      <span className="flex flex-col">
      <span className="block font-label-bold text-label-bold text-on-surface">Rahat (Comfortable)</span>
      <span className="mt-1 flex items-center font-caption text-caption text-on-surface-variant">Daha geniş boşluklar, okuma kolaylığı sağlar.</span>
      </span>
      </span>
      </label>
      </div>
      </section>
      {/* Finansal Ayarlar */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center space-x-3 mb-md border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-primary" data-icon="payments">payments</span>
      <h2 className="font-h3 text-h3 text-on-surface">Finansal Tercihler</h2>
      </div>
      <div className="mt-md">
      <label className="block font-label-bold text-label-bold text-on-surface mb-xs" htmlFor="currency">Varsayılan Para Birimi</label>
      <div className="relative w-full md:w-64">
      <select className="block w-full appearance-none rounded-DEFAULT border border-outline-variant bg-surface px-4 py-2 pr-8 text-body-main font-body-main text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" id="currency" name="currency">
      <option value="TRY">Türk Lirası (TRY)</option>
      <option value="USD">US Dollar (USD)</option>
      <option value="EUR">Euro (EUR)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
      </div>
      </div>
      <p className="mt-2 font-caption text-caption text-on-surface-variant">Raporlar ve dashboard'lar bu para birimi üzerinden gösterilecektir.</p>
      </div>
      </section>
      {/* Operasyonel Ayarlar */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center space-x-3 mb-md border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-primary" data-icon="alarm">alarm</span>
      <h2 className="font-h3 text-h3 text-on-surface">Hatırlatıcı Yapılandırması</h2>
      </div>
      <div className="mt-md">
      <div className="flex justify-between items-center mb-xs">
      <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="reminder-days">Takip Hatırlatıcı Süresi (Gün)</label>
      <span className="font-label-bold text-label-bold text-primary bg-primary-fixed px-2 py-1 rounded-DEFAULT">14 Gün</span>
      </div>
      <input className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary" id="reminder-days" max="30" min="1" name="reminder-days" type="range" value="14" />
      <div className="flex justify-between text-caption font-caption text-on-surface-variant mt-2">
      <span>1 Gün</span>
      <span>30 Gün</span>
      </div>
      <p className="mt-4 font-caption text-caption text-on-surface-variant">Bir lead'e işlem yapılmadığında uyarı verilecek süre (1-30 gün arası).</p>
      </div>
      </section>
      </div>
      {/* Action Bar */}
      <div className="flex justify-end pt-md border-t border-outline-variant">
      <button className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-2 rounded-DEFAULT font-label-bold text-label-bold transition-colors shadow-sm flex items-center space-x-2">
      <span className="material-symbols-outlined text-sm" data-icon="save">save</span>
      <span>Değişiklikleri Kaydet</span>
      </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
