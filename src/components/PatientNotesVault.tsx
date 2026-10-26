import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Trash2, 
  Lock, 
  Save, 
  Calendar
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface NoteEntry {
  id: string;
  date: string;
  mood: 'serene' | 'hopeful' | 'tired' | 'excited' | 'anxious';
  content: string;
}

export const PatientNotesVault: React.FC = () => {
  const { language, t } = useLanguage();

  const [entries, setEntries] = useState<NoteEntry[]>(() => {
    try {
      const saved = localStorage.getItem(`ivf_fatou_journal_${language}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return language === 'fr' ? [
      {
        id: '1',
        date: '13 oct.',
        mood: 'hopeful',
        content: 'Formulaire de plan de décongélation et choix du sexe soumis via le portail ! Préférence garçon (Male) confirmée. Très émue de franchir cette nouvelle étape.'
      },
      {
        id: '2',
        date: '11 oct.',
        mood: 'serene',
        content: 'Bilan échographique fait ce matin à RMA East Side à 09h15. Tout est calme, reprise du Nortrel ce soir. Prochaine étape : Hystéroscopie le 15 oct. au Gramercy Surgery Center.'
      }
    ] : [
      {
        id: '1',
        date: 'Oct 13',
        mood: 'hopeful',
        content: 'Thaw plan and sex selection form submitted via portal! Boy (Male) preference confirmed. Feeling emotional and hopeful taking this next step.'
      },
      {
        id: '2',
        date: 'Oct 11',
        mood: 'serene',
        content: 'Ultrasound baseline completed this morning at RMA East Side at 09:15 AM. Everything quiet and ready, resuming Nortrel tonight. Next: Hysteroscopy on Oct 15 at Gramercy Surgery Center.'
      }
    ];
  });

  const [newContent, setNewContent] = useState('');
  const [newMood, setNewMood] = useState<NoteEntry['mood']>('hopeful');

  useEffect(() => {
    localStorage.setItem(`ivf_fatou_journal_${language}`, JSON.stringify(entries));
  }, [entries, language]);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    const today = new Date();
    const formattedDate = today.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short' });

    const newEntry: NoteEntry = {
      id: Date.now().toString(),
      date: formattedDate,
      mood: newMood,
      content: newContent.trim(),
    };

    setEntries([newEntry, ...entries]);
    setNewContent('');
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  const getMoodBadge = (mood: NoteEntry['mood']) => {
    if (language === 'en') {
      switch (mood) {
        case 'hopeful': return { label: 'Hopeful ✨', bg: 'bg-[#f2e9e2] text-[#3d2315] border border-[#caa792]' };
        case 'serene': return { label: 'Serene 🌿', bg: 'bg-emerald-50 text-emerald-800 border border-emerald-200' };
        case 'excited': return { label: 'Excited 🌟', bg: 'bg-[#f5ece3] text-[#2b170c] border border-[#e3d3c7]' };
        case 'tired': return { label: 'Need Rest 🛌', bg: 'bg-stone-100 text-stone-700' };
        case 'anxious': return { label: 'Need Comfort 🫂', bg: 'bg-[#3d2315] text-[#f2e9e2]' };
      }
    }
    switch (mood) {
      case 'hopeful': return { label: 'Pleine d’espoir ✨', bg: 'bg-[#f2e9e2] text-[#3d2315] border border-[#caa792]' };
      case 'serene': return { label: 'Sereine 🌿', bg: 'bg-emerald-50 text-emerald-800 border border-emerald-200' };
      case 'excited': return { label: 'Enthousiaste 🌟', bg: 'bg-[#f5ece3] text-[#2b170c] border border-[#e3d3c7]' };
      case 'tired': return { label: 'Besoin de repos 🛌', bg: 'bg-stone-100 text-stone-700' };
      case 'anxious': return { label: 'Besoin de réconfort 🫂', bg: 'bg-[#3d2315] text-[#f2e9e2]' };
    }
  };

  return (
    <section id="journal" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#e3d3c7]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f2e9e2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#6b422d]" />
              {t('journalBadge')}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2b170c] tracking-tight">
              {t('journalTitle')}
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              {t('journalSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs text-stone-500">
            <Lock className="w-3.5 h-3.5 text-[#6b422d]" />
            <span>
              {language === 'fr' ? 'Données privées sur votre appareil' : 'Private data saved on device'}
            </span>
          </div>
        </div>

        {/* New entry composer in Mocha / Taupe */}
        <form onSubmit={handleAddEntry} className="mt-6 bg-[#fbf8f5] p-4 sm:p-5 rounded-2xl border border-[#e3d3c7]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#523120]">
              {language === 'fr' ? 'Comment vous sentez-vous aujourd’hui ?' : 'How are you feeling today?'}
            </span>

            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'hopeful', label: language === 'fr' ? 'Pleine d’espoir ✨' : 'Hopeful ✨' },
                { id: 'serene', label: language === 'fr' ? 'Sereine 🌿' : 'Serene 🌿' },
                { id: 'excited', label: language === 'fr' ? 'Enthousiaste 🌟' : 'Excited 🌟' },
                { id: 'tired', label: language === 'fr' ? 'Fatiguée 🛌' : 'Tired 🛌' },
                { id: 'anxious', label: language === 'fr' ? 'Stressée 🫂' : 'Anxious 🫂' }
              ].map(m => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setNewMood(m.id as any)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    newMood === m.id
                      ? 'bg-[#2b170c] text-white font-bold shadow-2xs'
                      : 'bg-white text-stone-700 border border-[#e3d3c7] hover:bg-[#f2e9e2]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder={language === 'fr' ? "Écrivez une note, vos ressentis..." : "Write a personal note, symptom, or feeling..."}
            rows={3}
            className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-[#e3d3c7] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8c634b] transition"
          />

          <div className="flex justify-end mt-3">
            <button
              type="submit"
              disabled={!newContent.trim()}
              className="px-5 py-2 rounded-xl bg-[#2b170c] hover:bg-[#3d2315] disabled:opacity-40 text-white text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4 text-[#caa792]" />
              <span>{t('saveNoteBtn')}</span>
            </button>
          </div>
        </form>

        {/* Entries list */}
        <div className="mt-6 space-y-3.5">
          {entries.map(entry => {
            const mood = getMoodBadge(entry.mood);
            return (
              <div 
                key={entry.id}
                className="p-4 sm:p-5 rounded-2xl border border-[#e3d3c7] bg-white hover:border-[#caa792] transition"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#2b170c] text-xs sm:text-sm flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#6b422d]" />
                      {entry.date}
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${mood.bg}`}>
                      {mood.label}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-stone-400 hover:text-rose-600 p-1 transition cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-wrap">
                  {entry.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
