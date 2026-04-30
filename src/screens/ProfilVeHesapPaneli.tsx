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
      {/* Dimmed Background Dashboard Context */}
      <div aria-hidden={true} className="h-screen w-full flex flex-col relative select-none">
      {/* TopNavBar Mockup from JSON */}
      <header className="flex items-center justify-between px-6 h-16 w-full bg-surface-container-lowest border-b border-outline-variant z-10 shadow-sm">
      <div className="flex items-center space-x-8">
      <span className="text-lg font-bold tracking-tight text-on-surface">Lead Triage 0430</span>
      <nav className="hidden md:flex space-x-6">
      <a className="text-on-surface-variant font-medium hover:text-on-surface transition-colors font-body-main text-body-main" href="#">Adaylar</a>
      <a className="text-on-surface-variant font-medium hover:text-on-surface transition-colors font-body-main text-body-main" href="#">Pipeline</a>
      <a className="text-primary border-b-2 border-primary pb-[22px] mt-[24px] font-body-main text-body-main font-semibold" href="#">Analizler</a>
      <a className="text-on-surface-variant font-medium hover:text-on-surface transition-colors font-body-main text-body-main" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center space-x-4 text-on-surface-variant">
      <span className="material-symbols-outlined cursor-pointer hover:text-on-surface">search</span>
      <span className="material-symbols-outlined cursor-pointer hover:text-on-surface">notifications</span>
      <img alt="Avatar Mockup" className="h-8 w-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaDikkmCwpBaDv73tq8hD7Vq2jDuhZ66GFQk3q4jFPkL2YvRXCi981DlkPQvbBABHfpar9GIJqFXZ26Wh-2o9ltMj-Ewam3y74PuOybGv-aw8H94EcvLqCmImfFCBUNPTmiKhb_51YO737isjqMHf1c-3MN357F4p0RhDXN-aox7mukLdSPxunetWXSSP2HoYJYmJ8t3KtGIDoeHZuaxsnVpPti_f1ATog2QdKKpxLPZ04pBXnZKgd-wpWVmw1NWiAmQH10zFBdbup" />
      </div>
      </header>
      {/* Mock Content Body */}
      <main className="flex-1 p-8">
      <div className="grid grid-cols-3 gap-6">
      <div className="h-32 bg-surface-container rounded-lg border border-outline-variant"></div>
      <div className="h-32 bg-surface-container rounded-lg border border-outline-variant"></div>
      <div className="h-32 bg-surface-container rounded-lg border border-outline-variant"></div>
      <div className="col-span-3 h-96 bg-surface-container rounded-lg border border-outline-variant mt-6"></div>
      </div>
      </main>
      {/* Overlay */}
      <div className="absolute inset-0 bg-on-surface/30 backdrop-blur-sm z-40 transition-opacity"></div>
      </div>
      {/* Right Side Panel Drawer (SideNavBar variant based on prompt & JSON) */}
      <aside className="fixed right-0 top-0 h-full w-[400px] bg-surface-container-lowest border-l border-outline-variant shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
      {/* Header Section */}
      <div className="p-6 border-b border-outline-variant flex items-center justify-between bg-surface-container-low/50">
      <div className="flex items-center space-x-4">
      <div className="relative">
      <img alt="Kullanıcı Avatarı" className="h-14 w-14 rounded-full border border-outline-variant shadow-sm object-cover" data-alt="A professional, high-resolution headshot of a person looking directly at the camera. The lighting is soft and natural, emphasizing a modern corporate aesthetic. The background is a slightly out-of-focus, neutral gray office environment, aligning with a clean, light-mode minimalist design system. The overall mood is confident and approachable." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8rzWFFZBzN4zqMbuetS34HWT0BRWqzEE_FmhFN8U-EUYNlxPm6h4ZnuWIpO3rWlqUr7ncE4GZND7iQZmkSm9BbZqHLmLQf_cjNWGg2AvbOkHBNMZ9-S6mH60-kadTAd4Uv3uEqge0F0-ubFog-p-eDMjMGO7cFbX0ziMiDZ_VANb19Hnr6yt0VmSfrsfigSzkoDtdVWhXV-Ml-_A6TbtYRXE7HJSjS0ageiO3Tui2Z8rm5t96A-KGBJzUbKrlmubJzXbv89Bj3YZN" />
      <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-surface-container-lowest bg-[#10B981]"></span>
      </div>
      <div>
      <h2 className="font-h3 text-h3 text-on-surface">Freelancer</h2>
      <p className="font-caption text-caption text-on-surface-variant mt-1">Yönetici Hesabı</p>
      </div>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded p-1 transition-colors">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Scrollable Content Sections */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col">
      {/* Section: Profil Bilgileri */}
      <section className="space-y-4">
      <div className="flex items-center space-x-2 border-b border-outline-variant/50 pb-2">
      <span className="material-symbols-outlined text-primary text-[20px]">person</span>
      <h3 className="font-label-bold text-label-bold text-on-surface tracking-wider uppercase">Profil Bilgileri</h3>
      </div>
      <div className="space-y-1.5">
      <label className="block font-caption text-caption text-on-surface-variant" htmlFor="username">Kullanıcı Adı</label>
      <input className="w-full h-10 px-3 bg-surface border border-outline-variant rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-main text-body-main text-on-surface transition-colors" id="username" name="username" type="text" value="freelancer_admin" />
      </div>
      <div className="space-y-1.5">
      <label className="block font-caption text-caption text-on-surface-variant" htmlFor="email">E-posta Adresi</label>
      <input className="w-full h-10 px-3 bg-surface-container-high border border-outline-variant/50 rounded font-body-main text-body-main text-on-surface-variant cursor-not-allowed" id="email" name="email" readOnly={true} type="email" value="admin@leadtriage.com" />
      </div>
      </section>
      {/* Section: Zaman Dilimi */}
      <section className="space-y-4">
      <div className="flex items-center space-x-2 border-b border-outline-variant/50 pb-2">
      <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
      <h3 className="font-label-bold text-label-bold text-on-surface tracking-wider uppercase">Zaman Dilimi</h3>
      </div>
      <div className="space-y-1.5">
      <label className="block font-caption text-caption text-on-surface-variant" htmlFor="timezone">Yerel Zaman Dilimi</label>
      <div className="relative">
      <select className="w-full h-10 pl-3 pr-10 bg-surface border border-outline-variant rounded appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-main text-body-main text-on-surface transition-colors cursor-pointer" id="timezone" name="timezone">
      <option selected={true} value="Europe/Istanbul">Europe/Istanbul (GMT+3)</option>
      <option value="Europe/London">Europe/London (GMT)</option>
      <option value="America/New_York">America/New_York (GMT-5)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]">expand_more</span>
      </div>
      </div>
      <p className="font-caption text-caption text-outline mt-1">Sistem saatleri bu seçime göre görüntülenecektir.</p>
      </div>
      </section>
      {/* Section: Bildirim Tercihleri */}
      <section className="space-y-4">
      <div className="flex items-center space-x-2 border-b border-outline-variant/50 pb-2">
      <span className="material-symbols-outlined text-primary text-[20px]">notifications</span>
      <h3 className="font-label-bold text-label-bold text-on-surface tracking-wider uppercase">Bildirim Tercihleri</h3>
      </div>
      <div className="space-y-3">
      {/* Toggle Item */}
      <div className="flex items-center justify-between p-3 bg-surface rounded border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
      <div>
      <p className="font-body-main text-body-main font-medium text-on-surface">E-posta Bildirimleri</p>
      <p className="font-caption text-caption text-on-surface-variant">Günlük özetler ve önemli uyarılar.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-10 h-5 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      {/* Toggle Item */}
      <div className="flex items-center justify-between p-3 bg-surface rounded border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
      <div>
      <p className="font-body-main text-body-main font-medium text-on-surface">Uygulama İçi Bildirimler</p>
      <p className="font-caption text-caption text-on-surface-variant">Yeni lead atamaları ve durum değişiklikleri.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-10 h-5 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Filler to push footer down if content is short */}
      <div className="flex-1"></div>
      </div>
      {/* Footer Actions */}
      <div className="p-6 border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center">
      <button className="h-10 px-4 rounded border border-outline-variant bg-surface-container-lowest text-on-surface font-label-bold text-label-bold hover:bg-surface-container-low transition-colors focus:ring-2 focus:ring-primary/20">
                      Kapat
                  </button>
      <button className="h-10 px-4 rounded bg-error text-on-error font-label-bold text-label-bold hover:bg-error/90 transition-colors flex items-center space-x-2 focus:ring-2 focus:ring-error/20 shadow-sm">
      <span className="material-symbols-outlined text-[18px]">logout</span>
      <span>Çıkış Yap</span>
      </button>
      </div>
      </aside>
    </>
  );
}
