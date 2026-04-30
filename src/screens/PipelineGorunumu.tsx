// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Görünümü
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface PipelineGorunumuProps {}

export function PipelineGorunumu(props: PipelineGorunumuProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 docked full-width top-0 border-b shadow-sm dark:shadow-none border-slate-200 dark:border-slate-800">
      <div className="flex items-center space-x-xl">
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-h2 text-h2 text-on-surface">Lead Triage 0430</div>
      <div className="hidden md:flex space-x-md">
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-body-large text-body-large hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-xs py-base duration-200 ease-in-out" href="#">Adaylar</a>
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 font-body-large text-body-large" href="#">Pipeline</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-body-large text-body-large hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-xs py-base duration-200 ease-in-out" href="#">Analizler</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-body-large text-body-large hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-xs py-base duration-200 ease-in-out" href="#">Ayarlar</a>
      </div>
      </div>
      <div className="flex items-center space-x-sm">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-xs top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
      <input className="w-full pl-xl pr-xs py-xs bg-surface-container-low border border-outline-variant rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim text-on-surface font-body-main text-body-main placeholder:text-on-surface-variant" placeholder="Ara..." type="text" />
      </div>
      <button className="p-xs rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-xs rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col p-margin overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-lg shrink-0">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Pipeline</h1>
      <p className="font-body-large text-body-large text-on-surface-variant mt-base">Aktif satış fırsatlarınızı yönetin.</p>
      </div>
      <button className="bg-primary text-on-primary font-label-bold text-label-bold px-md py-xs rounded-DEFAULT hover:bg-primary-container transition-colors flex items-center space-x-xs">
      <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
      <span>Yeni Fırsat</span>
      </button>
      </div>
      {/* Kanban Board Area */}
      <div className="flex-1 flex space-x-gutter overflow-x-auto pb-md items-start">
      {/* Column: Yeni */}
      <div className="flex-shrink-0 w-80 flex flex-col h-full">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm mb-sm shrink-0 flex justify-between items-center shadow-sm">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Yeni</h3>
      <p className="font-caption text-caption text-on-surface-variant mt-base">4 Aday • 120.000 ₺</p>
      </div>
      <span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-xs py-base rounded-full">4</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm min-h-[100px] rounded-lg p-base bg-surface-container-low/50">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-sm shadow-sm hover:shadow-md transition-shadow cursor-grab relative group">
      <div className="flex justify-between items-start mb-xs">
      <span className="bg-tertiary-container text-on-tertiary-container font-caption text-caption px-xs py-base rounded-DEFAULT">Yüksek Öncelik</span>
      <button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-body-large text-body-large font-semibold text-on-surface mb-base">Acme Corp Yazılım Yenileme</h4>
      <p className="font-caption text-caption text-on-surface-variant mb-sm">Ahmet Yılmaz</p>
      <div className="flex justify-between items-center border-t border-outline-variant pt-sm mt-sm">
      <span className="font-body-main text-body-main font-semibold text-primary">45.000 ₺</span>
      <span className="font-caption text-caption text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px] mr-1" data-icon="event">event</span> 12 Eki</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-sm shadow-sm hover:shadow-md transition-shadow cursor-grab relative group">
      <div className="flex justify-between items-start mb-xs">
      <span className="bg-surface-variant text-on-surface-variant font-caption text-caption px-xs py-base rounded-DEFAULT">Standart</span>
      <button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-body-large text-body-large font-semibold text-on-surface mb-base">Global Lojistik CRM</h4>
      <p className="font-caption text-caption text-on-surface-variant mb-sm">Ayşe Kaya</p>
      <div className="flex justify-between items-center border-t border-outline-variant pt-sm mt-sm">
      <span className="font-body-main text-body-main font-semibold text-primary">35.000 ₺</span>
      <span className="font-caption text-caption text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px] mr-1" data-icon="event">event</span> 15 Eki</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column: İletişimde */}
      <div className="flex-shrink-0 w-80 flex flex-col h-full">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm mb-sm shrink-0 flex justify-between items-center shadow-sm border-l-4 border-l-primary-fixed-dim">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">İletişimde</h3>
      <p className="font-caption text-caption text-on-surface-variant mt-base">2 Aday • 85.000 ₺</p>
      </div>
      <span className="bg-primary-fixed text-on-primary-fixed font-label-bold text-label-bold px-xs py-base rounded-full">2</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm min-h-[100px] rounded-lg p-base bg-surface-container-low/50">
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-sm shadow-sm hover:shadow-md transition-shadow cursor-grab relative group">
      <div className="flex justify-between items-start mb-xs">
      <span className="bg-tertiary-container text-on-tertiary-container font-caption text-caption px-xs py-base rounded-DEFAULT">Yüksek Öncelik</span>
      <button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-body-large text-body-large font-semibold text-on-surface mb-base">TechStart Sunucu Altyapısı</h4>
      <p className="font-caption text-caption text-on-surface-variant mb-sm">Can Demir</p>
      <div className="flex justify-between items-center border-t border-outline-variant pt-sm mt-sm">
      <span className="font-body-main text-body-main font-semibold text-primary">60.000 ₺</span>
      <span className="font-caption text-caption text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px] mr-1" data-icon="event">event</span> 10 Eki</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Teklif Verildi */}
      <div className="flex-shrink-0 w-80 flex flex-col h-full">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm mb-sm shrink-0 flex justify-between items-center shadow-sm border-l-4 border-l-primary">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Teklif Verildi</h3>
      <p className="font-caption text-caption text-on-surface-variant mt-base">3 Aday • 210.000 ₺</p>
      </div>
      <span className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-xs py-base rounded-full">3</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm min-h-[100px] rounded-lg p-base bg-surface-container-low/50">
      {/* Card 4 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-sm shadow-sm hover:shadow-md transition-shadow cursor-grab relative group">
      <div className="flex justify-between items-start mb-xs">
      <span className="bg-surface-variant text-on-surface-variant font-caption text-caption px-xs py-base rounded-DEFAULT">Beklemede</span>
      <button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-body-large text-body-large font-semibold text-on-surface mb-base">Beta Holding ERP Entegrasyonu</h4>
      <p className="font-caption text-caption text-on-surface-variant mb-sm">Elif Şahin</p>
      <div className="flex justify-between items-center border-t border-outline-variant pt-sm mt-sm">
      <span className="font-body-main text-body-main font-semibold text-primary">150.000 ₺</span>
      <span className="font-caption text-caption text-on-surface-variant flex items-center text-error"><span className="material-symbols-outlined text-[14px] mr-1" data-icon="warning">warning</span> Gecikmeli</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Kazanıldı */}
      <div className="flex-shrink-0 w-80 flex flex-col h-full opacity-70 hover:opacity-100 transition-opacity">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm mb-sm shrink-0 flex justify-between items-center shadow-sm border-l-4 border-l-[#10B981]">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Kazanıldı</h3>
      <p className="font-caption text-caption text-on-surface-variant mt-base">12 Aday • 850.000 ₺</p>
      </div>
      <span className="bg-surface-variant text-on-surface-variant font-label-bold text-label-bold px-xs py-base rounded-full">12</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm min-h-[100px] rounded-lg p-base bg-surface-container-low/30 border border-dashed border-outline-variant flex items-center justify-center">
      <p className="font-caption text-caption text-on-surface-variant text-center">Fırsatları buraya sürükleyin</p>
      </div>
      </div>
      {/* Column: Kaybedildi */}
      <div className="flex-shrink-0 w-80 flex flex-col h-full opacity-60 hover:opacity-100 transition-opacity">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm mb-sm shrink-0 flex justify-between items-center shadow-sm border-l-4 border-l-error">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Kaybedildi</h3>
      <p className="font-caption text-caption text-on-surface-variant mt-base">5 Aday • 110.000 ₺</p>
      </div>
      <span className="bg-error-container text-on-error-container font-label-bold text-label-bold px-xs py-base rounded-full">5</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm min-h-[100px] rounded-lg p-base bg-surface-container-low/30 border border-dashed border-outline-variant flex items-center justify-center">
      <p className="font-caption text-caption text-on-surface-variant text-center">Fırsatları buraya sürükleyin</p>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
