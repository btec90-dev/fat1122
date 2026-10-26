import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Search, 
  Filter, 
  Pill, 
  Sparkles, 
  Stethoscope, 
  Dna, 
  Building2, 
  Heart, 
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

export const PhaseTimeline: React.FC = () => {
  const { language, t } = useLanguage();
  const { phasesData, timelineEvents } = getIvfData(language);

  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedEventId, setExpandedEventId] = useState<string | null>('p2-6');

  const filteredEvents = useMemo(() => {
    return timelineEvents.filter(event => {
      if (selectedPhase !== 'all' && event.phaseId !== selectedPhase) {
        return false;
      }
      if (selectedCategory !== 'all' && event.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = event.title.toLowerCase().includes(q);
        const matchesSummary = event.summary.toLowerCase().includes(q);
        const matchesDate = event.date.toLowerCase().includes(q);
        const matchesLocation = event.location?.toLowerCase().includes(q) || false;
        if (!matchesTitle && !matchesSummary && !matchesDate && !matchesLocation) {
          return false;
        }
      }
      return true;
    });
  }, [selectedPhase, selectedCategory, searchQuery, timelineEvents]);

  const renderIcon = (category: string) => {
    switch (category) {
      case 'medication':
        return <Pill className="w-4 h-4 text-[#6b422d]" />;
      case 'appointment':
        return <Stethoscope className="w-4 h-4 text-[#523120]" />;
      case 'surgery':
        return <Building2 className="w-4 h-4 text-[#2b170c]" />;
      case 'lab':
        return <Dna className="w-4 h-4 text-[#8c634b]" />;
      case 'pregnancy':
        return <Heart className="w-4 h-4 text-[#8c634b]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#6b422d]" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'medication': return 'bg-[#f2e9e2] text-[#3d2315] border-[#caa792]';
      case 'appointment': return 'bg-[#f5ece3] text-[#2b170c] border-[#e3d3c7]';
      case 'surgery': return 'bg-[#2b170c] text-white border-[#3d2315]';
      case 'lab': return 'bg-stone-100 text-stone-800 border-stone-300';
      case 'pregnancy': return 'bg-[#f2e9e2] text-[#523120] border-[#caa792]';
      default: return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    if (language === 'en') {
      switch (category) {
        case 'medication': return 'Medication';
        case 'appointment': return 'Visit / Ultrasound';
        case 'surgery': return 'Procedure / Transfer';
        case 'lab': return 'Lab / Genetics';
        case 'pregnancy': return 'Obstetrics';
        default: return 'Milestone';
      }
    }
    switch (category) {
      case 'medication': return 'Médication';
      case 'appointment': return 'Visite / Écho';
      case 'surgery': return 'Chirurgie / Transfert';
      case 'lab': return 'Laboratoire / Génétique';
      case 'pregnancy': return 'Obstétrique';
      default: return 'Étape';
    }
  };

  return (
    <section id="timeline" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#e3d3c7]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#f2e9e2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#6b422d]" />
              {t('phasesBadge')}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2b170c] tracking-tight">
              {t('phasesTitle')}
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              {t('phasesSubtitle')}
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 bg-[#fbf8f5] border border-[#e3d3c7] rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#8c634b] focus:bg-white transition"
            />
          </div>
        </div>

        {/* 4 Phase Summary Cards Grid in Mocha & Sand */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-6">
          {phasesData.map((phase) => {
            const isCurrent = phase.status === 'active';
            const isCompleted = phase.status === 'completed';
            const isSelected = selectedPhase === phase.id;

            return (
              <div
                key={phase.id}
                onClick={() => setSelectedPhase(selectedPhase === phase.id ? 'all' : phase.id)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative ${
                  isSelected
                    ? 'ring-2 ring-[#6b422d] border-[#523120] bg-[#fbf8f5] shadow-sm'
                    : isCurrent
                      ? 'border-[#8c634b] bg-[#fbf8f5] shadow-xs'
                      : isCompleted
                        ? 'border-stone-200 bg-stone-50/60'
                        : 'border-stone-200 bg-stone-50/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                    Phase {phase.id}
                  </span>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#6b422d] text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {language === 'fr' ? 'Active' : 'Active'}
                    </span>
                  )}
                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#f2e9e2] text-[#3d2315] border border-[#caa792]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {language === 'fr' ? 'Terminée' : 'Completed'}
                    </span>
                  )}
                  {!isCurrent && !isCompleted && (
                    <span className="text-[11px] font-medium text-stone-400">
                      {language === 'fr' ? 'À venir' : 'Upcoming'}
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-[#2b170c] text-sm leading-snug line-clamp-1">
                  {phase.title.split(':')[1]?.trim() || phase.title}
                </h4>

                <div className="text-xs text-stone-500 mt-1 font-medium">
                  {phase.dateRange}
                </div>

                {/* Progress Mini Bar */}
                <div className="mt-3 w-full bg-[#f2e9e2] h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      isCompleted ? 'bg-[#523120]' : isCurrent ? 'bg-[#8c634b]' : 'bg-stone-300'
                    }`}
                    style={{ width: `${phase.progressPercent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 pb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-stone-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#6b422d]" /> {language === 'fr' ? 'Filtrer :' : 'Filter:'}
            </span>
            {[
              { id: 'all', label: t('filterAllPhases') },
              { id: 1, label: t('filterPhase1') },
              { id: 2, label: t('filterPhase2') },
              { id: 3, label: t('filterPhase3') },
              { id: 4, label: t('filterPhase4') }
            ].map(tab => (
              <button
                key={String(tab.id)}
                onClick={() => setSelectedPhase(tab.id as any)}
                className={`text-xs px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                  selectedPhase === tab.id
                    ? 'bg-[#2b170c] text-white font-bold shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: language === 'fr' ? 'Tous types' : 'All Types' },
              { id: 'medication', label: language === 'fr' ? '💊 Médication' : '💊 Meds' },
              { id: 'appointment', label: language === 'fr' ? '🩺 Visites' : '🩺 Visits' },
              { id: 'lab', label: language === 'fr' ? '🧬 Labo' : '🧬 Lab' },
              { id: 'surgery', label: language === 'fr' ? '🏥 Interventions' : '🏥 Procedures' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'border-[#6b422d] bg-[#f2e9e2] text-[#2b170c] font-bold'
                    : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Events List */}
        <div className="mt-4 space-y-3">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 text-stone-400 text-sm">
              {language === 'fr' ? 'Aucun événement ne correspond à vos critères.' : 'No events match your search criteria.'}
            </div>
          ) : (
            filteredEvents.map((event) => {
              const isExpanded = expandedEventId === event.id;

              return (
                <div
                  key={event.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    event.phaseId === 2 && !event.completed
                      ? 'border-[#8c634b] bg-white shadow-xs ring-1 ring-[#caa792]/30'
                      : event.completed
                        ? 'border-stone-200 bg-stone-50/40'
                        : 'border-stone-200 bg-white'
                  }`}
                >
                  <div
                    onClick={() => setExpandedEventId(isExpanded ? null : event.id)}
                    className="p-3.5 sm:p-5 flex items-start gap-3 sm:gap-4 cursor-pointer select-none"
                  >
                    <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f2e9e2] border border-[#e3d3c7] flex items-center justify-center shadow-2xs mt-0.5">
                      {event.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        renderIcon(event.category)
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <span className="font-extrabold text-xs sm:text-base text-[#2b170c]">
                            {event.date}
                          </span>
                          {event.time && (
                            <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-medium">
                              {event.time}
                            </span>
                          )}
                          <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md border font-semibold ${getCategoryBadgeClass(event.category)}`}>
                            {getCategoryLabel(event.category)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {event.statusText && (
                            <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${
                              event.completed
                                ? 'bg-[#f2e9e2] text-[#3d2315] border border-[#caa792]'
                                : 'bg-[#6b422d] text-white font-extrabold'
                            }`}>
                              {event.statusText}
                            </span>
                          )}
                          <span className="text-stone-400">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-bold text-[#2b170c] text-sm sm:text-base mt-1">
                        {event.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                        {event.summary}
                      </p>

                      {event.location && (
                        <div className="mt-2 text-xs text-[#523120] flex items-center gap-1.5 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-[#6b422d]" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Notes */}
                  {isExpanded && (
                    <div className="px-4 sm:px-5 pb-5 pt-3 border-t border-[#f2e9e2] bg-[#fbf8f5] rounded-b-2xl text-xs sm:text-sm text-stone-700">
                      {event.details && (
                        <div className="mb-3">
                          <div className="font-bold text-[#2b170c] mb-1">
                            {language === 'fr' ? 'Détails cliniques :' : 'Clinical Details:'}
                          </div>
                          <p className="leading-relaxed">{event.details}</p>
                        </div>
                      )}

                      {event.importantNotes && event.importantNotes.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-[#f2e9e2] border border-[#e3d3c7] text-[#2b170c]">
                          <div className="font-bold mb-1.5 flex items-center gap-1.5">
                            <AlertCircle className="w-4 h-4 text-[#6b422d]" />
                            {language === 'fr' ? 'Points de vigilance essentiels :' : 'Essential Reminders:'}
                          </div>
                          <ul className="space-y-1">
                            {event.importantNotes.map((note, nIdx) => (
                              <li key={nIdx} className="flex items-start gap-1.5">
                                <span className="text-[#6b422d] font-bold">•</span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
