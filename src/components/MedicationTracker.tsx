import React, { useState } from 'react';
import { 
  Pill, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Archive, 
  Check
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

export const MedicationTracker: React.FC = () => {
  const { language, t } = useLanguage();
  const { medications } = getIvfData(language);

  const [loggedToday, setLoggedToday] = useState<boolean>(() => {
    try {
      const todayKey = `nortrel_log_${new Date().toISOString().split('T')[0]}`;
      return localStorage.getItem(todayKey) === 'true';
    } catch {
      return false;
    }
  });

  const [logHistory, setLogHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nortrel_history');
      if (saved) return JSON.parse(saved);
    } catch {
      // default
    }
    return [
      language === 'fr' ? '11 oct. (Reprise post-bilan)' : 'Oct 11 (Resumed post-scan)', 
      '12 oct.', 
      '13 oct.', 
      '14 oct.'
    ];
  });

  const handleLogToday = () => {
    const today = new Date();
    const formatted = today.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short' });
    const todayKey = `nortrel_log_${today.toISOString().split('T')[0]}`;
    
    if (!loggedToday) {
      localStorage.setItem(todayKey, 'true');
      const updated = [formatted + (language === 'fr' ? ' à ' : ' at ') + today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), ...logHistory];
      setLogHistory(updated);
      localStorage.setItem('nortrel_history', JSON.stringify(updated));
      setLoggedToday(true);
    } else {
      localStorage.removeItem(todayKey);
      setLoggedToday(false);
    }
  };

  const activeMed = medications.find(m => m.currentStatus === 'active') || medications[0];
  const upcomingMeds = medications.filter(m => m.currentStatus === 'upcoming');
  const archivedMeds = medications.filter(m => m.currentStatus === 'archived');

  return (
    <section id="meds" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#e3d3c7]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#f2e9e2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-2">
              <Pill className="w-3.5 h-3.5 text-[#6b422d]" />
              {t('medsBadge')}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2b170c] tracking-tight">
              {t('medsTitle')}
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              {t('medsSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1.5 rounded-xl bg-[#fbf8f5] text-[#2b170c] font-medium flex items-center gap-1.5 border border-[#e3d3c7]">
              <Clock className="w-4 h-4 text-[#6b422d]" />
              {language === 'fr' ? 'Heure conseillée : ' : 'Recommended: '}<strong>21h00 / 9:00 PM</strong>
            </span>
          </div>
        </div>

        {/* Active Daily Medication in Mocha / Taupe */}
        <div className="mt-6 bg-[#fbf8f5] border border-[#e3d3c7] rounded-3xl p-5 sm:p-6 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2b170c] text-white flex items-center justify-center shrink-0 shadow-md">
                <Pill className="w-6 h-6 text-[#f2e9e2]" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#6b422d] px-2.5 py-0.5 rounded-full">
                    {language === 'fr' ? 'Traitement Quotidien Actif' : 'Active Daily Medication'}
                  </span>
                  <span className="text-xs font-semibold text-stone-500">
                    {language === 'fr' ? 'Repris le 11 oct.' : 'Resumed on Oct 11'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#2b170c] mt-1">
                  {activeMed.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {language === 'fr' ? 'Posologie :' : 'Dosage:'} <strong>{activeMed.dosage}</strong> • {language === 'fr' ? 'Horaire :' : 'Timing:'} <strong>{activeMed.timing}</strong>
                </p>
              </div>
            </div>

            {/* Check-in Log Button in Mocha */}
            <div className="w-full md:w-auto">
              <button
                onClick={handleLogToday}
                className={`w-full md:w-auto px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition cursor-pointer shadow-sm ${
                  loggedToday
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                    : 'bg-[#2b170c] hover:bg-[#3d2315] text-[#f2e9e2] shadow-xs'
                }`}
              >
                {loggedToday ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>{t('doseValidated')}</span>
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    <span>{t('validateDoseBtn')}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#e3d3c7] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
            <div>
              <span className="font-bold text-[#2b170c]">{language === 'fr' ? 'Rôle clinique : ' : 'Clinical Purpose: '}</span>
              <span>{activeMed.purpose}</span>
            </div>
            <div>
              <span className="font-bold text-[#2b170c]">{language === 'fr' ? "Consignes de l'équipe médicale : " : 'Clinical Instructions: '}</span>
              <span>{activeMed.instructions}</span>
            </div>
          </div>

          {/* Recent Log History */}
          <div className="mt-4 pt-3 border-t border-[#e3d3c7] flex items-center gap-2 flex-wrap text-xs text-stone-600">
            <span className="font-semibold text-[#2b170c]">
              {language === 'fr' ? 'Historique récent :' : 'Recent History:'}
            </span>
            {logHistory.slice(0, 4).map((entry, idx) => (
              <span key={idx} className="bg-white px-2 py-0.5 rounded-md border border-[#e3d3c7] font-medium text-[#523120]">
                ✅ {entry}
              </span>
            ))}
          </div>
        </div>

        {/* Upcoming Medications */}
        <div className="mt-8">
          <h4 className="text-base font-bold text-[#2b170c] flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#6b422d]" />
            {t('upcomingMeds')}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingMeds.map((med) => (
              <div key={med.id} className="p-4 sm:p-5 rounded-2xl border border-[#e3d3c7] bg-[#fbf8f5] hover:bg-white hover:border-[#caa792] transition">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#3d2315] bg-[#f2e9e2] px-2.5 py-0.5 rounded-full">
                    {med.timing}
                  </span>
                  <span className="text-xs font-semibold text-stone-400">
                    {language === 'fr' ? 'À venir' : 'Upcoming'}
                  </span>
                </div>
                <h5 className="font-bold text-[#2b170c] text-sm sm:text-base">{med.name}</h5>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  <strong>{language === 'fr' ? 'Objectif :' : 'Goal:'}</strong> {med.purpose}
                </p>
                <div className="mt-3 text-xs text-stone-600 bg-white p-2.5 rounded-xl border border-[#e3d3c7]">
                  {med.instructions}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Medications */}
        <div className="mt-8 pt-6 border-t border-[#f2e9e2]">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-semibold text-stone-500 hover:text-stone-800">
              <span className="flex items-center gap-2">
                <Archive className="w-4 h-4 text-stone-400" />
                {language === 'fr' 
                  ? 'Voir les traitements terminés de la Phase 1 (Gonal-F, Menopur, Cetrotide)'
                  : 'View completed Phase 1 medications (Gonal-F, Menopur, Cetrotide)'}
              </span>
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {archivedMeds.map(m => (
                <div key={m.id} className="p-3.5 rounded-xl bg-stone-100/70 border border-stone-200 text-xs">
                  <div className="font-bold text-stone-700">{m.name}</div>
                  <div className="text-stone-500 mt-0.5">{m.dosage}</div>
                  <div className="text-emerald-700 font-bold mt-1">
                    {language === 'fr' ? 'Effectué avec succès ✅' : 'Successfully completed ✅'}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
