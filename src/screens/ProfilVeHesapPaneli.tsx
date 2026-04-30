// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profil ve Hesap Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ProfilVeHesapPaneliProps {}

export function ProfilVeHesapPaneli(props: ProfilVeHesapPaneliProps) {
  return (
    <>
      {/* Main Content Area (Simulated) */}
      <main className="flex-1 p-margin opacity-30">
      <h1 className="font-h1 text-h1 mb-lg">Dashboard</h1>
      <div className="h-64 bg-surface-container rounded-lg border border-outline-variant mb-md"></div>
      <div className="h-64 bg-surface-container rounded-lg border border-outline-variant"></div>
      </main>
      {/* Overlay */}
      <div className="fixed inset-0 bg-on-background/20 z-40"></div>
      {/* SideNavBar (from JSON) */}
      <aside className="fixed right-0 top-0 h-full w-80 border-l border-outline-variant shadow-2xl bg-surface-container-lowest text-primary font-['Inter'] text-sm leading-relaxed z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
      {/* Header */}
      <div className="p-lg flex items-center justify-between border-b border-outline-variant">
      <div className="flex items-center gap-md">
      <img alt="Kullanıcı Avatarı" className="w-12 h-12 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a person, used as an avatar in a clean, modern UI. The lighting is soft and corporate, matching a light-mode minimalist design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuEP2X8nOqiShxLCjK6xkkQ1TZvJoXvXlhRMO4cQ-UzoqWjzjejhKuaBI2jmc35TDWClIQPGVWKNNOnS6a490JD_OsPmaX8ooGLwSt2M3TPbMJ18Mm1N7-BO6iyFbJk8hK3l3oQzePck36q_eN6pjSG_ZVGfb5hN5euGTTFwIjX2rFOBQxY6ARrMRLfHBfbXcVyJEa4CaOYfLSY-6wuJyLPVbsA03LGIDwfoYfOXkiIHmOBuQ5M84q4dewpKaHLPABWU5PQ4LTnsd_" />
      <div>
      <h2 className="font-h3 text-h3 text-on-surface">Kullanıcı Profili</h2>
      <p className="font-caption text-caption text-on-surface-variant">Yönetici Hesabı</p>
      </div>
      </div>
      <button aria-label="Kapat" className="text-on-surface-variant hover:bg-surface-container-high rounded-full p-xs transition-colors">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 p-md flex flex-col space-y-xs overflow-y-auto">
      {/* Profil Bilgileri (Active) */}
      <a className="flex items-center gap-sm px-md py-sm bg-primary-fixed text-on-primary-fixed-variant font-semibold rounded-md transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span className="font-body-large text-body-large">Profil Bilgileri</span>
      </a>
      {/* Zaman Dilimi */}
      <div className="px-md py-sm text-on-surface-variant hover:bg-surface-container rounded-md hover:bg-surface-container-high transition-all group">
      <div className="flex items-center gap-sm mb-xs">
      <span className="material-symbols-outlined group-hover:text-on-surface" data-icon="schedule">schedule</span>
      <span className="font-body-large text-body-large group-hover:text-on-surface">Zaman Dilimi</span>
      </div>
      <div className="pl-xl mt-xs">
      <select className="w-full bg-surface text-on-surface border border-outline-variant rounded-DEFAULT py-xs px-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-main text-body-main">
      <option>(GMT+03:00) Istanbul</option>
      <option>(GMT+00:00) London</option>
      <option>(GMT-05:00) New York</option>
      </select>
      </div>
      </div>
      {/* Bildirim Tercihleri */}
      <div className="px-md py-sm text-on-surface-variant hover:bg-surface-container rounded-md hover:bg-surface-container-high transition-all group">
      <div className="flex items-center gap-sm mb-xs">
      <span className="material-symbols-outlined group-hover:text-on-surface" data-icon="notifications">notifications</span>
      <span className="font-body-large text-body-large group-hover:text-on-surface">Bildirim Tercihleri</span>
      </div>
      <div className="pl-xl mt-sm flex flex-col gap-sm">
      <label className="flex items-center justify-between cursor-pointer">
      <span className="font-body-main text-body-main text-on-surface">E-posta Bildirimleri</span>
      <div className="relative">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-10 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </div>
      </label>
      <label className="flex items-center justify-between cursor-pointer">
      <span className="font-body-main text-body-main text-on-surface">Uygulama İçi Hatırlatıcılar</span>
      <div className="relative">
      <input className="sr-only peer" type="checkbox" />
      <div className="w-10 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </div>
      </label>
      </div>
      </div>
      {/* Güvenlik */}
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container rounded-md hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="shield">shield</span>
      <span className="font-body-large text-body-large">Güvenlik</span>
      </a>
      </nav>
      {/* Footer / CTA */}
      <div className="p-lg border-t border-outline-variant">
      <button className="w-full bg-surface-container border border-outline-variant text-on-surface font-label-bold text-label-bold py-sm px-md rounded-DEFAULT hover:bg-surface-variant transition-colors flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>logout</span>
                      Çıkış Yap
                  </button>
      </div>
      </aside>
    </>
  );
}
