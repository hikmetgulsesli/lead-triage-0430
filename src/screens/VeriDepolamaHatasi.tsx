// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Veri Depolama Hatası
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface VeriDepolamaHatasiProps {}

export function VeriDepolamaHatasi(props: VeriDepolamaHatasiProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 docked full-width top-0 border-b border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
      <div className="flex items-center gap-6">
      <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-['Inter'] text-sm antialiased">Lead Triage 0430</h1>
      <nav className="hidden md:flex gap-4 h-full">
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out px-3 py-2 flex items-center h-full" href="#">Adaylar</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out px-3 py-2 flex items-center h-full" href="#">Pipeline</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out px-3 py-2 flex items-center h-full" href="#">Analizler</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out px-3 py-2 flex items-center h-full" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-64 bg-slate-50" placeholder="Ara..." type="text" />
      </div>
      <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Error Banner */}
      <div className="fixed top-16 left-0 w-full z-40 bg-error text-on-error p-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-error-container">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-2xl" data-weight="fill">error</span>
      <div>
      <p className="font-label-bold text-label-bold mb-1">Veriler kaydedilemedi.</p>
      <p className="font-caption text-caption opacity-90">Depolama alanı dolu olabilir.</p>
      </div>
      </div>
      <div className="flex gap-3">
      <button className="px-4 py-2 bg-on-error text-error rounded-DEFAULT font-label-bold text-label-bold hover:bg-opacity-90 transition-colors shadow-sm">
                      Tekrar Dene
                  </button>
      <button className="px-4 py-2 bg-transparent border border-on-error text-on-error rounded-DEFAULT font-label-bold text-label-bold hover:bg-on-error hover:text-error transition-colors">
                      Yerel Veriyi Temizle
                  </button>
      </div>
      </div>
      {/* Main Content Area (Blurred/Dimmed to simulate underlying page) */}
      <main className="flex-1 p-margin opacity-50 blur-[2px] transition-all duration-300 pointer-events-none select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-xl">
      <div className="flex justify-between items-end border-b border-outline-variant pb-sm">
      <div>
      <h2 className="font-h2 text-h2 text-on-surface mb-xs">Aday Havuzu</h2>
      <p className="font-body-main text-body-main text-on-surface-variant">Son güncellenen veriler görüntüleniyor.</p>
      </div>
      </div>
      {/* Bento Grid Layout for Dashboard Elements */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Stats Card 1 */}
      <div className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <div className="flex items-center gap-sm mb-md">
      <div className="p-2 bg-primary-container text-on-primary-container rounded-lg">
      <span className="material-symbols-outlined">group</span>
      </div>
      <h3 className="font-label-bold text-label-bold text-on-surface-variant">Toplam Aday</h3>
      </div>
      <p className="font-h1 text-h1 text-on-surface">1,248</p>
      </div>
      {/* Stats Card 2 */}
      <div className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <div className="flex items-center gap-sm mb-md">
      <div className="p-2 bg-tertiary-container text-on-tertiary-container rounded-lg">
      <span className="material-symbols-outlined">trending_up</span>
      </div>
      <h3 className="font-label-bold text-label-bold text-on-surface-variant">Dönüşüm Oranı</h3>
      </div>
      <p className="font-h1 text-h1 text-on-surface">%12.4</p>
      </div>
      {/* Stats Card 3 */}
      <div className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <div className="flex items-center gap-sm mb-md">
      <div className="p-2 bg-secondary-container text-on-secondary-container rounded-lg">
      <span className="material-symbols-outlined">schedule</span>
      </div>
      <h3 className="font-label-bold text-label-bold text-on-surface-variant">Bekleyen Aksiyon</h3>
      </div>
      <p className="font-h1 text-h1 text-on-surface">34</p>
      </div>
      {/* Main List Area */}
      <div className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
      <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-h3 text-h3 text-on-surface">Son Eklenen Adaylar</h3>
      <button className="text-primary font-label-bold text-label-bold hover:underline">Tümünü Gör</button>
      </div>
      <div className="divide-y divide-outline-variant">
      {/* List Item 1 */}
      <div className="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-bold text-label-bold">
                                          AY
                                      </div>
      <div>
      <p className="font-body-large text-body-large text-on-surface font-semibold">Ahmet Yılmaz</p>
      <p className="font-caption text-caption text-on-surface-variant">Kurumsal Satış - TechCorp</p>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed rounded-DEFAULT font-caption text-caption">Sıcak Lead</span>
      <span className="material-symbols-outlined text-outline">more_vert</span>
      </div>
      </div>
      {/* List Item 2 */}
      <div className="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-bold text-label-bold">
                                          ZK
                                      </div>
      <div>
      <p className="font-body-large text-body-large text-on-surface font-semibold">Zeynep Kaya</p>
      <p className="font-caption text-caption text-on-surface-variant">Pazarlama Yöneticisi - Global A.Ş.</p>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-DEFAULT font-caption text-caption">Takipte</span>
      <span className="material-symbols-outlined text-outline">more_vert</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
