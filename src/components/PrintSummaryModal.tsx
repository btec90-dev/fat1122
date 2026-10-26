import React from 'react';
import { X, Printer } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

interface PrintSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintSummaryModal: React.FC<PrintSummaryModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const { patientInfo, immediateActions, countdownMilestones } = getIvfData(language);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm overflow-y-auto no-print">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-5 sm:p-8 shadow-2xl border border-[#e3d3c7] relative my-8 text-[#2b170c]">
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 no-print">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#2b170c]">
              {language === 'fr' ? 'Aperçu Fiche Protocole (Impression / Export PDF)' : 'Protocol Summary Sheet (Print / PDF Export)'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#2b170c] hover:bg-[#3d2315] text-[#f2e9e2] text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              {language === 'fr' ? "Lancer l'impression" : "Print Document"}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="mt-4 text-[#2b170c] space-y-5 printable-content">
          {/* Header */}
          <div className="border-b-2 border-[#2b170c] pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-[#2b170c] tracking-tight">
                  {language === 'fr' ? 'FICHE DE SUIVI PROTOCOLE FIV' : 'IVF PROTOCOL SUMMARY SHEET'}
                </h1>
                <p className="text-sm font-bold text-[#523120] mt-0.5">
                  {language === 'fr' 
                    ? "Liste de contrôle d'exécution immédiate & Chronologie des étapes"
                    : 'Immediate Execution Checklist & Milestone Chronology'}
                </p>
              </div>
              <div className="text-right text-xs text-stone-600">
                <p className="font-bold text-[#2b170c]">{patientInfo.clinic}</p>
                <p>{patientInfo.clinicLocation}</p>
                <p>{patientInfo.medicalTeam}</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-[#fbf8f5] p-3 rounded-xl border border-[#e3d3c7]">
              <div>
                <span className="text-stone-500 block">{language === 'fr' ? 'Patiente :' : 'Patient:'}</span>
                <span className="font-bold text-[#2b170c]">{patientInfo.name}</span>
              </div>
              <div>
                <span className="text-stone-500 block">{language === 'fr' ? 'Phase actuelle :' : 'Current Phase:'}</span>
                <span className="font-bold text-[#523120]">{patientInfo.activePhaseTitle}</span>
              </div>
              <div>
                <span className="text-stone-500 block">{language === 'fr' ? 'Blastocystes vitrifiés :' : 'Vitrified Blastocysts:'}</span>
                <span className="font-bold text-[#2b170c]">8 {language === 'fr' ? 'embryons' : 'embryos'}</span>
              </div>
              <div>
                <span className="text-stone-500 block">{language === 'fr' ? 'Préférence validée :' : 'Confirmed Choice:'}</span>
                <span className="font-bold text-[#523120]">{patientInfo.preferredGender}</span>
              </div>
            </div>
          </div>

          {/* Section 1: Immediate Checklist */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-[#2b170c] uppercase tracking-wider mb-2 border-b border-stone-200 pb-1">
              1. {language === 'fr' ? "Liste de Contrôle d'Exécution Immédiate" : 'Immediate Execution Checklist'}
            </h2>
            <div className="space-y-2 text-xs">
              {immediateActions.map((item, idx) => (
                <div key={item.id} className="p-2 rounded-lg border border-stone-200 bg-white">
                  <div className="flex justify-between items-center font-bold">
                    <span>#{idx + 1} {item.title}</span>
                    <span className="text-[#523120]">{item.dateText}</span>
                  </div>
                  <p className="text-stone-600 mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Critical Appointment */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-[#2b170c] uppercase tracking-wider mb-2 border-b border-stone-200 pb-1">
              2. {language === 'fr' ? 'Rendez-vous du 15 Octobre à 08h00' : 'October 15 Appointment at 08:00 AM'}
            </h2>
            <div className="p-2.5 rounded-lg border border-[#caa792] bg-[#fbf8f5] text-xs space-y-1 text-stone-800">
              <p><strong>{language === 'fr' ? 'Lieu :' : 'Location:'}</strong> Gramercy Surgery Center (380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010)</p>
              <p><strong>{language === 'fr' ? 'Actes :' : 'Procedures:'}</strong> {language === 'fr' ? 'Hystérosonographie (SIS) & Hystéroscopie (Debris Removal)' : 'Saline Infusion Sonohysterography (SIS) & Hysteroscopy (Debris Removal)'}</p>
              <p><strong>{language === 'fr' ? 'Heure :' : 'Time:'}</strong> 08h00 / 08:00 AM ({language === 'fr' ? 'Arrivée conseillée : 07h30' : 'Arrival recommended: 07:30 AM'})</p>
            </div>
          </div>

          {/* Section 3: Countdown Milestones to Birth */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-[#2b170c] uppercase tracking-wider mb-2 border-b border-stone-200 pb-1">
              3. {language === 'fr' ? "Chronologie des Étapes jusqu'à l'Accouchement" : 'Chronology Through Baby Delivery'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {countdownMilestones.slice(0, 6).map((m) => (
                <div key={m.id} className="p-2 border border-stone-200 rounded-lg">
                  <div className="font-bold text-[#2b170c] flex justify-between">
                    <span>{m.title}</span>
                    <span className="text-[#523120]">{m.displayDate}</span>
                  </div>
                  <p className="text-stone-500 text-[11px] mt-0.5">{m.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 p-2 rounded-lg bg-[#f2e9e2] text-[#2b170c] font-bold text-xs flex justify-between items-center">
              <span>{language === 'fr' ? 'Arrivée finale de Bébé : Terme présumé mi-juillet 2027' : 'Baby Homecoming: Estimated Due Date Mid-July 2027'}</span>
              <span>{patientInfo.preferredGender}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-stone-200 text-center text-[10px] text-stone-400">
            {language === 'fr'
              ? 'Dossier personnel de suivi FIV • Fatou • RMA of New York • Gramercy Surgery Center'
              : 'Personal IVF Patient Protocol • Fatou • RMA of New York • Gramercy Surgery Center'}
          </div>
        </div>
      </div>
    </div>
  );
};
