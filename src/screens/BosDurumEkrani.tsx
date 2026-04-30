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
      {/* TopNavBar */}
      <nav className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 fixed full-width top-0 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
      <div className="flex items-center gap-6">
      <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-h3 text-h3">Lead Triage 0430</span>
      <div className="hidden md:flex gap-6 mt-4">
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 text-body-main font-body-main" href="#">Adaylar</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md pb-4 text-body-main font-body-main duration-200 ease-in-out" href="#">Pipeline</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md pb-4 text-body-main font-body-main duration-200 ease-in-out" href="#">Analizler</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md pb-4 text-body-main font-body-main duration-200 ease-in-out" href="#">Ayarlar</a>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-md">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-md">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center pt-16 bg-surface">
      {/* Empty State Container */}
      <div className="flex flex-col items-center justify-center max-w-md p-xl text-center">
      {/* Icon */}
      <div className="w-24 h-24 mb-lg rounded-full bg-surface-container-highest flex items-center justify-center text-outline">
      <span className="material-symbols-outlined text-[48px]" data-icon="inbox" style={{fontVariationSettings: "'FILL' 0, 'wght' 200"}}>inbox</span>
      </div>
      {/* Typography */}
      <h2 className="font-h2 text-h2 text-on-surface mb-xs">Henüz lead eklenmemiş</h2>
      <p className="font-body-large text-body-large text-on-surface-variant mb-xl">İlk potansiyel müşterinizi eklemek için 'Yeni Lead' butonuna tıklayın.</p>
      {/* CTA Button */}
      <button className="flex items-center gap-2 px-lg py-sm bg-primary text-on-primary rounded-DEFAULT hover:bg-on-primary-fixed-variant transition-colors shadow-sm font-label-bold text-label-bold">
      <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                      Yeni Lead Ekle
                  </button>
      </div>
      </main>
    </>
  );
}
