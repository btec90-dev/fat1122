import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Plus, 
  Trash2, 
  Check, 
  Copy, 
  UserCheck, 
  Edit3
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

export const ProtocolCallPrep: React.FC = () => {
  const { language, t } = useLanguage();
  const { protocolCallQuestions } = getIvfData(language);

  const [questions, setQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem(`ivf_fatou_questions_${language}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return protocolCallQuestions.map(q => ({
      ...q,
      userNote: '',
      isAnswered: false,
    }));
  });

  // Re-sync when language switches if user hasn't overridden
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`ivf_fatou_questions_${language}`);
      if (saved) {
        setQuestions(JSON.parse(saved));
      } else {
        setQuestions(protocolCallQuestions.map(q => ({
          ...q,
          userNote: '',
          isAnswered: false,
        })));
      }
    } catch (e) {
      console.error(e);
    }
  }, [language]);

  const [newQuestionText, setNewQuestionText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem(`ivf_fatou_questions_${language}`, JSON.stringify(questions));
  }, [questions, language]);

  const handleUpdateNote = (id: string, text: string) => {
    setQuestions((prev: any[]) => prev.map((q: any) => q.id === id ? { ...q, userNote: text } : q));
  };

  const toggleAnswered = (id: string) => {
    setQuestions((prev: any[]) => prev.map((q: any) => q.id === id ? { ...q, isAnswered: !q.isAnswered } : q));
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;
    const newItem = {
      id: 'custom-' + Date.now(),
      category: language === 'fr' ? 'Question Personnelle' : 'Personal Question',
      question: newQuestionText.trim(),
      suggestedNotes: '',
      userNote: '',
      isAnswered: false,
    };
    setQuestions((prev: any) => [...prev, newItem]);
    setNewQuestionText('');
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions((prev: any[]) => prev.filter((q: any) => q.id !== id));
  };

  const handleCopyQuestions = () => {
    const text = questions.map((q: any, i: number) => 
      `${i + 1}. [${q.category}] ${q.question}\n${language === 'fr' ? 'Note/Consigne :' : 'Note/Answer:'} ${q.userNote || (language === 'fr' ? 'Non noté' : 'None')}\n`
    ).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="doctor-call" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#e3d3c7]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#f2e9e2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#6b422d]" />
              {t('doctorCallBadge')}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2b170c] tracking-tight">
              {t('doctorCallTitle')}
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              {t('doctorCallSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyQuestions}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#caa792] text-xs sm:text-sm font-bold text-[#2b170c] hover:bg-[#f2e9e2] transition cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t('copiedNotice') : t('copyQuestionsBtn')}</span>
            </button>
          </div>
        </div>

        {/* Tip banner in warm sand & mocha */}
        <div className="my-6 p-4 rounded-2xl bg-[#fbf8f5] border border-[#e3d3c7] flex items-start gap-3">
          <UserCheck className="w-5 h-5 text-[#6b422d] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-stone-800 leading-relaxed">
            {language === 'fr' ? (
              <>
                <strong>Conseil pour Fatou :</strong> Ayez votre portail RMA ouvert devant vous lors de cet appel. L'équipe médicale détaillera le rapport PGT-A des 8 blastocystes et validera le blastocyste masculin choisi ainsi que la fenêtre exacte de transfert (Fin oct. / Début nov.).
              </>
            ) : (
              <>
                <strong>Advice for Fatou:</strong> Have your RMA patient portal open during this call. The clinical team will review the 8 blastocyst PGT-A reports and confirm the selected male blastocyst as well as the target FET transfer date (late Oct / early Nov).
              </>
            )}
          </div>
        </div>

        {/* Questions list with note-taking */}
        <div className="space-y-4">
          {questions.map((q: any, idx: number) => (
            <div 
              key={q.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                q.isAnswered 
                  ? 'bg-stone-50 border-stone-200' 
                  : 'bg-white border-[#e3d3c7] hover:border-[#caa792]'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleAnswered(q.id)}
                    className={`mt-0.5 w-6 h-6 rounded-lg border flex items-center justify-center cursor-pointer transition ${
                      q.isAnswered
                        ? 'bg-[#523120] border-[#3d2315] text-white'
                        : 'border-[#caa792] hover:border-[#6b422d]'
                    }`}
                  >
                    {q.isAnswered && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-[#6b422d]">Q{idx + 1}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#f2e9e2] text-[#523120]">
                        {q.category}
                      </span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold mt-1 ${
                      q.isAnswered ? 'line-through text-stone-400' : 'text-[#2b170c]'
                    }`}>
                      {q.question}
                    </h4>

                    {q.suggestedNotes && (
                      <p className="text-xs text-stone-500 mt-1 italic">
                        💡 {q.suggestedNotes}
                      </p>
                    )}
                  </div>
                </div>

                {q.id.startsWith('custom-') && (
                  <button
                    onClick={() => handleDeleteQuestion(q.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Note input */}
              <div className="mt-3 pt-3 border-t border-[#f2e9e2]">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-semibold mb-1">
                  <Edit3 className="w-3.5 h-3.5 text-[#6b422d]" />
                  <span>
                    {language === 'fr' ? "Réponse de l'équipe médicale / Notes :" : 'Clinical Team Response / Notes:'}
                  </span>
                </div>
                <textarea
                  value={q.userNote || ''}
                  onChange={(e) => handleUpdateNote(q.id, e.target.value)}
                  placeholder={language === 'fr' ? "Tapez ici les réponses ou consignes médicales..." : "Type doctor recommendations and notes here..."}
                  rows={2}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#e3d3c7] bg-[#fbf8f5] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8c634b] transition"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Add Question Form */}
        <form onSubmit={handleAddQuestion} className="mt-6 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newQuestionText}
            onChange={(e) => setNewQuestionText(e.target.value)}
            placeholder={language === 'fr' ? "Ajouter une question spécifique..." : "Add your own custom question..."}
            className="flex-1 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-[#e3d3c7] bg-[#fbf8f5] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8c634b] transition"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#2b170c] text-[#f2e9e2] text-xs sm:text-sm font-bold hover:bg-[#3d2315] transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>{t('addQuestionBtn')}</span>
          </button>
        </form>
      </div>
    </section>
  );
};
