import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  ShieldCheck,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getIvfData } from '../data/ivfData';

export const ClinicLocationCard: React.FC = () => {
  const { language, t } = useLanguage();
  const { patientInfo } = getIvfData(language);
  const [copied, setCopied] = useState(false);

  const address = patientInfo.surgeryAddress;

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Gramercy Surgery Center 380 2nd Avenue New York NY 10010')}`;

  return (
    <section id="appointment" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-[#e3d3c7] relative overflow-hidden">
        {/* Top banner accent in warm mocha brown (NO GOLD) */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2b170c] via-[#523120] to-[#8c634b]"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#f2e9e2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f2e9e2] text-[#523120] mb-2">
              <Clock className="w-3.5 h-3.5 text-[#6b422d]" />
              {t('appointmentBadge')}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2b170c] tracking-tight">
              {t('appointmentTitle')}
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              {t('appointmentSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2b170c] hover:bg-[#3d2315] text-[#f2e9e2] text-xs sm:text-sm font-bold transition cursor-pointer shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-[#caa792]" />
              {t('openMaps')}
            </a>
          </div>
        </div>

        {/* Location & Time Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {/* Gramercy Surgery Center */}
          <div className="bg-[#fbf8f5] border border-[#e3d3c7] rounded-2xl p-5 relative">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#523120] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5 text-[#f2e9e2]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b422d]">
                    {language === 'fr' ? 'Centre Chirurgical Ambulatoire' : 'Ambulatory Surgery Center'}
                  </span>
                  <h3 className="text-base font-bold text-[#2b170c]">
                    Gramercy Surgery Center
                  </h3>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-white rounded-lg transition cursor-pointer"
                title={language === 'fr' ? "Copier l'adresse" : "Copy address"}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6b422d] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2b170c]">380 2nd Avenue, Suite 1000</p>
                  <p className="text-stone-600">10th Floor, New York, NY 10010</p>
                  <p className="text-[11px] text-[#8c634b] mt-0.5 font-medium">
                    {language === 'fr' ? 'Angle 2nd Ave & 22nd Street' : 'Cross Streets: 2nd Ave & 22nd St'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-[#e3d3c7]">
                <Clock className="w-4 h-4 text-[#6b422d] shrink-0" />
                <div>
                  <span className="font-semibold text-[#2b170c]">{language === 'fr' ? 'Convocation : ' : 'Check-in: '}</span>
                  <span className="text-[#2b170c] font-bold bg-[#f2e9e2] px-2 py-0.5 rounded">08h00 / 08:00 AM</span>
                  <span className="text-stone-500 text-xs ml-1">
                    {language === 'fr' ? '(Arrivée conseillée : 07h30)' : '(Arrival recommended: 07:30 AM)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RMA East Side & Medical Team */}
          <div className="bg-[#fbf8f5] border border-[#e3d3c7] rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2b170c] text-[#f2e9e2] flex items-center justify-center shrink-0 shadow-xs">
                <Stethoscope className="w-5 h-5 text-[#caa792]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b422d]">
                  {language === 'fr' ? 'Équipe Médicale Spécialisée' : 'Specialized Clinical Team'}
                </span>
                <h3 className="text-base font-bold text-[#2b170c]">
                  RMA of New York • {patientInfo.clinicLocation}
                </h3>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#6b422d] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#2b170c]">
                    {language === 'fr' ? 'Actes programmés du 15 oct. :' : 'Scheduled Procedures for Oct 15:'}
                  </p>
                  <p className="text-stone-600 text-xs mt-0.5">
                    1. <strong>{language === 'fr' ? 'Hystérosonographie par perfusion de sérum (SIS)' : 'Saline Infusion Sonohysterography (SIS)'}</strong>.
                  </p>
                  <p className="text-stone-600 text-xs mt-0.5">
                    2. <strong>{language === 'fr' ? 'Hystéroscopie avec retrait de débris (Debris Removal)' : 'Diagnostic Hysteroscopy with Debris Removal'}</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-[#e3d3c7] text-xs text-[#523120] font-medium">
                <Sparkles className="w-4 h-4 text-[#8c634b] shrink-0" />
                <span>
                  {language === 'fr'
                    ? "Objectif : Créer le lit d'accueil idéal pour le blastocyste masculin euploïde."
                    : "Objective: Prepare optimal receptive lining for the euploid male blastocyst."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Guidelines & Preparation Checklist */}
        <div className="mt-6 bg-[#fbf8f5] border border-[#e3d3c7] rounded-2xl p-5 sm:p-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#2b170c] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            {t('preProcedureInstructions')}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-xl border border-[#e3d3c7] shadow-2xs">
              <div className="font-bold text-[#2b170c] flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-[#f2e9e2] text-[#523120] text-xs flex items-center justify-center font-bold">1</span>
                {language === 'fr' ? 'Documents & Accueil' : 'Documents & Check-In'}
              </div>
              <ul className="text-stone-600 space-y-1">
                <li>• {language === 'fr' ? 'Pièce d’identité officielle avec photo' : 'Official government photo ID'}</li>
                <li>• {language === 'fr' ? 'Carte d’assurance santé en cours' : 'Active health insurance card'}</li>
                <li>• {language === 'fr' ? 'Présentation au 10e étage, suite 1000' : 'Check-in on 10th Floor, Suite 1000'}</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#e3d3c7] shadow-2xs">
              <div className="font-bold text-[#2b170c] flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-[#f2e9e2] text-[#523120] text-xs flex items-center justify-center font-bold">2</span>
                {language === 'fr' ? 'Confort & Vêtements' : 'Comfort & Attire'}
              </div>
              <ul className="text-stone-600 space-y-1">
                <li>• {language === 'fr' ? 'Vêtements amples et confortables' : 'Loose, comfortable clothing'}</li>
                <li>• {language === 'fr' ? 'Prévoir une protection hygiénique (serviette)' : 'Bring sanitary pad for light spotting'}</li>
                <li>• {language === 'fr' ? 'Éviter bijoux et objets de valeur' : 'Leave jewelry and valuables at home'}</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#e3d3c7] shadow-2xs">
              <div className="font-bold text-[#2b170c] flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-[#f2e9e2] text-[#523120] text-xs flex items-center justify-center font-bold">3</span>
                {language === 'fr' ? 'Accompagnement & Retour' : 'Discharge & Rest'}
              </div>
              <ul className="text-stone-600 space-y-1">
                <li>• {language === 'fr' ? 'Accompagnant recommandé pour le retour' : 'Adult escort recommended for ride home'}</li>
                <li>• {language === 'fr' ? 'Prévoir une journée de repos calme après' : 'Plan a quiet rest day afterwards'}</li>
                <li>• {language === 'fr' ? 'Hydratation douce et repas léger post-examen' : 'Stay hydrated and enjoy light meals'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
