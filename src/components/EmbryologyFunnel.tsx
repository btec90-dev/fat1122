import React, { useState } from 'react';
import { 
  Sparkles, 
  Microscope, 
  CheckCircle2, 
  Baby, 
  Award
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

export const EmbryologyFunnel: React.FC = () => {
  const { language, t } = useLanguage();
  const { embryologyFunnel } = getIvfData(language);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(3); // Default on 8 blastocysts

  return (
    <section id="lab" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#e3d3c7]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#f2e9e2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-2">
              <Microscope className="w-3.5 h-3.5 text-[#6b422d]" />
              {t('labBadge')}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2b170c] tracking-tight">
              {t('labTitle')}
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              {t('labSubtitle')}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#f2e9e2] border border-[#caa792] px-4 py-2 rounded-2xl shrink-0">
            <Award className="w-5 h-5 text-[#523120] shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-[#2b170c]">{t('labRemarkableYield')}</div>
              <div className="text-[#6b422d] font-semibold">
                {language === 'fr' ? '8 blastocystes vitrifiés ❄️' : '8 Vitrified Blastocysts ❄️'}
              </div>
            </div>
          </div>
        </div>

        {/* Funnel Visual Stack */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Step Bars */}
          <div className="lg:col-span-7 space-y-3.5">
            {embryologyFunnel.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              const widthPercents = ['100%', '88%', '76%', '65%', '54%'];
              const currentWidth = widthPercents[idx] || '60%';

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'border-[#6b422d] bg-[#fbf8f5] shadow-md ring-2 ring-[#caa792]/50'
                      : 'border-stone-200 hover:border-[#caa792] bg-white hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#2b170c] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-[#2b170c] text-xs sm:text-base">
                        {step.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 hidden sm:inline">
                        {step.badge}
                      </span>
                      <span className="text-base sm:text-lg font-black text-[#523120]">
                        {step.count}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar container in mocha/taupe */}
                  <div className="w-full bg-[#f2e9e2] h-2.5 sm:h-3 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#523120] to-[#8c634b] transition-all duration-700"
                      style={{ width: currentWidth }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-stone-500 mt-1.5 font-medium">
                    <span>{step.rate}</span>
                    <span className="text-[#6b422d] font-semibold">
                      {isSelected 
                        ? (language === 'fr' ? 'Détails actifs ci-contre' : 'Active details shown')
                        : (language === 'fr' ? 'Cliquer pour examiner' : 'Click to inspect')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Step Card in Deep Mocha Brown (NO GOLD) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#241308] via-[#351d10] to-[#1e0f06] text-[#f2e9e2] rounded-3xl p-5 sm:p-6 shadow-xl border border-[#523120] relative overflow-hidden">
            <div className="flex items-center gap-2 text-[#caa792] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#caa792]" />
              {language === 'fr' ? 'Étape' : 'Step'} #{selectedStepIndex + 1}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {embryologyFunnel[selectedStepIndex].label}
            </h3>

            <div className="my-4 p-4 rounded-2xl bg-[#1a0d05]/70 backdrop-blur-md border border-[#523120]">
              <div className="text-xs text-[#caa792]">
                {language === 'fr' ? 'Total / Statut au laboratoire :' : 'Lab Total / Yield:'}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 flex items-baseline gap-2">
                <span>{embryologyFunnel[selectedStepIndex].count}</span>
                <span className="text-xs font-normal text-[#caa792]">
                  ({embryologyFunnel[selectedStepIndex].rate})
                </span>
              </div>
            </div>

            <p className="text-[#caa792] text-xs sm:text-sm leading-relaxed">
              {embryologyFunnel[selectedStepIndex].description}
            </p>

            {/* Note specific to Gender Selection / PGT-A */}
            {selectedStepIndex === 4 || selectedStepIndex === 3 ? (
              <div className="mt-5 p-3.5 rounded-xl bg-[#3d2315] border border-[#6b422d] text-xs text-[#f2e9e2] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Baby className="w-4 h-4 text-[#caa792]" />
                  {language === 'fr' ? 'Directive de Sélection (Formulaire du 13 Oct.)' : 'Selection Directive (Oct 13 Form)'}
                </div>
                <p>
                  {language === 'fr'
                    ? "Fatou a formellement désigné sa préférence pour un Garçon (Male). Dès parution des rapports génétiques (23–28 oct.), le laboratoire désignera le blastocyste masculin euploïde le mieux classé pour l'implantation."
                    : "Fatou has formally submitted preference for a Boy (Male). Upon portal release of PGT-A reports (Oct 23–28), the embryology team will select the highest grade euploid male blastocyst for transfer."}
                </p>
              </div>
            ) : (
              <div className="mt-5 p-3.5 rounded-xl bg-[#1a0d05]/50 border border-[#523120] text-xs text-[#caa792] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'fr'
                    ? "Étape franchie avec succès sous l'expertise du laboratoire de RMA."
                    : "Milestone successfully completed under RMA laboratory expertise."}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
