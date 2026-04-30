// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Veri Depolama Hatası Bannerı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface VeriDepolamaHatasiBanneriProps {}

export function VeriDepolamaHatasiBanneri(props: VeriDepolamaHatasiBanneriProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="flex items-center justify-between px-margin h-[64px] w-full bg-surface-container-lowest z-50 docked full-width top-0 border-b border-outline-variant shadow-sm">
      <div className="flex items-center gap-xl">
      {/* Brand Logo */}
      <div className="text-h3 font-h3 text-on-surface tracking-tight">
                      Lead Triage 0430
                  </div>
      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-margin pt-[20px]">
      <a className="text-body-main font-body-main text-secondary hover:text-on-surface transition-colors pb-4 mt-4" href="#">Adaylar</a>
      <a className="text-body-main font-body-main text-primary border-b-[2px] border-primary pb-4 mt-4 font-semibold" href="#">Pipeline</a>
      <a className="text-body-main font-body-main text-secondary hover:text-on-surface transition-colors pb-4 mt-4" href="#">Analizler</a>
      <a className="text-body-main font-body-main text-secondary hover:text-on-surface transition-colors pb-4 mt-4" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center gap-md">
      {/* Trailing Icon Actions */}
      <button className="p-xs hover:bg-surface-container rounded-md transition-colors text-secondary" data-icon="notifications">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-xs hover:bg-surface-container rounded-md transition-colors text-secondary" data-icon="account_circle">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Storage Error Banner */}
      <div className="bg-error-container border-b border-error/20 px-margin py-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md z-40 w-full shadow-sm">
      <div className="flex items-center gap-sm text-on-error-container">
      <span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
      <span className="font-body-large text-body-large font-medium">Veriler kaydedilemedi. Depolama alanı dolu olabilir.</span>
      </div>
      <div className="flex items-center gap-sm w-full sm:w-auto">
      <button className="px-md py-xs border border-error text-error hover:bg-error/10 rounded-DEFAULT font-label-bold text-label-bold transition-colors w-full sm:w-auto">
                      Yerel Veriyi Temizle
                  </button>
      <button className="px-md py-xs bg-error text-on-error hover:bg-error/90 rounded-DEFAULT font-label-bold text-label-bold transition-colors w-full sm:w-auto shadow-sm">
                      Tekrar Dene
                  </button>
      </div>
      </div>
      {/* Main Content Area: Pipeline View with Loading Overlay */}
      <main className="flex-1 relative flex flex-col p-margin overflow-hidden bg-surface">
      {/* Background Pipeline Board (Blurred/De-emphasized) */}
      <div className="flex gap-margin h-full overflow-x-auto opacity-40 pointer-events-none select-none">
      {/* Column 1 */}
      <div className="flex-none w-[320px] flex flex-col gap-sm bg-surface-container-low rounded-lg p-sm border border-outline-variant">
      <h3 className="font-label-bold text-label-bold text-secondary uppercase tracking-wider px-xs">Yeni Adaylar (12)</h3>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md shadow-sm">
      <div className="font-body-main text-body-main font-semibold text-on-surface mb-base">Ahmet Yılmaz</div>
      <div className="font-caption text-caption text-secondary">Tech Corp - CTO</div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md shadow-sm">
      <div className="font-body-main text-body-main font-semibold text-on-surface mb-base">Ayşe Demir</div>
      <div className="font-caption text-caption text-secondary">Global Logistics - VP Sales</div>
      </div>
      </div>
      {/* Column 2 */}
      <div className="flex-none w-[320px] flex flex-col gap-sm bg-surface-container-low rounded-lg p-sm border border-outline-variant">
      <h3 className="font-label-bold text-label-bold text-secondary uppercase tracking-wider px-xs">Görüşme Bekleyen (5)</h3>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md shadow-sm">
      <div className="font-body-main text-body-main font-semibold text-on-surface mb-base">Mehmet Kaya</div>
      <div className="font-caption text-caption text-secondary">Finans A.Ş. - Director</div>
      </div>
      </div>
      {/* Column 3 */}
      <div className="flex-none w-[320px] flex flex-col gap-sm bg-surface-container-low rounded-lg p-sm border border-outline-variant">
      <h3 className="font-label-bold text-label-bold text-secondary uppercase tracking-wider px-xs">Teklif Verildi (2)</h3>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md shadow-sm">
      <div className="font-body-main text-body-main font-semibold text-on-surface mb-base">Zeynep Çelik</div>
      <div className="font-caption text-caption text-secondary">Retail Group - CEO</div>
      </div>
      </div>
      </div>
      {/* Sync / Loading Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/50 backdrop-blur-[2px] z-10">
      <div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant shadow-lg flex flex-col items-center gap-md max-w-[400px] text-center">
      {/* Sync Icon acting as spinner (using styling to look active) */}
      <div className="text-primary opacity-80">
      <span className="material-symbols-outlined text-[48px]" style={{fontVariationSettings: "'wght' 300"}}>sync</span>
      </div>
      <div>
      <h2 className="font-h2 text-h2 text-on-surface mb-xs">Senkronizasyon bekleniyor...</h2>
      <p className="font-body-main text-body-main text-secondary">Yerel verileriniz güvene alındı. Depolama alanı sorunu çözüldüğünde eşitleme tamamlanacaktır.</p>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
