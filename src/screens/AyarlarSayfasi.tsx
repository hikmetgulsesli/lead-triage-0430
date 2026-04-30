// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar Sayfası
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AyarlarSayfasiProps {}

export function AyarlarSayfasi(props: AyarlarSayfasiProps) {
  return (
    <>
      {/* TopNavBar from JSON */}
      <nav className="sticky top-0 w-full border-b border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex items-center justify-between px-6 h-16 bg-white dark:bg-slate-900 z-50 font-['Inter'] text-sm antialiased">
      <div className="flex items-center gap-xl">
      <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">Lead Triage 0430</span>
      <div className="hidden md:flex items-center gap-md">
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2" href="#">Adaylar</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2" href="#">Pipeline</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2" href="#">Analizler</a>
      {/* Active Tab */}
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 px-3" href="#">Ayarlar</a>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-2 text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-2 text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Layout */}
      <div className="max-w-[1200px] mx-auto px-margin py-xl flex flex-col md:flex-row gap-xl items-start">
      {/* Local Left Settings Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-xs">
      <a className="flex items-center gap-sm px-md py-sm bg-surface-container-high text-on-surface font-label-bold rounded-lg transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                      Genel
                  </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">palette</span>
                      Tema
                  </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">alarm</span>
                      Hatırlatıcılar
                  </a>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col gap-lg">
      <header>
      <h1 className="font-h1 text-h1 text-on-surface">Genel Ayarlar</h1>
      <p className="font-body-main text-body-main text-on-surface-variant mt-base">Uygulamanın temel operasyonel tercihlerini yapılandırın.</p>
      </header>
      {/* Settings Card Container */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
      {/* Setting Item: Görünüm Yoğunluğu */}
      <div className="p-lg flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-outline-variant">
      <div className="flex flex-col">
      <span className="font-label-bold text-label-bold text-on-surface">Görünüm Yoğunluğu</span>
      <span className="font-caption text-caption text-on-surface-variant mt-base">Listelerin ve veri tablolarının ekrandaki yerleşim sıklığı.</span>
      </div>
      {/* Segmented Control */}
      <div className="flex bg-surface-container p-base rounded-lg border border-outline-variant/50 self-start sm:self-auto">
      <button className="px-sm py-xs bg-surface-container-lowest shadow-sm rounded text-on-surface font-label-bold text-label-bold transition-all">
                                  Kompakt
                              </button>
      <button className="px-sm py-xs text-on-surface-variant hover:text-on-surface rounded font-body-main text-body-main transition-all">
                                  Rahat
                              </button>
      </div>
      </div>
      {/* Setting Item: Para Birimi */}
      <div className="p-lg flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-outline-variant">
      <div className="flex flex-col">
      <span className="font-label-bold text-label-bold text-on-surface">Para Birimi</span>
      <span className="font-caption text-caption text-on-surface-variant mt-base">Finansal analizler ve pipeline değerleri için varsayılan birim.</span>
      </div>
      {/* Dropdown visual */}
      <div className="relative min-w-[120px] self-start sm:self-auto">
      <button className="w-full flex items-center justify-between gap-sm px-sm py-xs bg-surface-container-lowest border border-outline-variant rounded hover:border-primary transition-colors text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
      <span className="font-body-main text-body-main">TRY</span>
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">arrow_drop_down</span>
      </button>
      </div>
      </div>
      {/* Setting Item: Hatırlatıcı Gecikmesi */}
      <div className="p-lg flex flex-col gap-md">
      <div className="flex flex-col">
      <span className="font-label-bold text-label-bold text-on-surface">Hatırlatıcı Gecikmesi</span>
      <span className="font-caption text-caption text-on-surface-variant mt-base">İşlemsiz kalan adaylar için sistemin uyarı vereceği gün sayısı.</span>
      </div>
      {/* Slider Visual */}
      <div className="flex items-center gap-md mt-sm">
      <span className="font-caption text-caption text-on-surface-variant w-4 text-right">1</span>
      <div className="flex-1 relative h-6 flex items-center">
      {/* Track */}
      <div className="absolute w-full h-1.5 bg-surface-container-highest rounded-full"></div>
      {/* Filled Track */}
      <div className="absolute h-1.5 bg-primary rounded-full w-[45%]"></div>
      {/* Thumb */}
      <div className="absolute h-5 w-5 bg-surface-container-lowest border-2 border-primary rounded-full shadow-sm left-[45%] -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"></div>
      </div>
      <span className="font-caption text-caption text-on-surface-variant w-4">30</span>
      {/* Value Display */}
      <div className="ml-sm px-sm py-xs bg-surface-container border border-outline-variant rounded font-label-bold text-label-bold text-on-surface w-12 text-center">
                                  14
                              </div>
      </div>
      </div>
      </div>
      {/* Action Area */}
      <div className="flex justify-end mt-md">
      <button className="px-lg py-sm bg-primary text-on-primary font-label-bold text-label-bold rounded shadow-sm hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">check</span>
                          Değişiklikleri Kaydet
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
