import React, { useState } from 'react';
import { 
  Baby, 
  Sparkles, 
  Printer, 
  Hourglass, 
  CheckCircle2, 
  Menu, 
  X,
  Globe,
  Share2
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

interface HeaderProps {
  onOpenPrint: () => void;
  onOpenCalm: () => void;
  onOpenShare: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenPrint, 
  onOpenCalm,
  onOpenShare,
  activeSection, 
  setActiveSection 
}) => {
  const { language, setLanguage, toggleLanguage, t } = useLanguage();
  const { patientInfo } = getIvfData(language);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'countdowns', label: t('navCountdowns') },
    { id: 'checklist', label: t('navChecklist') },
    { id: 'appointment', label: t('navAppointment') },
    { id: 'lab', label: t('navLab') },
    { id: 'timeline', label: t('navTimeline') },
    { id: 'meds', label: t('navMeds') },
    { id: 'doctor-call', label: t('navDoctorCall') },
    { id: 'journal', label: t('navJournal') }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#2b170c]/95 backdrop-blur-md border-b border-[#523120] text-stone-100 shadow-md">
      {/* Top Status Banner in Warm Mocha & Taupe (NO GOLD) */}
      <div className="bg-[#3d2315] text-[#f2e9e2] text-xs sm:text-sm py-1.5 px-3 sm:px-4 font-medium border-b border-[#523120]/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide text-xs sm:text-sm">
              {t('currentStatusTag')}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switcher Button (FR / EN) */}
            <div className="inline-flex items-center rounded-lg bg-[#2b170c] p-0.5 border border-[#523120]">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                  language === 'fr' 
                    ? 'bg-[#6b422d] text-white shadow-xs' 
                    : 'text-[#caa792] hover:text-white'
                }`}
                title="Passer en Français"
              >
                FR 🇫🇷
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                  language === 'en' 
                    ? 'bg-[#6b422d] text-white shadow-xs' 
                    : 'text-[#caa792] hover:text-white'
                }`}
                title="Switch to English"
              >
                EN 🇺🇸
              </button>
            </div>

            {/* Share URL Button */}
            <button 
              onClick={onOpenShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#523120]/60 hover:bg-[#6b422d] text-white text-xs font-semibold transition cursor-pointer"
              title={language === 'fr' ? "Partager l'URL du portail" : "Share Portal URL"}
            >
              <Share2 className="w-3.5 h-3.5 text-[#caa792]" />
              <span className="hidden sm:inline">{t('shareUrl')}</span>
            </button>

            {/* Serenity Button */}
            <button 
              onClick={onOpenCalm}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#523120]/60 hover:bg-[#6b422d] text-white text-xs font-semibold transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span className="hidden xs:inline">{t('serenitySpace')}</span>
            </button>

            {/* Print Button */}
            <button 
              onClick={onOpenPrint}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#523120]/60 hover:bg-[#6b422d] text-white text-xs font-semibold transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">{t('printSheet')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Patient Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#6b422d] to-[#3d2315] border border-[#8c634b]/40 flex items-center justify-center text-white shadow-md shrink-0">
              <Baby className="w-6 h-6 text-[#f2e9e2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {t('appTitle')}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#3d2315] text-[#caa792] border border-[#523120]">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {t('clinicBadge')}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#3d2315] text-[#f2e9e2] border border-[#523120]">
                  {t('preferredBoy')}
                </span>
              </div>
              <p className="text-xs text-[#caa792] flex items-center gap-2 mt-0.5">
                <span>{patientInfo.medicalTeam}</span>
                <span>•</span>
                <span>{patientInfo.clinicLocation}</span>
                <span>•</span>
                <span>Gramercy Surgery Center</span>
              </p>
            </div>
          </div>

          {/* Desktop Shortcut Indicator */}
          <div className="hidden lg:flex items-center gap-2.5 bg-[#3d2315]/80 border border-[#523120] rounded-xl px-3.5 py-1.5 text-xs text-[#f2e9e2]">
            <Hourglass className="w-4 h-4 text-[#caa792] shrink-0" />
            <div>
              <span className="font-bold text-white block">
                {language === 'fr' ? 'Prochaines étapes :' : 'Upcoming Milestones:'}
              </span>
              <span className="text-[#caa792]">15 Oct (Hystéro/SIS) • 23–28 Oct (PGT-A)</span>
            </div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#f2e9e2] hover:text-white rounded-xl hover:bg-[#3d2315] transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation Tabs in Mocha & Taupe */}
        <nav className="hidden md:flex items-center gap-1.5 mt-2.5 pt-2 border-t border-[#523120]/70 overflow-x-auto no-scrollbar text-xs font-semibold">
          {navItems.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleNavClick(tab.id)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition cursor-pointer ${
                activeSection === tab.id
                  ? 'bg-[#6b422d] text-white font-bold shadow-xs'
                  : 'text-[#caa792] hover:text-white hover:bg-[#3d2315]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e1008] border-t border-[#523120] px-4 py-3 space-y-1.5 animate-in slide-in-from-top-2">
          {/* Mobile Language Switcher Row */}
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-[#3d2315] text-xs">
            <span className="text-stone-400 font-medium">
              {language === 'fr' ? "Langue / Language :" : "Language / Langue :"}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 rounded text-xs font-bold ${
                  language === 'fr' ? 'bg-[#6b422d] text-white' : 'bg-[#2b170c] text-stone-400'
                }`}
              >
                FR 🇫🇷
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded text-xs font-bold ${
                  language === 'en' ? 'bg-[#6b422d] text-white' : 'bg-[#2b170c] text-stone-400'
                }`}
              >
                EN 🇺🇸
              </button>
            </div>
          </div>

          {navItems.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleNavClick(tab.id)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                activeSection === tab.id
                  ? 'bg-[#6b422d] text-white'
                  : 'text-[#caa792] hover:bg-[#2b170c]'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] text-stone-400">→</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
