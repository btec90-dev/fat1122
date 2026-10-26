import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { MilestoneCountdownTracker } from './components/MilestoneCountdownTracker';
import { ImmediateChecklist } from './components/ImmediateChecklist';
import { ClinicLocationCard } from './components/ClinicLocationCard';
import { EmbryologyFunnel } from './components/EmbryologyFunnel';
import { PhaseTimeline } from './components/PhaseTimeline';
import { MedicationTracker } from './components/MedicationTracker';
import { ProtocolCallPrep } from './components/ProtocolCallPrep';
import { PatientNotesVault } from './components/PatientNotesVault';
import { CalmBreathingModal } from './components/CalmBreathingModal';
import { PrintSummaryModal } from './components/PrintSummaryModal';
import { ShareUrlModal } from './components/ShareUrlModal';
import { getIvfData } from './data/ivfData';
import { 
  Baby, 
  ShieldCheck, 
  ArrowRight,
  Share2
} from 'lucide-react';

function AppContent() {
  const { language, t } = useLanguage();
  const { patientInfo } = getIvfData(language);

  const [activeSection, setActiveSection] = useState<string>('countdowns');
  const [isPrintOpen, setIsPrintOpen] = useState<boolean>(false);
  const [isCalmOpen, setIsCalmOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f4] text-[#2b170c] flex flex-col antialiased selection:bg-[#e6d3c0] selection:text-[#2b170c]">
      {/* Sticky Top Header & Responsive Navigation */}
      <Header
        onOpenPrint={() => setIsPrintOpen(true)}
        onOpenCalm={() => setIsCalmOpen(true)}
        onOpenShare={() => setIsShareOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-10">
        
        {/* Welcome Patient Hero Card in Warm Mocha & Taupe (NO GOLD) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#241308] via-[#3d2315] to-[#2b170c] text-white p-5 sm:p-8 shadow-xl border border-[#523120] relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-xs font-bold uppercase tracking-widest bg-[#523120]/70 text-[#caa792] px-3 py-1 rounded-full border border-[#6b422d] backdrop-blur-xs">
                  {t('welcomeHeroTag')}
                </span>
                <span className="text-xs font-semibold bg-[#6b422d] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  RMA of New York
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                {t('welcomeGreeting')}
              </h2>
              <p className="text-[#caa792] text-xs sm:text-base mt-2 leading-relaxed">
                {t('heroDescription')}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#e3d3c7]">
                <span className="bg-[#1a0d05]/80 border border-[#523120] px-3 py-1.5 rounded-xl backdrop-blur-xs">
                  {t('heroVitrified')}
                </span>
                <span className="bg-[#1a0d05]/80 border border-[#523120] px-3 py-1.5 rounded-xl backdrop-blur-xs">
                  {t('heroGender')}
                </span>
                <span className="bg-[#1a0d05]/80 border border-[#523120] px-3 py-1.5 rounded-xl backdrop-blur-xs">
                  {t('heroSis')}
                </span>
              </div>
            </div>

            {/* Quick stats mini panel in Mocha & Taupe */}
            <div className="bg-[#1a0d05]/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#523120] flex flex-col gap-2 shrink-0 lg:min-w-[240px]">
              <div className="text-[11px] text-[#caa792] uppercase tracking-wider font-bold">
                {t('heroTeamTitle')}
              </div>
              <div className="text-white font-extrabold text-sm sm:text-base">
                {patientInfo.medicalTeam}
              </div>
              <div className="text-xs text-[#caa792]">
                {patientInfo.clinicLocation} & Gramercy Surgery Center
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => navigateToSection('checklist')}
                  className="flex-1 text-xs font-bold bg-[#6b422d] hover:bg-[#8c634b] text-white px-3 py-2 rounded-xl text-center transition cursor-pointer shadow-xs flex items-center justify-center gap-1"
                >
                  <span>{t('heroImmediateActionBtn')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="text-xs font-bold bg-[#3d2315] hover:bg-[#523120] text-[#caa792] px-3 py-2 rounded-xl transition cursor-pointer shadow-xs flex items-center justify-center"
                  title={t('shareUrl')}
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Compte à Rebours Vivant vers Bébé (Live countdowns for all 13 steps all the way to birth) */}
        <MilestoneCountdownTracker />

        {/* 2. Liste de contrôle d'exécution immédiate */}
        <ImmediateChecklist onNavigateToSection={navigateToSection} />

        {/* 3. Rendez-vous du 15 Octobre (SIS & Hystéroscopie Gramercy Surgery Center) */}
        <ClinicLocationCard />

        {/* 4. L'Entonnoir Biologique & Rendement (42 ovocytes -> 8 blastos) */}
        <EmbryologyFunnel />

        {/* 5. Calendrier Complet des 4 Phases */}
        <PhaseTimeline />

        {/* 6. Maintien de la Médication Quotidienne (Nortrel & Estrogènes) */}
        <MedicationTracker />

        {/* 7. Préparateur de Questions Appel Équipe RMA */}
        <ProtocolCallPrep />

        {/* 8. Journal de Bord & Notes de Fatou */}
        <PatientNotesVault />

      </main>

      {/* Footer in Deep Mocha Brown */}
      <footer className="mt-16 bg-[#241308] border-t border-[#3d2315] text-[#caa792] py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#523120] border border-[#6b422d] flex items-center justify-center text-white font-bold shadow-xs">
              <Baby className="w-5 h-5 text-[#f2e9e2]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {language === 'fr' ? 'Protocole de FIV • Fatou' : 'IVF Protocol • Fatou'}
              </p>
              <p className="text-xs text-[#caa792]">
                RMA of New York • RMA East Side • Gramercy Surgery Center
              </p>
            </div>
          </div>

          <div className="text-xs text-[#caa792]/80 text-center sm:text-right">
            <p>{t('footerCopyright')}</p>
            <p className="mt-0.5">{t('footerDisclaimer')}</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CalmBreathingModal
        isOpen={isCalmOpen}
        onClose={() => setIsCalmOpen(false)}
      />

      <PrintSummaryModal
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
      />

      <ShareUrlModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
