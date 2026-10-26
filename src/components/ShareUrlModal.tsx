import React, { useState } from 'react';
import { X, Copy, Check, Globe, Share2, ExternalLink, QrCode, Smartphone, Laptop } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ShareUrlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareUrlModal: React.FC<ShareUrlModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [copiedFr, setCopiedFr] = useState(false);
  const [copiedEn, setCopiedEn] = useState(false);

  if (!isOpen) return null;

  const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://ais-dev-fkwyxkx6asuqayg44vvu6g-462628439757.us-east1.run.app';
  const urlFr = `${baseUrl}?lang=fr`;
  const urlEn = `${baseUrl}?lang=en`;

  const copyToClipboard = (text: string, type: 'fr' | 'en') => {
    navigator.clipboard.writeText(text);
    if (type === 'fr') {
      setCopiedFr(true);
      setTimeout(() => setCopiedFr(false), 2500);
    } else {
      setCopiedEn(true);
      setTimeout(() => setCopiedEn(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in no-print">
      <div className="bg-[#fcfbf9] text-[#2b170c] rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-[#cca885] relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-3">
          <Globe className="w-3.5 h-3.5 text-[#6b422d]" />
          {language === 'fr' ? "URL Web & Accès Partagé" : "Web URL & Shared Access"}
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-[#2b170c]">
          {language === 'fr' ? "Lien d'accès au portail de Fatou" : "Fatou's Portal Access Link"}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
          {language === 'fr' 
            ? "Accédez à ce site web depuis votre smartphone, tablette ou ordinateur. Le lien est disponible directement en français ou en anglais."
            : "Access this web application from your smartphone, tablet, or desktop. Links are available in French or English."}
        </p>

        {/* URLs Box */}
        <div className="mt-5 space-y-3.5">
          {/* French Link */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#e3d3c7] shadow-2xs">
            <div className="flex justify-between items-center mb-1 text-xs">
              <span className="font-bold text-[#523120] flex items-center gap-1.5">
                <span>🇫🇷</span>
                <span>{language === 'fr' ? "Lien Version Française (URL)" : "French Version Link (URL)"}</span>
              </span>
              <span className="text-[11px] text-stone-400">?lang=fr</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="text"
                readOnly
                value={urlFr}
                className="flex-1 bg-stone-50 text-[11px] sm:text-xs px-2.5 py-2 rounded-xl border border-stone-200 text-stone-700 font-mono focus:outline-hidden"
              />
              <button
                onClick={() => copyToClipboard(urlFr, 'fr')}
                className="px-3.5 py-2 rounded-xl bg-[#2b170c] hover:bg-[#3d2315] text-[#f2e9e2] text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                {copiedFr ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedFr ? (language === 'fr' ? 'Copié !' : 'Copied!') : (language === 'fr' ? 'Copier' : 'Copy')}</span>
              </button>
            </div>
          </div>

          {/* English Link */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#e3d3c7] shadow-2xs">
            <div className="flex justify-between items-center mb-1 text-xs">
              <span className="font-bold text-[#523120] flex items-center gap-1.5">
                <span>🇺🇸</span>
                <span>{language === 'fr' ? "Lien Version Anglaise (URL)" : "English Version Link (URL)"}</span>
              </span>
              <span className="text-[11px] text-stone-400">?lang=en</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="text"
                readOnly
                value={urlEn}
                className="flex-1 bg-stone-50 text-[11px] sm:text-xs px-2.5 py-2 rounded-xl border border-stone-200 text-stone-700 font-mono focus:outline-hidden"
              />
              <button
                onClick={() => copyToClipboard(urlEn, 'en')}
                className="px-3.5 py-2 rounded-xl bg-[#2b170c] hover:bg-[#3d2315] text-[#f2e9e2] text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                {copiedEn ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEn ? (language === 'fr' ? 'Copié !' : 'Copied!') : (language === 'fr' ? 'Copier' : 'Copy')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Device compatibility badge */}
        <div className="mt-5 p-3 rounded-2xl bg-[#f2e9e2]/80 border border-[#e3d3c7] flex items-center justify-between text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#6b422d]" />
            <Laptop className="w-4 h-4 text-[#6b422d]" />
            <span className="font-medium">
              {language === 'fr' ? "Format HTML5 réactif (iPhone, Android, Mac, PC)" : "Responsive HTML5 (iPhone, Android, Mac, PC)"}
            </span>
          </div>
          <span className="font-bold text-[#523120]">SSL Sécurisé</span>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-xl bg-[#2b170c] hover:bg-[#3d2315] text-white text-xs sm:text-sm font-bold transition cursor-pointer"
        >
          {language === 'fr' ? "Fermer" : "Close"}
        </button>
      </div>
    </div>
  );
};
