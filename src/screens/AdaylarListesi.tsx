// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Adaylar Listesi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AdaylarListesiProps {}

export function AdaylarListesi(props: AdaylarListesiProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 docked full-width top-0 border-b shadow-sm dark:shadow-none border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-8">
      <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-h2">Lead Triage 0430</span>
      <nav className="hidden md:flex gap-6 h-full items-end">
      <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 font-body-main duration-200 ease-in-out" href="#">Adaylar</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors pb-4 mt-4 font-body-main duration-200 ease-in-out" href="#">Pipeline</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors pb-4 mt-4 font-body-main duration-200 ease-in-out" href="#">Analizler</a>
      <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors pb-4 mt-4 font-body-main duration-200 ease-in-out" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center gap-4">
      <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant">search</span>
      </button>
      <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
      </button>
      <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md duration-200 ease-in-out flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar (Hidden on md for canvas space, keeping logic but structurally it's meant for larger screens if not topnav. Suppressed per guidelines to focus on canvas, but adding a simplified version if needed, skipping to focus on bento grid) */}
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto p-margin bg-surface-container-low">
      <div className="max-w-7xl mx-auto flex flex-col gap-margin">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Aday Yönetimi</h1>
      <p className="font-body-main text-body-main text-on-surface-variant mt-1">Aktif potansiyel müşterileri takip edin ve önceliklendirin.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg font-body-main text-body-main text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full sm:w-64 transition-all" placeholder="Aday ara..." type="text" />
      </div>
      <div className="flex gap-2">
      <select className="px-4 py-2 bg-surface border border-outline-variant rounded-lg font-body-main text-body-main text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23434655%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[position:right_12px_center]">
      <option value="">Tüm Durumlar</option>
      <option value="yeni">Yeni</option>
      <option value="iletisimde">İletişimde</option>
      <option value="teklif">Teklif Aşaması</option>
      </select>
      <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
                                      Yeni Lead
                                  </button>
      </div>
      </div>
      </div>
      {/* Bento Grid Layout for Leads */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Lead Card 1 */}
      <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -z-0"></div>
      <div className="flex justify-between items-start mb-4 z-10 relative">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-h3 text-h3">
                                          AC
                                      </div>
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Ahmet Yılmaz</h3>
      <p className="font-body-main text-body-main text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">business</span>
                                              Acme Corp
                                          </p>
      </div>
      </div>
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surface-variant rounded">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 z-10 relative">
      <div>
      <p className="font-caption text-caption text-outline">Kaynak</p>
      <p className="font-body-main text-body-main text-on-surface flex items-center gap-1 mt-0.5">
      <span className="material-symbols-outlined text-[16px]">campaign</span>
                                          Web Sitesi
                                      </p>
      </div>
      <div>
      <p className="font-caption text-caption text-outline">Tahmini Değer</p>
      <p className="font-label-bold text-label-bold text-on-surface mt-0.5">₺45,000</p>
      </div>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-surface-variant z-10 relative">
      <span className="px-2.5 py-1 bg-error-container text-on-error-container rounded-md font-label-bold text-[10px] uppercase tracking-wider">
                                      Yeni
                                  </span>
      <div className="flex gap-2">
      <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Düzenle">
      <span className="material-symbols-outlined text-[18px]">edit</span>
      </button>
      <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded transition-colors" title="İletişime Geçildi">
      <span className="material-symbols-outlined text-[18px]">check_circle</span>
      </button>
      <button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-colors" title="Sil">
      <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
      </div>
      </div>
      </div>
      {/* Lead Card 2 */}
      <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col group relative overflow-hidden">
      <div className="flex justify-between items-start mb-4 z-10 relative">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-h3 text-h3">
                                          ZT
                                      </div>
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Zeynep Kaya</h3>
      <p className="font-body-main text-body-main text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">business</span>
                                              Tech Solutions
                                          </p>
      </div>
      </div>
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surface-variant rounded">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 z-10 relative">
      <div>
      <p className="font-caption text-caption text-outline">Kaynak</p>
      <p className="font-body-main text-body-main text-on-surface flex items-center gap-1 mt-0.5">
      <span className="material-symbols-outlined text-[16px]">group</span>
                                          Referans
                                      </p>
      </div>
      <div>
      <p className="font-caption text-caption text-outline">Tahmini Değer</p>
      <p className="font-label-bold text-label-bold text-on-surface mt-0.5">₺120,000</p>
      </div>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-surface-variant z-10 relative">
      <span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container rounded-md font-label-bold text-[10px] uppercase tracking-wider">
                                      İletişimde
                                  </span>
      <div className="flex gap-2">
      <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Düzenle">
      <span className="material-symbols-outlined text-[18px]">edit</span>
      </button>
      <button className="p-1.5 text-primary bg-primary/10 rounded transition-colors" title="İletişime Geçildi">
      <span className="material-symbols-outlined text-[18px]">check_circle</span>
      </button>
      <button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-colors" title="Sil">
      <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
      </div>
      </div>
      </div>
      {/* Lead Card 3 */}
      <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col group relative overflow-hidden">
      <div className="flex justify-between items-start mb-4 z-10 relative">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-h3 text-h3">
                                          MD
                                      </div>
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Murat Demir</h3>
      <p className="font-body-main text-body-main text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">business</span>
                                              Demir Lojistik
                                          </p>
      </div>
      </div>
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surface-variant rounded">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 z-10 relative">
      <div>
      <p className="font-caption text-caption text-outline">Kaynak</p>
      <p className="font-body-main text-body-main text-on-surface flex items-center gap-1 mt-0.5">
      <span className="material-symbols-outlined text-[16px]">mail</span>
                                          E-posta Kampanyası
                                      </p>
      </div>
      <div>
      <p className="font-caption text-caption text-outline">Tahmini Değer</p>
      <p className="font-label-bold text-label-bold text-on-surface mt-0.5">₺85,000</p>
      </div>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-surface-variant z-10 relative">
      <span className="px-2.5 py-1 bg-primary-fixed text-on-primary-fixed rounded-md font-label-bold text-[10px] uppercase tracking-wider">
                                      Teklif Aşaması
                                  </span>
      <div className="flex gap-2">
      <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Düzenle">
      <span className="material-symbols-outlined text-[18px]">edit</span>
      </button>
      <button className="p-1.5 text-primary bg-primary/10 rounded transition-colors" title="İletişime Geçildi">
      <span className="material-symbols-outlined text-[18px]">check_circle</span>
      </button>
      <button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-colors" title="Sil">
      <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
