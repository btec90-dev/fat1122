import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Baby, 
  Sparkles, 
  Hourglass, 
  Compass, 
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const MilestoneCountdownTracker: React.FC = () => {
  const { language, t } = useLanguage();
  const { countdownMilestones } = getIvfData(language);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('m-birth');
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateTimeRemaining = (targetDateStr: string): TimeRemaining => {
    const target = new Date(targetDateStr).getTime();
    const current = now.getTime();
    const difference = target - current;

    if (difference <= 0) {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
      isPast: false,
    };
  };

  const selectedMilestone = countdownMilestones.find(m => m.id === selectedMilestoneId) || countdownMilestones[countdownMilestones.length - 1];
  const birthMilestone = countdownMilestones.find(m => m.id === 'm-birth') || countdownMilestones[countdownMilestones.length - 1];
  const timeToSelected = calculateTimeRemaining(selectedMilestone.targetDate);
  const timeToBirth = calculateTimeRemaining(birthMilestone.targetDate);

  const totalJourneyDays = 290;
  const daysPassed = Math.max(0, Math.min(totalJourneyDays, totalJourneyDays - timeToBirth.days));
  const progressPercent = Math.min(100, Math.round((daysPassed / totalJourneyDays) * 100));

  return (
    <section id="countdowns" className="scroll-mt-24">
      {/* Container in Deep Mocha Brown & Sand (NO GOLD) */}
      <div className="bg-gradient-to-br from-[#241308] via-[#351d10] to-[#1e0f06] text-[#f2e9e2] rounded-3xl p-5 sm:p-8 shadow-xl border border-[#523120] relative overflow-hidden">
        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#523120]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#523120]/70 text-[#caa792] border border-[#6b422d] mb-2">
              <Hourglass className="w-3.5 h-3.5 text-[#e3d3c7]" />
              {t('countdownBadge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>{t('countdownTitle')}</span>
              <Baby className="w-6 h-6 text-[#caa792] shrink-0" />
            </h2>
            <p className="text-[#caa792] text-xs sm:text-sm mt-1 max-w-2xl">
              {t('countdownSubtitle')}
            </p>
          </div>

          {/* Baby Born Goal Badge in Mocha & Sand */}
          <div className="bg-[#241308]/90 border border-[#6b422d] rounded-2xl p-4 flex items-center gap-3.5 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6b422d] to-[#3d2315] text-[#f2e9e2] border border-[#8c634b]/40 flex items-center justify-center font-bold shadow-md shrink-0">
              <Baby className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#caa792] font-bold">
                {t('countdownUltimateGoal')}
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white">
                {t('countdownBabyBornTitle')} : ~{timeToBirth.days} {t('countdownDays').toLowerCase()}
              </div>
              <div className="text-[11px] text-[#b08d77]">
                {t('countdownEstimatedTerm')}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Big Spotlight Clock */}
        <div className="mt-6 bg-[#1a0d05]/70 border border-[#523120] rounded-3xl p-5 sm:p-7 relative backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#6b422d] text-white px-2.5 py-0.5 rounded-full">
                  {language === 'fr' ? 'Étape' : 'Milestone'} #{countdownMilestones.findIndex(m => m.id === selectedMilestone.id) + 1}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#3d2315] text-[#caa792] border border-[#523120]">
                  {selectedMilestone.stageName}
                </span>
                <span className="text-xs text-[#e3d3c7] font-medium">
                  {selectedMilestone.displayDate}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedMilestone.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#caa792] max-w-xl leading-relaxed">
                {selectedMilestone.description}
              </p>

              <div className="text-xs text-[#e3d3c7] flex items-center gap-1.5 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-[#caa792] shrink-0" />
                <span>{language === 'fr' ? 'Conseil :' : 'Advice:'} {selectedMilestone.advice}</span>
              </div>
            </div>

            {/* Live Ticking Digits Grid in Mocha & Sand */}
            <div className="shrink-0">
              <div className="text-center text-[11px] font-bold uppercase tracking-wider text-[#caa792] mb-2">
                {t('countdownEstimatedRemaining')}
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                {/* Days */}
                <div className="bg-[#2b170c] border border-[#523120] rounded-2xl p-2.5 sm:p-3 min-w-[62px] sm:min-w-[78px] shadow-md">
                  <div className="text-2xl sm:text-4xl font-black text-white font-mono">
                    {timeToSelected.days}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#caa792] uppercase font-semibold mt-0.5">
                    {t('countdownDays')}
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#2b170c] border border-[#523120] rounded-2xl p-2.5 sm:p-3 min-w-[62px] sm:min-w-[78px] shadow-md">
                  <div className="text-2xl sm:text-4xl font-black text-white font-mono">
                    {String(timeToSelected.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#caa792] uppercase font-semibold mt-0.5">
                    {t('countdownHours')}
                  </div>
                </div>

                {/* Minutes */}
                <div className="bg-[#2b170c] border border-[#523120] rounded-2xl p-2.5 sm:p-3 min-w-[62px] sm:min-w-[78px] shadow-md">
                  <div className="text-2xl sm:text-4xl font-black text-white font-mono">
                    {String(timeToSelected.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#caa792] uppercase font-semibold mt-0.5">
                    {t('countdownMinutes')}
                  </div>
                </div>

                {/* Seconds */}
                <div className="bg-[#2b170c] border border-[#523120] rounded-2xl p-2.5 sm:p-3 min-w-[62px] sm:min-w-[78px] shadow-md">
                  <div className="text-2xl sm:text-4xl font-black text-[#e3d3c7] font-mono animate-pulse">
                    {String(timeToSelected.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#caa792] uppercase font-semibold mt-0.5">
                    {t('countdownSeconds')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Progress towards Birth */}
        <div className="mt-6 bg-[#1a0d05]/60 p-4 rounded-2xl border border-[#523120]">
          <div className="flex justify-between items-center text-xs text-[#caa792] mb-2 font-medium">
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#e3d3c7]" />
              {t('countdownOverallProgress')}
            </span>
            <span className="font-bold text-white">{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#2b170c] h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#6b422d] via-[#8c634b] to-[#caa792] h-2.5 rounded-full transition-all duration-700 ease-out shadow-xs"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[11px] text-[#caa792] mt-1.5">
            <span>{language === 'fr' ? 'Ponction (42 ovocytes)' : 'Retrieval (42 eggs)'}</span>
            <span>{language === 'fr' ? 'Hystéro & PGT-A' : 'SIS & PGT-A'}</span>
            <span>{language === 'fr' ? 'Transfert FET' : 'FET Transfer'}</span>
            <span>{language === 'fr' ? 'Échos T1/T2' : 'T1/T2 Scans'}</span>
            <span className="text-white font-bold">{language === 'fr' ? 'Arrivée de Bébé 🎉' : 'Baby Born 🎉'}</span>
          </div>
        </div>

        {/* 13 Milestones Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#caa792]" />
              {t('countdownStepSelect')}
            </h4>
            <span className="text-xs text-[#caa792] hidden sm:inline">
              {language === 'fr' ? '13 étapes séquencées' : '13 sequenced milestones'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {countdownMilestones.map((milestone, idx) => {
              const isSelected = selectedMilestoneId === milestone.id;
              const remaining = calculateTimeRemaining(milestone.targetDate);

              return (
                <div
                  key={milestone.id}
                  onClick={() => setSelectedMilestoneId(milestone.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative ${
                    isSelected
                      ? 'bg-[#3d2315] border-[#8c634b] shadow-md ring-2 ring-[#8c634b]/40'
                      : 'bg-[#1a0d05]/60 border-[#523120] hover:border-[#6b422d] hover:bg-[#241308]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-[#caa792] uppercase tracking-wider">
                      {language === 'fr' ? 'Étape' : 'Step'} #{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      milestone.category === 'birth'
                        ? 'bg-[#8c634b] text-white'
                        : isSelected
                          ? 'bg-[#523120] text-[#f2e9e2] border border-[#6b422d]'
                          : 'bg-[#2b170c] text-[#caa792]'
                    }`}>
                      {milestone.badge}
                    </span>
                  </div>

                  <h5 className="font-bold text-white text-sm leading-snug line-clamp-1">
                    {milestone.title}
                  </h5>

                  <div className="text-xs text-[#caa792] mt-0.5 font-medium">
                    {milestone.displayDate}
                  </div>

                  {/* Countdown readout */}
                  <div className="mt-3 pt-2.5 border-t border-[#3d2315] flex items-center justify-between">
                    <span className="text-xs text-[#e3d3c7] font-mono font-bold">
                      {remaining.days > 0 ? (
                        <span>{t('countdownIn')} {remaining.days}d {remaining.hours}h</span>
                      ) : (
                        <span>{t('countdownToday')}</span>
                      )}
                    </span>

                    <span className={`text-[11px] font-medium flex items-center gap-1 ${
                      isSelected ? 'text-[#e3d3c7] font-bold' : 'text-[#caa792]'
                    }`}>
                      {isSelected ? t('countdownActive') : t('countdownSelectAction')}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
