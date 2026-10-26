import React, { useState, useEffect } from 'react';
import { X, Sparkles, Heart, Wind } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface CalmBreathingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalmBreathingModal: React.FC<CalmBreathingModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [phase, setPhase] = useState<'Inspirer' | 'Retenir' | 'Expirer' | 'Inhale' | 'Hold' | 'Exhale'>('Inspirer');
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    if (!isOpen) return;

    let currentPhase = language === 'fr' ? 'Inspirer' : 'Inhale';
    let timeLeft = 4;
    setPhase(currentPhase as any);
    setCounter(4);

    const interval = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        if (currentPhase === 'Inspirer' || currentPhase === 'Inhale') {
          currentPhase = language === 'fr' ? 'Retenir' : 'Hold';
          timeLeft = 7;
        } else if (currentPhase === 'Retenir' || currentPhase === 'Hold') {
          currentPhase = language === 'fr' ? 'Expirer' : 'Exhale';
          timeLeft = 8;
        } else {
          currentPhase = language === 'fr' ? 'Inspirer' : 'Inhale';
          timeLeft = 4;
        }
        setPhase(currentPhase as any);
      }
      setCounter(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, language]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in no-print">
      <div className="bg-[#241308] text-[#f2e9e2] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#523120] relative overflow-hidden text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#3d2315] text-[#caa792] border border-[#523120] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#e3d3c7]" />
          {language === 'fr' ? 'Espace Sérénité & Apaisement' : 'Serenity & Calm Space'}
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white">
          {language === 'fr' ? 'Respiration Apaisante 4-7-8' : '4-7-8 Calming Breath'}
        </h3>
        <p className="text-xs sm:text-sm text-[#caa792] mt-1">
          {language === 'fr'
            ? "L'attente des résultats génétiques et la préparation du transfert demandent une grande force. Prenez un instant pour vous reconnecter à votre souffle."
            : "Waiting for genetic results and preparing for transfer takes tremendous courage. Take a moment to reconnect with your breath."}
        </p>

        {/* Breathing Circle in Mocha & Sage (NO GOLD) */}
        <div className="my-8 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div 
              className={`w-40 h-40 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center text-white transition-all duration-1000 shadow-xl ${
                phase === 'Inspirer' || phase === 'Inhale'
                  ? 'bg-gradient-to-tr from-[#6b422d] to-[#8c634b] scale-110 shadow-[#6b422d]/30' 
                  : phase === 'Retenir' || phase === 'Hold'
                    ? 'bg-gradient-to-tr from-[#3d2315] to-[#523120] scale-105 shadow-[#3d2315]/30'
                    : 'bg-gradient-to-tr from-[#436652] to-[#557e67] scale-95 shadow-[#436652]/30'
              }`}
            >
              <Wind className="w-7 h-7 mb-1 opacity-90" />
              <div className="text-lg font-black uppercase tracking-wider">{phase}</div>
              <div className="text-3xl font-extrabold mt-1 font-mono">{counter}s</div>
            </div>
          </div>
        </div>

        {/* Affirmations */}
        <div className="p-4 rounded-2xl bg-[#1a0d05]/70 border border-[#523120] text-[#f2e9e2] text-xs sm:text-sm leading-relaxed text-left">
          <div className="font-bold flex items-center gap-1.5 mb-1 text-[#caa792]">
            <Heart className="w-4 h-4 text-[#8c634b] fill-[#8c634b]" />
            {language === 'fr' ? 'Pensée positive pour Fatou :' : 'Positive affirmation for Fatou:'}
          </div>
          {language === 'fr' ? (
            <>« Mon corps a déjà accompli un travail remarquable en développant 8 blastocystes de grande qualité. J'accueille chaque étape avec confiance et sérénité vers l'arrivée de mon bébé. »</>
          ) : (
            <>“My body has already accomplished extraordinary work developing 8 high-grade blastocysts. I welcome each upcoming step with confidence and tranquility as I await my baby boy.”</>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 rounded-xl bg-[#6b422d] hover:bg-[#8c634b] text-white font-bold text-xs sm:text-sm transition cursor-pointer"
        >
          {language === 'fr' ? 'Je me sens prête et apaisée' : 'I feel calm and ready'}
        </button>
      </div>
    </div>
  );
};
