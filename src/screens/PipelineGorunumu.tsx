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
      {/* TopNavBar (Shared Component) */}
      <header className="flex items-center justify-between px-lg h-16 w-full bg-surface-container-lowest z-50 sticky top-0 border-b border-outline-variant shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-xl h-full">
      <div className="font-h3 text-h3 text-on-surface tracking-tight">Lead Triage 0430</div>
      <nav className="hidden md:flex items-end h-full gap-lg">
      {/* Inactive Tab */}
      <a className="text-on-surface-variant font-medium hover:text-on-surface transition-colors pb-4 mt-4 font-body-main text-body-main hover:bg-surface-container-low rounded-t-md px-2" href="#">Adaylar</a>
      {/* Active Tab */}
      <a className="text-primary border-b-2 border-primary pb-4 mt-4 font-body-main text-body-main font-medium px-2" href="#">Pipeline</a>
      {/* Inactive Tabs */}
      <a className="text-on-surface-variant font-medium hover:text-on-surface transition-colors pb-4 mt-4 font-body-main text-body-main hover:bg-surface-container-low rounded-t-md px-2" href="#">Analizler</a>
      <a className="text-on-surface-variant font-medium hover:text-on-surface transition-colors pb-4 mt-4 font-body-main text-body-main hover:bg-surface-container-low rounded-t-md px-2" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="Notifications" className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="Account" className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md transition-colors">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full px-lg py-margin overflow-hidden">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-margin shrink-0">
      <div>
      <h1 className="font-h2 text-h2 text-on-surface">Pipeline Görünümü</h1>
      <p className="font-body-main text-body-main text-on-surface-variant mt-1">Sürükle ve bırak ile aday durumlarını güncelleyin.</p>
      </div>
      <div className="flex gap-sm">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">search</span>
      <input className="pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-main text-body-main text-on-surface focus:border-primary focus:ring-1 focus:ring-primary w-64 outline-none transition-all" placeholder="Aday veya şirket ara..." type="text" />
      </div>
      <button className="flex items-center gap-xs px-4 py-2 bg-primary text-on-primary font-label-bold text-label-bold rounded-lg hover:bg-surface-tint transition-colors">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Yeni Aday
                      </button>
      </div>
      </div>
      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto kanban-scroll pb-sm">
      <div className="flex gap-gutter h-full items-start min-w-max pb-4">
      {/* Column 1: YENİ */}
      <div className="flex flex-col w-[300px] shrink-0 h-full max-h-full">
      <div className="flex items-center justify-between p-sm mb-sm bg-surface-container-lowest border border-outline-variant rounded-lg border-t-4 border-t-primary shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-bold text-label-bold text-on-surface">YENİ</h3>
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded-full font-caption text-caption">3</span>
      </div>
      <span className="font-label-bold text-label-bold text-on-surface-variant">₺45.000</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 pb-4">
      {/* Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/50 transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-2">
      <h4 className="font-body-large text-body-large font-medium text-on-surface">Acme Corp İletişimi</h4>
      <span className="material-symbols-outlined text-outline-variant text-[18px]">more_vert</span>
      </div>
      <p className="font-caption text-caption text-on-surface-variant mb-4">Ahmet Yılmaz • Kurumsal</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-label-bold text-label-bold text-on-surface">₺15.000</span>
      <div className="flex items-center gap-xs text-on-surface-variant font-caption text-caption">
      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                          Bugün
                                      </div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/50 transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-2">
      <h4 className="font-body-large text-body-large font-medium text-on-surface">Global Lojistik Genişleme</h4>
      <span className="material-symbols-outlined text-outline-variant text-[18px]">more_vert</span>
      </div>
      <p className="font-caption text-caption text-on-surface-variant mb-4">Zeynep Kaya • KOBİ</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-label-bold text-label-bold text-on-surface">₺22.000</span>
      <div className="flex items-center gap-xs text-on-surface-variant font-caption text-caption">
      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                          Dün
                                      </div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/50 transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-2">
      <h4 className="font-body-large text-body-large font-medium text-on-surface">Tech Start Projesi</h4>
      <span className="material-symbols-outlined text-outline-variant text-[18px]">more_vert</span>
      </div>
      <p className="font-caption text-caption text-on-surface-variant mb-4">Can Öztürk • Teknoloji</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-label-bold text-label-bold text-on-surface">₺8.000</span>
      <div className="flex items-center gap-xs text-error font-caption text-caption">
      <span className="material-symbols-outlined text-[14px]">warning</span>
                                          Acil
                                      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column 2: İLETİŞİMDE */}
      <div className="flex flex-col w-[300px] shrink-0 h-full max-h-full">
      <div className="flex items-center justify-between p-sm mb-sm bg-surface-container-lowest border border-outline-variant rounded-lg border-t-4 border-t-tertiary shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-bold text-label-bold text-on-surface">İLETİŞİMDE</h3>
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded-full font-caption text-caption">2</span>
      </div>
      <span className="font-label-bold text-label-bold text-on-surface-variant">₺60.000</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 pb-4">
      {/* Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/50 transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-2">
      <h4 className="font-body-large text-body-large font-medium text-on-surface">Beta A.Ş. Danışmanlık</h4>
      <span className="material-symbols-outlined text-outline-variant text-[18px]">more_vert</span>
      </div>
      <p className="font-caption text-caption text-on-surface-variant mb-4">Elif Demir • Finans</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-label-bold text-label-bold text-on-surface">₺45.000</span>
      <div className="flex items-center gap-xs text-on-surface-variant font-caption text-caption">
      <span className="material-symbols-outlined text-[14px]">mail</span>
                                          Bekleniyor
                                      </div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/50 transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-2">
      <h4 className="font-body-large text-body-large font-medium text-on-surface">Otel Zinciri Altyapı</h4>
      <span className="material-symbols-outlined text-outline-variant text-[18px]">more_vert</span>
      </div>
      <p className="font-caption text-caption text-on-surface-variant mb-4">Murat Can • Turizm</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-label-bold text-label-bold text-on-surface">₺15.000</span>
      <div className="flex items-center gap-xs text-primary font-caption text-caption">
      <span className="material-symbols-outlined text-[14px]">call</span>
                                          Arama Planlandı
                                      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column 3: TEKLİF VERİLDİ */}
      <div className="flex flex-col w-[300px] shrink-0 h-full max-h-full">
      <div className="flex items-center justify-between p-sm mb-sm bg-surface-container-lowest border border-outline-variant rounded-lg border-t-4 border-t-secondary shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-bold text-label-bold text-on-surface">TEKLİF VERİLDİ</h3>
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded-full font-caption text-caption">1</span>
      </div>
      <span className="font-label-bold text-label-bold text-on-surface-variant">₺120.000</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 pb-4">
      {/* Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/50 transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-2">
      <h4 className="font-body-large text-body-large font-medium text-on-surface">Mega Holding ERP</h4>
      <span className="material-symbols-outlined text-outline-variant text-[18px]">more_vert</span>
      </div>
      <p className="font-caption text-caption text-on-surface-variant mb-4">Ayşe Çelik • Holding</p>
      <div className="mt-2 mb-3 w-full bg-surface-container-high rounded-full h-1.5">
      <div className="bg-secondary h-1.5 rounded-full" style={{width: "75%"}}></div>
      </div>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-label-bold text-label-bold text-on-surface">₺120.000</span>
      <div className="flex items-center gap-xs text-on-surface-variant font-caption text-caption">
      <span className="material-symbols-outlined text-[14px]">description</span>
                                          İncelemede
                                      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column 4: KAZANILDI */}
      <div className="flex flex-col w-[300px] shrink-0 h-full max-h-full">
      <div className="flex items-center justify-between p-sm mb-sm bg-surface-container-lowest border border-outline-variant rounded-lg border-t-4 border-t-surface-tint shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-bold text-label-bold text-on-surface">KAZANILDI</h3>
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded-full font-caption text-caption">1</span>
      </div>
      <span className="font-label-bold text-label-bold text-on-surface-variant">₺85.000</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 pb-4">
      {/* Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/50 transition-colors cursor-grab opacity-80">
      <div className="flex justify-between items-start mb-2">
      <h4 className="font-body-large text-body-large font-medium text-on-surface line-through decoration-surface-tint/50">Delta Medikal</h4>
      <span className="material-symbols-outlined text-surface-tint text-[18px]">check_circle</span>
      </div>
      <p className="font-caption text-caption text-on-surface-variant mb-4">Kemal Kılıç • Sağlık</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-label-bold text-label-bold text-on-surface">₺85.000</span>
      <span className="bg-secondary-container text-surface-tint px-2 py-1 rounded font-label-bold text-[10px] uppercase tracking-wider">Tamamlandı</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column 5: KAYBEDİLDİ */}
      <div className="flex flex-col w-[300px] shrink-0 h-full max-h-full">
      <div className="flex items-center justify-between p-sm mb-sm bg-surface-container-lowest border border-outline-variant rounded-lg border-t-4 border-t-error shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-bold text-label-bold text-on-surface">KAYBEDİLDİ</h3>
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded-full font-caption text-caption">0</span>
      </div>
      <span className="font-label-bold text-label-bold text-on-surface-variant">₺0</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 pb-4 min-h-[100px] items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-lg bg-surface-container-low/50">
      <span className="font-body-main text-body-main text-outline-variant italic">Kayıt yok</span>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
