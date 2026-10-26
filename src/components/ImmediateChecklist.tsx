import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  MapPin, 
  PhoneCall, 
  Pill, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Info,
  ShieldCheck,
  Dna
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

interface ImmediateChecklistProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const ImmediateChecklist: React.FC<ImmediateChecklistProps> = ({ onNavigateToSection }) => {
  const { language, t } = useLanguage();
  const { immediateActions } = getIvfData(language);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ivf_fatou_checklist_status');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      'thaw-plan': true,
      'medication-nortrel': true,
      'appointment-sis-hysteroscopy': false,
      'pgta-results-window': false,
      'protocol-call-prep': false,
    };
  });

  const [expandedItem, setExpandedItem] = useState<string | null>('appointment-sis-hysteroscopy');

  useEffect(() => {
    localStorage.setItem('ivf_fatou_checklist_status', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = immediateActions.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const getStatusBadge = (item: typeof immediateActions[0], isChecked: boolean) => {
    if (isChecked) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#3d2315] border border-[#caa792]">
          <Check className="w-3.5 h-3.5 text-emerald-600" /> {t('checklistCompleted')}
        </span>
      );
    }
    if (item.status === 'urgent') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#6b422d] text-white shadow-xs">
          <Clock className="w-3.5 h-3.5 text-[#f2e9e2]" /> {t('checklistUrgent')}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
        <Clock className="w-3.5 h-3.5" /> {t('checklistUpcoming')}
      </span>
    );
  };

  return (
    <section id="checklist" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#e3d3c7] relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#f2e9e2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#6b422d]" />
              {t('checklistBadge')}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2b170c] tracking-tight">
              {t('checklistTitle')}
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              {t('checklistSubtitle')}
            </p>
          </div>

          {/* Progress bar pill in Mocha/Taupe */}
          <div className="bg-[#fbf8f5] border border-[#e3d3c7] rounded-2xl p-4 min-w-[240px]">
            <div className="flex justify-between items-center text-xs font-medium text-stone-600 mb-1.5">
              <span>{t('checklistProgress')}</span>
              <span className="font-bold text-[#2b170c]">{completedCount} / {totalCount} {t('checklistValidated')} ({progressPercent}%)</span>
            </div>
            <div className="w-full bg-[#f2e9e2] h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#6b422d] to-[#8c634b] h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="text-[11px] text-stone-400 mt-1 flex items-center justify-between">
              <span>{t('checklistTip')}</span>
            </div>
          </div>
        </div>

        {/* Action Items List */}
        <div className="mt-6 space-y-4">
          {immediateActions.map((item, index) => {
            const isChecked = !!checkedItems[item.id];
            const isExpanded = expandedItem === item.id;

            return (
              <div 
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isChecked 
                    ? 'bg-[#fbf8f5]/60 border-stone-200' 
                    : item.status === 'urgent'
                      ? 'bg-white border-[#8c634b] shadow-sm ring-1 ring-[#caa792]/40'
                      : 'bg-white border-[#e3d3c7] hover:border-[#caa792]'
                }`}
              >
                {/* Header row */}
                <div 
                  onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                  className="p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 cursor-pointer select-none"
                >
                  {/* Custom Checkbox in Mocha Theme */}
                  <button
                    type="button"
                    onClick={(e) => toggleCheck(item.id, e)}
                    className={`shrink-0 w-7 h-7 mt-0.5 rounded-xl border flex items-center justify-center transition cursor-pointer ${
                      isChecked
                        ? 'bg-[#523120] border-[#3d2315] text-white shadow-xs'
                        : 'border-[#caa792] bg-white hover:border-[#6b422d] text-transparent'
                    }`}
                  >
                    <Check className={`w-4 h-4 stroke-[3] ${isChecked ? 'block' : 'opacity-0'}`} />
                  </button>

                  {/* Main Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-[#6b422d]">#{index + 1}</span>
                        <h3 className={`text-sm sm:text-lg font-bold tracking-tight ${
                          isChecked ? 'line-through text-stone-400' : 'text-[#2b170c]'
                        }`}>
                          {item.title}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-[#f2e9e2] text-[#523120]">
                          {item.dateText}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {getStatusBadge(item, isChecked)}
                        <span className="text-stone-400">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </span>
                      </div>
                    </div>

                    <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                      isChecked ? 'text-stone-400' : 'text-stone-700'
                    }`}>
                      {item.description}
                    </p>

                    {item.highlight && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#f2e9e2] text-[#3d2315] border border-[#e3d3c7]">
                        <Sparkles className="w-3.5 h-3.5 text-[#6b422d] shrink-0" />
                        <span>{item.highlight}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[#f2e9e2] bg-[#fbf8f5] rounded-b-2xl">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#523120] mb-2 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#6b422d]" />
                      {t('checklistDetailsHeader')}
                    </div>
                    
                    <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 mb-4">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8c634b] mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Quick Action Shortcuts */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {item.id === 'appointment-sis-hysteroscopy' && (
                        <button
                          onClick={() => onNavigateToSection('appointment')}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#2b170c] text-[#f2e9e2] hover:bg-[#3d2315] transition cursor-pointer shadow-xs"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#caa792]" />
                          {language === 'fr' ? 'Consignes Gramercy & Itinéraire' : 'Gramercy Prep & Directions'}
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}

                      {item.id === 'medication-nortrel' && (
                        <button
                          onClick={() => onNavigateToSection('meds')}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#2b170c] text-[#f2e9e2] hover:bg-[#3d2315] transition cursor-pointer shadow-xs"
                        >
                          <Pill className="w-3.5 h-3.5 text-[#caa792]" />
                          {language === 'fr' ? 'Enregistrer la prise du jour' : "Log Today's Dose"}
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}

                      {item.id === 'protocol-call-prep' && (
                        <button
                          onClick={() => onNavigateToSection('doctor-call')}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#2b170c] text-[#f2e9e2] hover:bg-[#3d2315] transition cursor-pointer shadow-xs"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-[#caa792]" />
                          {language === 'fr' ? "Questions de l'appel médical" : 'Doctor Call Questions'}
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}

                      {item.id === 'thaw-plan' && (
                        <span className="text-xs text-[#3d2315] bg-[#f2e9e2] px-2.5 py-1 rounded-md border border-[#caa792] flex items-center gap-1 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 
                          {language === 'fr' ? 'Formulaire validé (Garçon sélectionné)' : 'Form Confirmed (Boy Selected)'}
                        </span>
                      )}

                      {item.id === 'pgta-results-window' && (
                        <div className="text-xs text-[#2b170c] bg-[#f2e9e2] px-3 py-1 rounded-md border border-[#caa792] flex items-center gap-1.5 font-semibold">
                          <Dna className="w-3.5 h-3.5 text-[#6b422d]" />
                          {language === 'fr' ? 'Fenêtre : 23 au 28 octobre (8 blastos)' : 'Window: Oct 23 to 28 (8 blastocysts)'}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-6 p-4 rounded-2xl bg-[#f2e9e2]/80 border border-[#e3d3c7] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#6b422d] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#2b170c] leading-relaxed">
            {t('checklistFootnote')}
          </div>
        </div>
      </div>
    </section>
  );
};
