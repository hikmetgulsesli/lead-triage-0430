// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Silme Onay Modalı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SilmeOnayModaliProps {}

export function SilmeOnayModali(props: SilmeOnayModaliProps) {
  return (
    <>
      {/* Modal Backdrop */}
      <div aria-hidden={true} className="fixed inset-0 bg-on-background/20 z-40"></div>
      {/* Modal Container */}
      <div aria-labelledby="modal-title" aria-modal="true" className="bg-surface-container-lowest border border-surface-variant rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] w-full max-w-md mx-margin relative z-50 overflow-hidden flex flex-col" role="dialog">
      {/* Header/Content Area */}
      <div className="p-lg flex items-start gap-md">
      {/* Warning Icon */}
      <div className="bg-error-container text-on-error-container rounded-full p-xs flex-shrink-0 flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="warning" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </div>
      {/* Text Content */}
      <div className="flex-1">
      <h3 className="font-h3 text-h3 text-on-surface mb-xs" id="modal-title">Leadı Sil</h3>
      <p className="font-body-main text-body-main text-on-surface-variant">
                          Bu lead kalıcı olarak silinecek. Emin misiniz?
                      </p>
      </div>
      </div>
      {/* Actions Area */}
      <div className="bg-surface-container/50 px-lg py-md border-t border-surface-variant flex items-center justify-end gap-sm">
      {/* Secondary Button */}
      <button className="px-md py-xs rounded font-label-bold text-label-bold text-on-surface border border-outline-variant hover:bg-surface-variant transition-colors" type="button">
                      İptal
                  </button>
      {/* Primary Danger Button */}
      <button className="px-md py-xs rounded font-label-bold text-label-bold bg-error text-on-error hover:bg-on-error-container transition-colors" type="button">
                      Evet, Sil
                  </button>
      </div>
      </div>
    </>
  );
}
