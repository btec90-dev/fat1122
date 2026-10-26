import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/ivf';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const UI_TRANSLATIONS: Translations = {
  // Banner & Header
  appTitle: {
    fr: "Protocole FIV de Fatou",
    en: "Fatou's IVF Protocol Tracker"
  },
  currentStatusTag: {
    fr: "Phase 2 Active • 8 Blastocystes vitrifiés • Préférence : Garçon (Male)",
    en: "Phase 2 Active • 8 Vitrified Blastocysts • Preference: Boy (Male)"
  },
  serenitySpace: {
    fr: "Espace Sérénité",
    en: "Serenity Space"
  },
  printSheet: {
    fr: "Imprimer Fiche",
    en: "Print Sheet"
  },
  shareUrl: {
    fr: "Partager l'URL",
    en: "Share URL"
  },
  preferredBoy: {
    fr: "👦 Préférence Garçon validée",
    en: "👦 Boy Preference Confirmed"
  },
  clinicBadge: {
    fr: "RMA New York",
    en: "RMA of New York"
  },

  // Navigation tabs
  navCountdowns: {
    fr: "⏳ Comptes à Rebours",
    en: "⏳ Countdowns to Baby"
  },
  navChecklist: {
    fr: "⚡ Checklist Immédiate",
    en: "⚡ Immediate Checklist"
  },
  navAppointment: {
    fr: "🏥 Rendez-vous 15 Oct.",
    en: "🏥 Oct 15 Procedure"
  },
  navLab: {
    fr: "🧫 8 Blastocystes & Labo",
    en: "🧫 8 Blastocysts & Lab"
  },
  navTimeline: {
    fr: "📅 Calendrier des 4 Phases",
    en: "📅 4-Phase Roadmap"
  },
  navMeds: {
    fr: "💊 Médication (Nortrel)",
    en: "💊 Daily Medication"
  },
  navDoctorCall: {
    fr: "📞 Appel Protocole RMA",
    en: "📞 RMA Protocol Call"
  },
  navJournal: {
    fr: "📝 Journal de Bord",
    en: "📝 Personal Journal"
  },

  // Hero Section
  welcomeHeroTag: {
    fr: "Portail Personnel de FIV",
    en: "Personal IVF Portal"
  },
  welcomeGreeting: {
    fr: "Bienvenue, Fatou",
    en: "Welcome, Fatou"
  },
  heroDescription: {
    fr: "Votre protocole est actuellement en Phase 2 (Active). Vos 8 blastocystes sont en cours d'analyse PGT-A. La préparation de votre utérus avance sereinement vers le transfert d'un garçon (Male).",
    en: "Your protocol is currently in Phase 2 (Active). Your 8 blastocysts are undergoing PGT-A genetic screening. Your uterine lining preparation is progressing smoothly toward transfer of an euploid boy (Male)."
  },
  heroVitrified: {
    fr: "❄️ 8 Blastocystes vitrifiés",
    en: "❄️ 8 Vitrified Blastocysts"
  },
  heroGender: {
    fr: "👦 Préférence validée : Garçon",
    en: "👦 Confirmed Choice: Boy"
  },
  heroSis: {
    fr: "🏥 Hystéro & SIS : 15 Oct. 08h00",
    en: "🏥 Hysteroscopy & SIS: Oct 15, 8:00 AM"
  },
  heroTeamTitle: {
    fr: "Équipe Médicale RMA",
    en: "RMA Clinical Team"
  },
  heroImmediateActionBtn: {
    fr: "Actions immédiates",
    en: "Immediate Actions"
  },

  // Immediate Checklist
  checklistBadge: {
    fr: "Priorités Immédiates • Phase 2 Active",
    en: "Immediate Priorities • Phase 2 Active"
  },
  checklistTitle: {
    fr: "Liste de contrôle d'exécution immédiate",
    en: "Immediate Execution Checklist"
  },
  checklistSubtitle: {
    fr: "Les 5 actions capitales à accomplir et surveiller pour Fatou durant la phase de préparation au transfert (FET).",
    en: "The 5 critical actions to execute and monitor for Fatou during the frozen embryo transfer (FET) preparation phase."
  },
  checklistProgress: {
    fr: "Progression des actions",
    en: "Action Progress"
  },
  checklistValidated: {
    fr: "validées",
    en: "completed"
  },
  checklistTip: {
    fr: "Cliquer pour cocher / décocher • Sauvegardé",
    en: "Click to check / uncheck • Autosaved"
  },
  checklistUrgent: {
    fr: "Action requise",
    en: "Action Required"
  },
  checklistCompleted: {
    fr: "Complété",
    en: "Completed"
  },
  checklistUpcoming: {
    fr: "À venir",
    en: "Upcoming"
  },
  checklistDetailsHeader: {
    fr: "Consignes & Détails d'application",
    en: "Instructions & Clinical Notes"
  },
  checklistFootnote: {
    fr: "Rappel important pour Fatou : Tout changement dans les horaires de médication ou l'apparition de saignements doit être immédiatement signalé à l'infirmière coordinatrice de RMA East Side. Le respect de la prise de Nortrel jusqu'au feu vert de l'équipe médicale est primordial pour la synchronisation endométriale.",
    en: "Important reminder for Fatou: Any change in medication timing or unexpected bleeding must be reported immediately to the RMA East Side nurse coordinator. Continuing daily Nortrel until medical clearance is crucial for endometrial synchronization."
  },

  // Countdown Section
  countdownBadge: {
    fr: "Compte à Rebours Vivant • De l'Hystéroscopie à la Naissance",
    en: "Live Countdown • From Hysteroscopy to Baby's Birth"
  },
  countdownTitle: {
    fr: "La Grande Chronologie vers Bébé",
    en: "The Grand Journey to Baby"
  },
  countdownSubtitle: {
    fr: "Chaque seconde vous rapproche de l'arrivée de votre petit garçon. Suivez le décompte en temps réel pour chaque étape médicale et obstétricale.",
    en: "Every second brings you closer to welcoming your baby boy. Follow real-time countdowns for every clinical and obstetric milestone."
  },
  countdownUltimateGoal: {
    fr: "Objectif Ultime",
    en: "Ultimate Milestone"
  },
  countdownBabyBornTitle: {
    fr: "Naissance de Bébé",
    en: "Baby Born"
  },
  countdownEstimatedTerm: {
    fr: "Terme présumé : Mi-Juillet 2027",
    en: "Estimated Due Date: Mid-July 2027"
  },
  countdownDays: {
    fr: "Jours",
    en: "Days"
  },
  countdownHours: {
    fr: "Heures",
    en: "Hours"
  },
  countdownMinutes: {
    fr: "Min",
    en: "Mins"
  },
  countdownSeconds: {
    fr: "Sec",
    en: "Secs"
  },
  countdownEstimatedRemaining: {
    fr: "Temps restant estimé",
    en: "Estimated Time Remaining"
  },
  countdownOverallProgress: {
    fr: "Progression globale du protocole jusqu'à l'accouchement",
    en: "Overall Journey Progress Toward Childbirth"
  },
  countdownStepSelect: {
    fr: "Sélectionnez une étape pour afficher son compte à rebours précis :",
    en: "Select any milestone to display its precise countdown clock:"
  },
  countdownIn: {
    fr: "Dans",
    en: "In"
  },
  countdownToday: {
    fr: "Aujourd'hui / Imminent",
    en: "Today / Imminent"
  },
  countdownActive: {
    fr: "Actif",
    en: "Active"
  },
  countdownSelectAction: {
    fr: "Sélectionner",
    en: "Select"
  },

  // Appointment Section
  appointmentBadge: {
    fr: "Rendez-vous Clé • Jeudi 15 Octobre à 08h00",
    en: "Key Appointment • Thursday, Oct 15 at 08:00 AM"
  },
  appointmentTitle: {
    fr: "Hystéroscopie & Hystérosonographie (SIS)",
    en: "Hysteroscopy & Saline Infusion Sonogram (SIS)"
  },
  appointmentSubtitle: {
    fr: "Évaluation de la cavité utérine à RMA East Side et retrait des débris (Debris Removal) au Gramercy Surgery Center.",
    en: "Uterine cavity assessment at RMA East Side and debris removal at Gramercy Surgery Center."
  },
  openMaps: {
    fr: "Ouvrir dans Google Maps",
    en: "Open in Google Maps"
  },
  convocationTime: {
    fr: "Convocation : 08h00 précises (Arrivée conseillée : 07h30)",
    en: "Check-in: 08:00 AM sharp (Arrival recommended: 07:30 AM)"
  },
  preProcedureInstructions: {
    fr: "Consignes Pré-Procédure pour Fatou (15 Octobre)",
    en: "Pre-Procedure Guidelines for Fatou (October 15)"
  },

  // Lab & Funnel
  labBadge: {
    fr: "Bilan Embryologique RMA of New York",
    en: "RMA of New York Embryology Report"
  },
  labTitle: {
    fr: "L'Entonnoir Biologique & Rendement du Laboratoire",
    en: "Embryology Funnel & Laboratory Yield"
  },
  labSubtitle: {
    fr: "De la ponction des 42 ovocytes jusqu'à la vitrification de 8 blastocystes de haute qualité prêts pour le dépistage PGT-A et le transfert.",
    en: "From retrieving 42 oocytes to vitrifying 8 high-grade blastocysts ready for PGT-A testing and transfer."
  },
  labRemarkableYield: {
    fr: "Rendement Remarquable",
    en: "Outstanding Yield"
  },

  // 4 Phases
  phasesBadge: {
    fr: "Parcours Complet de Soins",
    en: "Comprehensive Treatment Roadmap"
  },
  phasesTitle: {
    fr: "Calendrier Complet des 4 Phases",
    en: "Complete 4-Phase Treatment Calendar"
  },
  phasesSubtitle: {
    fr: "Vue chronologique détaillée : de la stimulation ovarienne initiale jusqu'à l'accouchement à terme.",
    en: "Detailed chronological overview: from initial stimulation to full-term delivery."
  },
  searchPlaceholder: {
    fr: "Rechercher (ex: Nortrel, SIS, PGT-A...)",
    en: "Search events (e.g. Nortrel, SIS, PGT-A...)"
  },
  filterAllPhases: {
    fr: "Toutes les phases",
    en: "All Phases"
  },
  filterPhase1: {
    fr: "Phase 1 (Terminée)",
    en: "Phase 1 (Completed)"
  },
  filterPhase2: {
    fr: "Phase 2 (Active ⚡)",
    en: "Phase 2 (Active ⚡)"
  },
  filterPhase3: {
    fr: "Phase 3 (Post-FET)",
    en: "Phase 3 (Post-FET)"
  },
  filterPhase4: {
    fr: "Phase 4 (Obstétrique)",
    en: "Phase 4 (Obstetric)"
  },

  // Medication
  medsBadge: {
    fr: "Observance Thérapeutique",
    en: "Therapeutic Adherence"
  },
  medsTitle: {
    fr: "Maintien de la Médication Quotidienne",
    en: "Daily Medication Adherence"
  },
  medsSubtitle: {
    fr: "Suivi scrupuleux du protocole : suppression ovarienne active par Nortrel et calendrier des estrogènes.",
    en: "Careful protocol monitoring: active ovarian suppression with Nortrel and estrogen regimen."
  },
  validateDoseBtn: {
    fr: "Valider ma prise de Nortrel aujourd'hui",
    en: "Confirm Today's Nortrel Dose Taken"
  },
  doseValidated: {
    fr: "Dose du jour validée !",
    en: "Today's dose recorded!"
  },
  upcomingMeds: {
    fr: "Traitements à venir (Préparation au Transfert FET)",
    en: "Upcoming Medications (FET Transfer Preparation)"
  },

  // Doctor Call Prep
  doctorCallBadge: {
    fr: "Consultation Téléphonique • Équipe RMA of New York",
    en: "Phone Consultation • RMA of New York Medical Team"
  },
  doctorCallTitle: {
    fr: "Préparer l'Appel de Protocole avec l'Équipe Médicale",
    en: "Prepare the Protocol Consultation Call"
  },
  doctorCallSubtitle: {
    fr: "À planifier immédiatement dès réception des résultats PGT-A sur le portail (entre le 23 et le 28 oct.) pour fixer la date cible du FET.",
    en: "To schedule immediately upon receiving PGT-A results on the portal (between Oct 23 and Oct 28) to confirm target FET date."
  },
  copyQuestionsBtn: {
    fr: "Copier mes questions",
    en: "Copy My Questions"
  },
  copiedNotice: {
    fr: "Copié !",
    en: "Copied!"
  },
  addQuestionBtn: {
    fr: "Ajouter ma question",
    en: "Add Question"
  },

  // Journal
  journalBadge: {
    fr: "Espace Personnel & Ressenti",
    en: "Personal Log & Feelings"
  },
  journalTitle: {
    fr: "Journal de Bord de Fatou",
    en: "Fatou's Personal Journal"
  },
  journalSubtitle: {
    fr: "Un espace sécurisé et intime pour noter vos pensées, symptômes, et questions pour l'équipe soignante.",
    en: "A secure and private space to record your thoughts, symptoms, and questions for your care team."
  },
  saveNoteBtn: {
    fr: "Enregistrer ma note",
    en: "Save Note"
  },

  // Footer
  footerCopyright: {
    fr: "Données médicales confidentielles et sécurisées pour Fatou.",
    en: "Confidential and secure patient protocol portal for Fatou."
  },
  footerDisclaimer: {
    fr: "En cas d'urgence médicale ou de saignements, contactez l'équipe soignante de garde de RMA.",
    en: "For medical emergencies or unexpected bleeding, contact the on-call RMA medical team immediately."
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check URL param ?lang=en or ?lang=fr
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'fr') {
        return urlLang;
      }
      // 2. Check localStorage
      const saved = localStorage.getItem('ivf_fatou_language');
      if (saved === 'en' || saved === 'fr') {
        return saved;
      }
    }
    return 'fr'; // default
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('ivf_fatou_language', newLang);
      // Update HTML tag lang
      document.documentElement.lang = newLang;
      // Update document title
      document.title = newLang === 'fr' 
        ? "Suivi Protocole FIV - Fatou | RMA New York" 
        : "Fatou's IVF Protocol Tracker | RMA of New York";
      
      // Update URL query string without reloading page
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      console.error(e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'fr' 
      ? "Suivi Protocole FIV - Fatou | RMA New York" 
      : "Fatou's IVF Protocol Tracker | RMA of New York";
  }, [language]);

  const t = (key: string): string => {
    const item = UI_TRANSLATIONS[key];
    if (!item) return key;
    return item[language] || item.fr || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
