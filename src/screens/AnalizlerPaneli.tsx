// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Analizler Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnalizlerPaneliProps {}

export function AnalizlerPaneli(props: AnalizlerPaneliProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="docked full-width top-0 border-b border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none bg-white dark:bg-slate-900 z-50">
      <div className="flex items-center justify-between px-6 h-16 w-full">
      <div className="flex items-center gap-xl">
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-h2 text-h2">
                          Lead Triage 0430
                      </div>
      <div className="hidden md:flex items-center gap-margin h-full">
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-sm py-xs font-body-main text-body-main duration-200 ease-in-out h-full flex items-center" href="#">
                              Adaylar
                          </a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-sm py-xs font-body-main text-body-main duration-200 ease-in-out h-full flex items-center" href="#">
                              Pipeline
                          </a>
      {/* Active State for Analizler */}
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 font-body-main text-body-main h-full flex items-center px-sm" href="#">
                              Analizler
                          </a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-sm py-xs font-body-main text-body-main duration-200 ease-in-out h-full flex items-center" href="#">
                              Ayarlar
                          </a>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-slate-500 hover:text-slate-900 p-xs rounded-md hover:bg-slate-50 transition-colors duration-200 ease-in-out">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-slate-500 hover:text-slate-900 p-xs rounded-md hover:bg-slate-50 transition-colors duration-200 ease-in-out">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-grow p-margin md:p-xl max-w-7xl mx-auto w-full flex flex-col gap-xl">
      {/* Header Section */}
      <header className="flex flex-col gap-xs mb-md">
      <h1 className="font-h1 text-h1 text-on-surface">Performans Analizi</h1>
      <p className="font-body-large text-body-large text-on-surface-variant">Haftalık satış ve lead durum özeti.</p>
      </header>
      {/* Bento Grid for Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md auto-rows-min">
      {/* Card: Total Leads */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-200 col-span-1 md:col-span-1 lg:col-span-1">
      <div className="flex justify-between items-start mb-sm">
      <div className="p-xs bg-primary-container/10 rounded-md">
      <span className="material-symbols-outlined text-primary" data-icon="group">group</span>
      </div>
      <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Toplam Aday</span>
      </div>
      <div>
      <div className="font-h2 text-h2 text-on-surface mb-base">1,248</div>
      <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px] text-green-600">trending_up</span>
      <span className="text-green-600 font-medium">+12%</span> geçen haftaya göre
                          </div>
      </div>
      </div>
      {/* Card: Conversion Rate */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-200 col-span-1 md:col-span-1 lg:col-span-1">
      <div className="flex justify-between items-start mb-sm">
      <div className="p-xs bg-secondary-container/30 rounded-md">
      <span className="material-symbols-outlined text-on-secondary-container" data-icon="percent">percent</span>
      </div>
      <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Dönüşüm Oranı</span>
      </div>
      <div>
      <div className="font-h2 text-h2 text-on-surface mb-base">%24.5</div>
      <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px] text-green-600">trending_up</span>
      <span className="text-green-600 font-medium">+2.1%</span> geçen haftaya göre
                          </div>
      </div>
      </div>
      {/* Card: Won Value (Spans 2 columns on large) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-200 col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden">
      {/* Decorative subtle gradient */}
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary-container/5 rounded-tl-full -z-10 pointer-events-none"></div>
      <div className="flex justify-between items-start mb-sm">
      <div className="p-xs bg-green-100 rounded-md">
      <span className="material-symbols-outlined text-green-700" data-icon="check_circle">check_circle</span>
      </div>
      <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Kazanılan Değer</span>
      </div>
      <div>
      <div className="font-h1 text-h1 text-on-surface mb-base">₺450,000</div>
      <div className="font-body-main text-body-main text-on-surface-variant flex items-center gap-1">
                              Bu ay kazanılan toplam değer. Hedefin %85'ine ulaşıldı.
                          </div>
      </div>
      </div>
      {/* Card: Lost Value */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-200 col-span-1 md:col-span-1 lg:col-span-1">
      <div className="flex justify-between items-start mb-sm">
      <div className="p-xs bg-error-container/30 rounded-md">
      <span className="material-symbols-outlined text-error" data-icon="cancel">cancel</span>
      </div>
      <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Kaybedilen Değer</span>
      </div>
      <div>
      <div className="font-h2 text-h2 text-on-surface mb-base">₺85,200</div>
      <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px] text-error">trending_down</span>
      <span className="text-error font-medium">-5%</span> geçen haftaya göre
                          </div>
      </div>
      </div>
      {/* Card: Average Lead Value */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-200 col-span-1 md:col-span-1 lg:col-span-1">
      <div className="flex justify-between items-start mb-sm">
      <div className="p-xs bg-tertiary-container/10 rounded-md">
      <span className="material-symbols-outlined text-tertiary" data-icon="monetization_on">monetization_on</span>
      </div>
      <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Ort. Aday Değeri</span>
      </div>
      <div>
      <div className="font-h2 text-h2 text-on-surface mb-base">₺3,500</div>
      <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px] text-outline">horizontal_rule</span>
      <span className="text-on-surface-variant font-medium">Değişim yok</span>
      </div>
      </div>
      </div>
      {/* Card: Follow-ups this week (Spans 2 columns on large) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-200 col-span-1 md:col-span-2 lg:col-span-2">
      <div className="flex justify-between items-start mb-sm">
      <div className="p-xs bg-primary-fixed rounded-md">
      <span className="material-symbols-outlined text-on-primary-fixed" data-icon="event_upcoming">event_upcoming</span>
      </div>
      <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Bu Hafta Takipler</span>
      </div>
      <div className="flex items-end justify-between mt-auto">
      <div>
      <div className="font-h1 text-h1 text-on-surface mb-base">84</div>
      <div className="font-body-main text-body-main text-on-surface-variant">
                                  Planlanan takip araması ve toplantı.
                              </div>
      </div>
      {/* Minimalist representation of a bar chart */}
      <div className="flex items-end gap-1 h-12">
      <div className="w-3 bg-primary/20 rounded-t-sm h-[40%]"></div>
      <div className="w-3 bg-primary/40 rounded-t-sm h-[60%]"></div>
      <div className="w-3 bg-primary/60 rounded-t-sm h-[80%]"></div>
      <div className="w-3 bg-primary/80 rounded-t-sm h-[50%]"></div>
      <div className="w-3 bg-primary rounded-t-sm h-[100%]"></div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
