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
      {/* TopNavBar (Shared Component) */}
      <nav className="docked full-width top-0 border-b flex items-center justify-between px-6 h-16 w-full z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none font-['Inter'] text-sm antialiased text-blue-600 dark:text-blue-400">
      <div className="flex items-center gap-8">
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                      Lead Triage 0430
                  </div>
      <div className="hidden md:flex items-center gap-6 h-full pt-4">
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2 -mt-2" href="#">Adaylar</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2 -mt-2" href="#">Pipeline</a>
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-2 font-medium px-3" href="#">Analizler</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2 -mt-2" href="#">Ayarlar</a>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-slate-500 hover:text-slate-900 duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md p-2">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>notifications</span>
      </button>
      <button className="text-slate-500 hover:text-slate-900 duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md p-2">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="max-w-7xl mx-auto px-6 py-xl">
      {/* Header */}
      <header className="mb-lg">
      <h1 className="font-h1 text-h1 text-on-surface">İş Geliştirme Analizleri</h1>
      </header>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {/* Metric Card: TOPLAM ADAY */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
      <span className="font-label-bold text-label-bold text-on-surface-variant">TOPLAM ADAY</span>
      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 0", fontSize: "20px"}}>group</span>
      </div>
      <div className="font-h2 text-h2 text-on-surface mt-xs">
                          42
                      </div>
      </div>
      {/* Metric Card: KAZANILAN DEĞER */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
      <span className="font-label-bold text-label-bold text-on-surface-variant">KAZANILAN DEĞER</span>
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 0", fontSize: "20px"}}>payments</span>
      </div>
      <div className="font-h2 text-h2 text-on-surface mt-xs">
                          ₺125.000
                      </div>
      </div>
      {/* Metric Card: KAYBEDİLEN DEĞER */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
      <span className="font-label-bold text-label-bold text-on-surface-variant">KAYBEDİLEN DEĞER</span>
      <span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 0", fontSize: "20px"}}>trending_down</span>
      </div>
      <div className="font-h2 text-h2 text-on-surface mt-xs">
                          ₺15.000
                      </div>
      </div>
      {/* Metric Card: HAFTALIK TAKİP */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
      <span className="font-label-bold text-label-bold text-on-surface-variant">HAFTALIK TAKİP</span>
      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 0", fontSize: "20px"}}>calendar_today</span>
      </div>
      <div className="font-h2 text-h2 text-on-surface mt-xs">
                          8 Aday
                      </div>
      </div>
      {/* Metric Card: DÖNÜŞÜM ORANI */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
      <span className="font-label-bold text-label-bold text-on-surface-variant">DÖNÜŞÜM ORANI</span>
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 0", fontSize: "20px"}}>percent</span>
      </div>
      <div className="font-h2 text-h2 text-on-surface mt-xs">
                          %24
                      </div>
      </div>
      {/* Metric Card: ORTALAMA ADAY DEĞERİ */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
      <span className="font-label-bold text-label-bold text-on-surface-variant">ORTALAMA ADAY DEĞERİ</span>
      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 0", fontSize: "20px"}}>monitoring</span>
      </div>
      <div className="font-h2 text-h2 text-on-surface mt-xs">
                          ₺8.500
                      </div>
      </div>
      </div>
      </main>
    </>
  );
}
