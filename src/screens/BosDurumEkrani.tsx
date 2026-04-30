// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumEkraniProps {}

export function BosDurumEkrani(props: BosDurumEkraniProps) {
  return (
    <>
      {/* TopNavBar (Shared Component) */}
      <nav className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 font-['Inter'] text-sm antialiased docked full-width top-0 border-b shadow-sm dark:shadow-none border-b border-slate-200 dark:border-slate-800">
      {/* Brand */}
      <div className="flex items-center gap-margin">
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                      Lead Triage 0430
                  </div>
      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center gap-lg mt-4 h-full">
      {/* Active Tab: Adaylar (Leads) */}
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 h-full flex items-center" href="#">
                          Adaylar
                      </a>
      {/* Inactive Tabs */}
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors h-full flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-sm py-xs duration-200 ease-in-out" href="#">
                          Pipeline
                      </a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors h-full flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-sm py-xs duration-200 ease-in-out" href="#">
                          Analizler
                      </a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors h-full flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-sm py-xs duration-200 ease-in-out" href="#">
                          Ayarlar
                      </a>
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-sm">
      <button className="p-xs text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-xs text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center p-margin">
      {/* Empty State Container */}
      <div className="max-w-md w-full bg-surface-container-lowest border border-surface-variant rounded-xl p-xl flex flex-col items-center text-center" style={{boxShadow: "0px 3px 5px rgba(0,0,0,0.02)"}}>
      {/* Icon Illustration Container */}
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-md border border-surface-variant">
      <span className="material-symbols-outlined text-outline text-[32px]" data-icon="inbox" style={{fontSize: "32px"}}>inbox</span>
      </div>
      {/* Title */}
      <h2 className="font-h2 text-h2 text-on-surface mb-xs">
                      Henüz lead eklenmemiş
                  </h2>
      {/* Description */}
      <p className="font-body-large text-body-large text-on-surface-variant mb-xl max-w-[300px]">
                      İlk potansiyel müşterinizi eklemek için 'Yeni Lead' butonuna tıklayın.
                  </p>
      {/* Primary Action Button */}
      <button className="bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold py-sm px-margin rounded-lg flex items-center justify-center gap-xs transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
      <span className="material-symbols-outlined text-[16px]" data-icon="add" style={{fontSize: "16px"}}>add</span>
                      Yeni Lead Ekle
                  </button>
      </div>
      </main>
    </>
  );
}
