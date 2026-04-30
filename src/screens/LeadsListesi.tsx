// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Leads Listesi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface LeadsListesiProps {}

export function LeadsListesi(props: LeadsListesiProps) {
  return (
    <>
      {/* TopNavBar Shared Component */}
      <nav className="flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-slate-900 z-50 docked full-width top-0 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
      <div className="flex items-center gap-8">
      <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                      Lead Triage 0430
                  </div>
      <div className="hidden md:flex items-center gap-2 h-full pt-4">
      <a className="font-['Inter'] text-sm antialiased text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 mt-4 px-3" href="#">
                          Adaylar
                      </a>
      <a className="font-['Inter'] text-sm antialiased text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2 pb-6 mt-2 duration-200 ease-in-out" href="#">
                          Pipeline
                      </a>
      <a className="font-['Inter'] text-sm antialiased text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2 pb-6 mt-2 duration-200 ease-in-out" href="#">
                          Analizler
                      </a>
      <a className="font-['Inter'] text-sm antialiased text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md px-3 py-2 pb-6 mt-2 duration-200 ease-in-out" href="#">
                          Ayarlar
                      </a>
      </div>
      </div>
      <div className="flex items-center gap-4">
      {/* Search Bar on Right */}
      <div className="hidden md:flex relative items-center">
      <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[20px]">search</span>
      <input className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 w-64" placeholder="Ara..." type="text" />
      </div>
      <button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-margin py-xl flex flex-col gap-margin">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Adaylar</h1>
      <p className="font-body-main text-body-main text-on-surface-variant mt-base">Aktif lead portföyünüzü yönetin ve takip edin.</p>
      </div>
      <button className="bg-primary text-on-primary px-lg py-sm rounded-DEFAULT font-label-bold text-label-bold flex items-center gap-xs hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
                      Yeni Lead
                  </button>
      </header>
      {/* Filters Section */}
      <section className="bg-surface-container-lowest p-md rounded-xl border border-surface-variant flex flex-col md:flex-row gap-md items-center shadow-sm">
      <div className="relative w-full md:w-96 flex-shrink-0">
      <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="w-full pl-[40px] pr-md py-sm bg-surface rounded-DEFAULT border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-main text-body-main text-on-surface transition-all" placeholder="İsim, şirket veya e-posta ara..." type="text" />
      </div>
      <div className="flex items-center gap-sm w-full md:w-auto">
      <select className="flex-1 md:w-48 px-md py-sm bg-surface rounded-DEFAULT border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-main text-body-main text-on-surface appearance-none cursor-pointer">
      <option disabled={true} selected={true} value="">Durum</option>
      <option value="yeni">Yeni</option>
      <option value="gorusuluyor">Görüşülüyor</option>
      <option value="teklif_verildi">Teklif Verildi</option>
      </select>
      <select className="flex-1 md:w-48 px-md py-sm bg-surface rounded-DEFAULT border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-main text-body-main text-on-surface appearance-none cursor-pointer">
      <option disabled={true} selected={true} value="">Kaynak</option>
      <option value="web">Web Sitesi</option>
      <option value="referans">Referans</option>
      <option value="fuar">Fuar &amp; Etkinlik</option>
      </select>
      <button className="p-sm text-on-surface-variant border border-outline-variant rounded-DEFAULT hover:bg-surface-container transition-colors flex items-center justify-center bg-surface">
      <span className="material-symbols-outlined text-[20px]">tune</span>
      </button>
      </div>
      </section>
      {/* Leads Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-margin">
      {/* Card 1 */}
      <article className="bg-surface-container-lowest rounded-xl border border-surface-variant p-lg shadow-sm flex flex-col gap-md relative group hover:border-outline-variant transition-colors">
      <div className="flex justify-between items-start">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Ahmet Yılmaz</h3>
      <p className="font-body-main text-body-main text-on-surface-variant">Teknoloji Çözümleri A.Ş.</p>
      </div>
      <div className="flex gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-base rounded-DEFAULT hover:bg-surface-container"><span className="material-symbols-outlined text-[20px]">edit</span></button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-base rounded-DEFAULT hover:bg-error-container"><span className="material-symbols-outlined text-[20px]">delete</span></button>
      </div>
      </div>
      <div className="h-[1px] w-full bg-surface-variant my-base"></div>
      <div className="grid grid-cols-2 gap-sm font-body-main text-body-main">
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Kaynak</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-primary">language</span> Web Sitesi</span>
      </div>
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Tahmini Değer</span>
      <span className="text-on-surface font-medium">120.000 TL</span>
      </div>
      <div className="flex flex-col gap-base col-span-2 mt-xs">
      <span className="text-on-surface-variant font-caption text-caption">Takip Tarihi</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-tertiary">calendar_today</span> 15.05.2024</span>
      </div>
      </div>
      <div className="mt-auto pt-sm flex items-center">
      <span className="bg-primary-container text-on-primary-container px-sm py-base rounded-full font-label-bold text-label-bold border border-primary/20">Yeni</span>
      </div>
      </article>
      {/* Card 2 */}
      <article className="bg-surface-container-lowest rounded-xl border border-surface-variant p-lg shadow-sm flex flex-col gap-md relative group hover:border-outline-variant transition-colors">
      <div className="flex justify-between items-start">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Zeynep Kaya</h3>
      <p className="font-body-main text-body-main text-on-surface-variant">Global Lojistik Ltd.</p>
      </div>
      <div className="flex gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-base rounded-DEFAULT hover:bg-surface-container"><span className="material-symbols-outlined text-[20px]">edit</span></button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-base rounded-DEFAULT hover:bg-error-container"><span className="material-symbols-outlined text-[20px]">delete</span></button>
      </div>
      </div>
      <div className="h-[1px] w-full bg-surface-variant my-base"></div>
      <div className="grid grid-cols-2 gap-sm font-body-main text-body-main">
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Kaynak</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-secondary">handshake</span> Referans</span>
      </div>
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Tahmini Değer</span>
      <span className="text-on-surface font-medium">85.000 TL</span>
      </div>
      <div className="flex flex-col gap-base col-span-2 mt-xs">
      <span className="text-on-surface-variant font-caption text-caption">Takip Tarihi</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-tertiary">calendar_today</span> 16.05.2024</span>
      </div>
      </div>
      <div className="mt-auto pt-sm flex items-center">
      <span className="bg-secondary-container text-on-secondary-container px-sm py-base rounded-full font-label-bold text-label-bold border border-secondary/20">Görüşülüyor</span>
      </div>
      </article>
      {/* Card 3 */}
      <article className="bg-surface-container-lowest rounded-xl border border-surface-variant p-lg shadow-sm flex flex-col gap-md relative group hover:border-outline-variant transition-colors">
      <div className="flex justify-between items-start">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Can Demir</h3>
      <p className="font-body-main text-body-main text-on-surface-variant">Demir Sağlık Grubu</p>
      </div>
      <div className="flex gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-base rounded-DEFAULT hover:bg-surface-container"><span className="material-symbols-outlined text-[20px]">edit</span></button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-base rounded-DEFAULT hover:bg-error-container"><span className="material-symbols-outlined text-[20px]">delete</span></button>
      </div>
      </div>
      <div className="h-[1px] w-full bg-surface-variant my-base"></div>
      <div className="grid grid-cols-2 gap-sm font-body-main text-body-main">
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Kaynak</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-tertiary">storefront</span> Fuar</span>
      </div>
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Tahmini Değer</span>
      <span className="text-on-surface font-medium">250.000 TL</span>
      </div>
      <div className="flex flex-col gap-base col-span-2 mt-xs">
      <span className="text-on-surface-variant font-caption text-caption">Takip Tarihi</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-error">warning</span> Bugün</span>
      </div>
      </div>
      <div className="mt-auto pt-sm flex items-center">
      <span className="bg-tertiary-container text-on-tertiary-container px-sm py-base rounded-full font-label-bold text-label-bold border border-tertiary/20">Teklif Verildi</span>
      </div>
      </article>
      {/* Card 4 */}
      <article className="bg-surface-container-lowest rounded-xl border border-surface-variant p-lg shadow-sm flex flex-col gap-md relative group hover:border-outline-variant transition-colors">
      <div className="flex justify-between items-start">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface">Ayşe Çelik</h3>
      <p className="font-body-main text-body-main text-on-surface-variant">Çelik Endüstri</p>
      </div>
      <div className="flex gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-base rounded-DEFAULT hover:bg-surface-container"><span className="material-symbols-outlined text-[20px]">edit</span></button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-base rounded-DEFAULT hover:bg-error-container"><span className="material-symbols-outlined text-[20px]">delete</span></button>
      </div>
      </div>
      <div className="h-[1px] w-full bg-surface-variant my-base"></div>
      <div className="grid grid-cols-2 gap-sm font-body-main text-body-main">
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Kaynak</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-primary">language</span> Web Sitesi</span>
      </div>
      <div className="flex flex-col gap-base">
      <span className="text-on-surface-variant font-caption text-caption">Tahmini Değer</span>
      <span className="text-on-surface font-medium">45.000 TL</span>
      </div>
      <div className="flex flex-col gap-base col-span-2 mt-xs">
      <span className="text-on-surface-variant font-caption text-caption">Takip Tarihi</span>
      <span className="text-on-surface font-medium flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-tertiary">calendar_today</span> 18.05.2024</span>
      </div>
      </div>
      <div className="mt-auto pt-sm flex items-center">
      <span className="bg-primary-container text-on-primary-container px-sm py-base rounded-full font-label-bold text-label-bold border border-primary/20">Yeni</span>
      </div>
      </article>
      </section>
      </main>
    </>
  );
}
