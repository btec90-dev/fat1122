import { ImmediateActionItem, PhaseInfo, TimelineEvent, MedicationItem, EmbryologyFunnelStep, CountdownMilestone, PatientInfo, Language } from '../types/ivf';

export const PATIENT_INFO_FR: PatientInfo = {
  name: 'Fatou',
  clinic: 'RMA of New York',
  clinicLocation: 'RMA East Side',
  medicalTeam: 'Équipe Médicale Spécialisée RMA',
  surgeryCenter: 'Gramercy Surgery Center',
  surgeryAddress: '380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010',
  preferredGender: 'Garçon (Male)',
  activePhaseId: 2,
  activePhaseTitle: 'Phase 2 : Embryologie, PGT-A et préparation au transfert (Active)',
  statusSummary: 'Résultats PGT-A attendus entre le 23 et 28 oct. Préparation endométriale et Hystérosonographie / Hystéroscopie le 15 oct.',
};

export const PATIENT_INFO_EN: PatientInfo = {
  name: 'Fatou',
  clinic: 'RMA of New York',
  clinicLocation: 'RMA East Side',
  medicalTeam: 'RMA Fertility Specialist Team',
  surgeryCenter: 'Gramercy Surgery Center',
  surgeryAddress: '380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010',
  preferredGender: 'Boy (Male)',
  activePhaseId: 2,
  activePhaseTitle: 'Phase 2: Embryology, PGT-A & FET Preparation (Active)',
  statusSummary: 'PGT-A results expected between Oct 23 and 28. Endometrial lining prep & Saline Infusion Sonohysterography / Hysteroscopy on Oct 15.',
};

export const IMMEDIATE_ACTIONS_FR: ImmediateActionItem[] = [
  {
    id: 'thaw-plan',
    title: 'Plan de décongélation terminé',
    dateText: '13 oct. (Complété)',
    category: 'plan',
    status: 'done',
    description: 'Soumis via le portail avec une préférence pour un garçon (Male). Le laboratoire sélectionnera le blastocyste euploïde masculin de la plus haute qualité pour le transfert.',
    highlight: 'Préférence Garçon (Male) validée au laboratoire RMA',
    details: [
      'Formulaire officiel validé et accusé de réception reçu',
      'Directive transmise aux embryologistes pour privilégier le meilleur blastocyste euploïde masculin',
      'Sélection conditionnée par les résultats du dépistage génétique PGT-A'
    ]
  },
  {
    id: 'medication-nortrel',
    title: 'Maintien de la médication quotidienne',
    dateText: 'Tous les jours en cours',
    category: 'medication',
    status: 'urgent',
    description: "Continuer la suppression ovarienne quotidienne par Nortrel comme prescrit par l'équipe médicale.",
    highlight: 'Prise quotidienne régulière essentielle pour maintenir la mise au repos ovarien',
    details: [
      'Médicament : Nortrel (suppression ovarienne)',
      'Rythme : 1 comprimé par jour à heure fixe (recommandé le soir)',
      'Objectif : Éviter tout pic hormonal intempestif avant le début de la préparation endométriale'
    ]
  },
  {
    id: 'appointment-sis-hysteroscopy',
    title: "Assister à l'échographie par perfusion de sérum physiologique & Hystéroscopie",
    dateText: 'Jeudi 15 oct. à 08h00',
    category: 'appointment',
    status: 'urgent',
    location: 'Gramercy Surgery Center & RMA East Side',
    description: "Se présenter au Gramercy Surgery Center (380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010) et au bureau RMA East Side le jeudi 15 oct. à 08h00 pour l'hystérosonographie (SIS) et le retrait de débris (Hysteroscopy / Debris Removal).",
    highlight: 'Heure de convocation : 08h00 précises',
    details: [
      'Examen 1 : Hystérosonographie par perfusion de sérum physiologique (SIS)',
      'Examen 2 : Hystéroscopie diagnostique / interventionnelle (Debris Removal / Nettoyage cavité)',
      'Lieu : Gramercy Surgery Center, 380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010',
      'Objectif : Garantir une cavité utérine parfaitement réceptive et exempte de synéchies ou micro-débris avant le transfert'
    ]
  },
  {
    id: 'pgta-results-window',
    title: 'Surveiller le portail pour les résultats PGT-A',
    dateText: '23 au 28 oct. (Fenêtre active)',
    category: 'lab',
    status: 'pending',
    description: 'Surveiller le portail RMA entre le 23 et le 28 oct. pour les résultats des tests génétiques préimplantatoires sur les 8 blastocystes biopsiés.',
    highlight: '8 blastocystes biopsiés analysés pour euploïdie & sexe',
    details: [
      '8 blastocystes envoyés pour biopsie du trophectoderme',
      'Recherche du statut chromosomique (euploïde / aneuploïde / mosaïque)',
      'Identification du sexe foetal pour concrétiser le plan de décongélation (Garçon / Male)',
      'Alerte e-mail et notification sur le portail dès disponibilité'
    ]
  },
  {
    id: 'protocol-call-prep',
    title: "Planifier l'appel de protocole avec l'équipe médicale RMA",
    dateText: 'Dès réception des résultats PGT-A',
    category: 'consultation',
    status: 'pending',
    description: "Contacter l'équipe dès réception des résultats PGT-A afin de confirmer la date cible du transfert d'embryon congelé (FET).",
    highlight: 'Fixation du calendrier de transfert et lancement de la progestérone',
    details: [
      'Contacter la coordinatrice RMA dès parution des résultats sur le portail',
      'Confirmer le choix du blastocyste mâle sélectionné',
      'Fixer le calendrier précis du FET (fin octobre / tout début novembre)',
      'Ajuster les dates de début des injections de progestérone intramusculaire (PIO)'
    ]
  }
];

export const IMMEDIATE_ACTIONS_EN: ImmediateActionItem[] = [
  {
    id: 'thaw-plan',
    title: 'Thaw Plan Completed',
    dateText: 'Oct 13 (Completed)',
    category: 'plan',
    status: 'done',
    description: 'Submitted via patient portal with preference for a Boy (Male). Laboratory will select the highest quality euploid male blastocyst for transfer.',
    highlight: 'Boy (Male) Preference Confirmed at RMA Laboratory',
    details: [
      'Official consent form signed and receipt confirmed by clinic',
      'Direct instruction sent to embryology team prioritizing highest-grade euploid male blastocyst',
      'Embryo selection pending final PGT-A genetic screening report'
    ]
  },
  {
    id: 'medication-nortrel',
    title: 'Daily Medication Maintenance',
    dateText: 'Daily in progress',
    category: 'medication',
    status: 'urgent',
    description: 'Continue daily ovarian suppression with Nortrel as prescribed by the medical team.',
    highlight: 'Strict daily adherence required to maintain ovarian suppression',
    details: [
      'Medication: Nortrel (ovarian suppression)',
      'Dosage: 1 tablet daily at a consistent time (evening recommended)',
      'Purpose: Prevent premature hormonal surges prior to endometrial preparation'
    ]
  },
  {
    id: 'appointment-sis-hysteroscopy',
    title: 'Attend Saline Infusion Sonohysterography & Hysteroscopy',
    dateText: 'Thursday, Oct 15 at 08:00 AM',
    category: 'appointment',
    status: 'urgent',
    location: 'Gramercy Surgery Center & RMA East Side',
    description: 'Arrive at Gramercy Surgery Center (380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010) and RMA East Side office on Thursday, Oct 15 at 08:00 AM for Saline Infusion Sonohysterography (SIS) and Debris Removal Hysteroscopy.',
    highlight: 'Check-in Time: 08:00 AM sharp',
    details: [
      'Procedure 1: Saline Infusion Sonogram (SIS) for 3D uterine cavity mapping',
      'Procedure 2: Diagnostic / Operative Hysteroscopy (Debris Removal)',
      'Location: Gramercy Surgery Center, 380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010',
      'Goal: Ensure optimal receptive uterine lining free of micro-debris before transfer'
    ]
  },
  {
    id: 'pgta-results-window',
    title: 'Monitor Portal for PGT-A Genetic Results',
    dateText: 'Oct 23 to 28 (Active Window)',
    category: 'lab',
    status: 'pending',
    description: 'Monitor the RMA patient portal between Oct 23 and Oct 28 for preimplantation genetic testing results on all 8 biopsied blastocysts.',
    highlight: '8 biopsied blastocysts analyzed for euploidy & sex',
    details: [
      '8 blastocysts sent for trophectoderm biopsy',
      'Chromosomal normality assessment (euploid vs aneuploid vs mosaic)',
      'Sex identification to implement the Boy (Male) thaw preference',
      'Automated email and patient portal notification upon release'
    ]
  },
  {
    id: 'protocol-call-prep',
    title: 'Schedule Protocol Call with RMA Clinical Team',
    dateText: 'Upon receipt of PGT-A results',
    category: 'consultation',
    status: 'pending',
    description: 'Contact clinical team immediately upon receiving PGT-A results to establish the target Frozen Embryo Transfer (FET) date.',
    highlight: 'Confirm transfer date & progesterone start timing',
    details: [
      'Call RMA nurse coordinator once results appear in the portal',
      'Confirm the selected male blastocyst candidate',
      'Finalize exact FET transfer date (late Oct / early Nov)',
      'Set exact start date and hour for progesterone in oil (PIO) injections'
    ]
  }
];

export const COUNTDOWN_MILESTONES_FR: CountdownMilestone[] = [
  {
    id: 'm-sis',
    title: 'Hystéroscopie & Hystérosonographie (SIS)',
    stageName: 'Préparation Cavité Utérine',
    phaseNumber: 2,
    targetDate: '2026-10-15T08:00:00',
    displayDate: '15 Octobre à 08h00',
    category: 'procedure',
    description: 'Examen de la cavité utérine et retrait des micro-débris (Debris Removal) au Gramercy Surgery Center.',
    badge: 'Intervention Clé',
    icon: 'hospital',
    advice: 'Arrivée conseillée à 07h30 au 10e étage avec pièce d’identité.'
  },
  {
    id: 'm-pgta',
    title: 'Réception des Résultats Génétiques PGT-A',
    stageName: 'Bilan Chromosomique & Sexe',
    phaseNumber: 2,
    targetDate: '2026-10-23T09:00:00',
    displayDate: '23 au 28 Octobre',
    category: 'lab',
    description: 'Parution sur le portail RMA du statut des 8 blastocystes et confirmation du garçon euploïde.',
    badge: 'Génétique PGT-A',
    icon: 'dna',
    advice: 'Surveiller les notifications e-mail et l’espace patient RMA.'
  },
  {
    id: 'm-fet',
    title: "Transfert d'Embryon Congelé (FET)",
    stageName: "Implantation du Blastocyste",
    phaseNumber: 2,
    targetDate: '2026-10-31T10:30:00',
    displayDate: 'Fin Octobre / Début Novembre',
    category: 'fet',
    description: "Transfert d'un blastocyste euploïde masculin de qualité maximale sous guidage échographique.",
    badge: 'Grand Jour FET 🌱',
    icon: 'baby',
    advice: 'Journée de calme et de repos doux après le transfert.'
  },
  {
    id: 'm-hcg',
    title: 'Prises de Sang Sériées Bêta-hCG',
    stageName: "Confirmation d'Implantation",
    phaseNumber: 3,
    targetDate: '2026-11-10T08:00:00',
    displayDate: '08 au 12 Novembre (9–14j post-FET)',
    category: 'lab',
    description: "Dosage quantitatif sérié de l'hormone de grossesse HCG pour attester d'une cinétique harmonieuse.",
    badge: 'Dosage HCG 🩸',
    icon: 'drop',
    advice: 'Bilan à jeun à RMA East Side avec résultat dans l’après-midi.'
  },
  {
    id: 'm-first-echo',
    title: 'Première Échographie & Rythme Cardiaque',
    stageName: 'Viabilité Précoce (Semaines 5–8)',
    phaseNumber: 3,
    targetDate: '2026-11-28T09:15:00',
    displayDate: 'Fin Novembre (Semaine 6)',
    category: 'pregnancy',
    description: 'Visualisation du sac gestationnel, de la vésicule vitelline et du premier battement de cœur.',
    badge: 'Battement de cœur 💓',
    icon: 'heart-pulse',
    advice: 'Moment très émouvant, possibilité d’enregistrer le son des pulsations.'
  },
  {
    id: 'm-graduation',
    title: "Diplôme RMA & Transfert OB/GYN",
    stageName: 'Fin de Suivi FIV (Semaines 8–10)',
    phaseNumber: 3,
    targetDate: '2026-12-19T10:00:00',
    displayDate: 'Mi-Décembre (Semaine 9)',
    category: 'pregnancy',
    description: "Clôture officielle du protocole de PMA avec l'équipe de RMA et transition vers l'obstétricien traitant.",
    badge: 'Diplômée RMA 🎓',
    icon: 'award',
    advice: 'Transmission du dossier médical complet à votre maternité.'
  },
  {
    id: 'm-nipt',
    title: 'Dépistage 1er Trimestre & DPNI',
    stageName: 'Dépistage Prénatal (Semaines 11–13)',
    phaseNumber: 4,
    targetDate: '2027-01-10T09:00:00',
    displayDate: 'Début Janvier (Semaine 12)',
    category: 'pregnancy',
    description: 'Échographie de la clarté nucale et test génétique maternel DPNI pour confirmer le bien-être du bébé.',
    badge: 'Bilan T1 🩺',
    icon: 'activity',
    advice: 'Premier rendez-vous complet avec le gynécologue-obstétricien référent.'
  },
  {
    id: 'm-kick',
    title: 'Premiers Mouvements Fœtaux Ressentis',
    stageName: 'Éveil Sensitif (Semaines 18–20)',
    phaseNumber: 4,
    targetDate: '2027-02-27T12:00:00',
    displayDate: 'Fin Février (Semaine 19)',
    category: 'pregnancy',
    description: 'Perception des premiers petits mouvements du bébé (quickening / bulles d’air caractéristiques).',
    badge: 'Mouvements 🦶',
    icon: 'sparkles',
    advice: 'Un lien quotidien chaleureux et rassurant qui s’installe.'
  },
  {
    id: 'm-morpho',
    title: 'Échographie Morphologique T2 (Niveau II)',
    stageName: 'Anatomie Détaillée (Semaine 22)',
    phaseNumber: 4,
    targetDate: '2027-03-20T11:00:00',
    displayDate: 'Mi-Mars (Semaine 22)',
    category: 'pregnancy',
    description: 'Vérification complète de tous les organes, du profil, des membres et de la vitalité fœtale.',
    badge: 'Écho Morpho T2 🖥️',
    icon: 'monitor',
    advice: 'Examen de 45 minutes permettant de voir bébé en haute résolution.'
  },
  {
    id: 'm-glucose',
    title: 'Dépistage du Diabète Gestationnel',
    stageName: 'Bilan Métabolique (Semaines 24–28)',
    phaseNumber: 4,
    targetDate: '2027-04-17T08:30:00',
    displayDate: 'Mi-Avril (Semaine 26)',
    category: 'pregnancy',
    description: 'Test de tolérance au glucose pour assurer un métabolisme sain et une croissance harmonieuse.',
    badge: 'Test Glucose 🥤',
    icon: 'flask',
    advice: 'Prévoir un livre ou de quoi vous détendre durant les 2 heures d’attente.'
  },
  {
    id: 'm-growth',
    title: 'Échographie de Croissance & Placenta',
    stageName: 'Évolution T3 (Semaine 32)',
    phaseNumber: 4,
    targetDate: '2027-05-29T10:00:00',
    displayDate: 'Fin Mai (Semaine 32)',
    category: 'pregnancy',
    description: 'Estimation du poids fœtal, du volume de liquide amniotique et de la position placentaire.',
    badge: 'Courbe T3 📈',
    icon: 'trending-up',
    advice: 'Bébé commence à prendre ses formes rondes pour la naissance.'
  },
  {
    id: 'm-sgb',
    title: 'Dépistage SGB & Projet de Naissance',
    stageName: 'Dernière Ligne Droite (Semaines 35–37)',
    phaseNumber: 4,
    targetDate: '2027-06-26T09:00:00',
    displayDate: 'Fin Juin (Semaine 36)',
    category: 'pregnancy',
    description: 'Prélèvement streptocoque B, consultation anesthésique et finalisation de la valise de maternité.',
    badge: 'Projet Naissance 🧳',
    icon: 'file-check',
    advice: 'La chambre et la valise de bébé sont fin prêtes.'
  },
  {
    id: 'm-birth',
    title: 'Arrivée de Bébé : Travail & Accouchement',
    stageName: 'Bienvenue au Monde ! 🎉',
    phaseNumber: 4,
    targetDate: '2027-07-20T00:00:00',
    displayDate: 'Mi-Juillet (Semaines 37–41)',
    category: 'birth',
    description: 'Aboutissement victorieux du parcours de FIV : rencontre avec votre petit garçon tant attendu !',
    badge: 'Naissance du Bébé 🌟',
    icon: 'party-popper',
    advice: 'Toutes les étapes franchies avec courage et succès mènent à cet instant magique.'
  }
];

export const COUNTDOWN_MILESTONES_EN: CountdownMilestone[] = [
  {
    id: 'm-sis',
    title: 'Hysteroscopy & Saline Infusion Sonogram (SIS)',
    stageName: 'Uterine Cavity Optimization',
    phaseNumber: 2,
    targetDate: '2026-10-15T08:00:00',
    displayDate: 'October 15 at 08:00 AM',
    category: 'procedure',
    description: 'Uterine cavity assessment and gentle debris removal at Gramercy Surgery Center.',
    badge: 'Key Procedure',
    icon: 'hospital',
    advice: 'Arrival recommended by 07:30 AM on the 10th floor with official photo ID.'
  },
  {
    id: 'm-pgta',
    title: 'PGT-A Genetic Screening Results',
    stageName: 'Chromosomal Health & Gender',
    phaseNumber: 2,
    targetDate: '2026-10-23T09:00:00',
    displayDate: 'October 23 to 28',
    category: 'lab',
    description: 'Portal release of chromosomal health reports for the 8 blastocysts and boy confirmation.',
    badge: 'PGT-A Genetics',
    icon: 'dna',
    advice: 'Monitor patient portal and email notifications closely.'
  },
  {
    id: 'm-fet',
    title: 'Frozen Embryo Transfer (FET)',
    stageName: 'Blastocyst Implantation Day',
    phaseNumber: 2,
    targetDate: '2026-10-31T10:30:00',
    displayDate: 'Late October / Early November',
    category: 'fet',
    description: 'Ultrasound-guided transfer of highest grade euploid male blastocyst into the prepared endometrium.',
    badge: 'FET Day 🌱',
    icon: 'baby',
    advice: 'Gentle, relaxing day of rest following the procedure.'
  },
  {
    id: 'm-hcg',
    title: 'Serial Beta-hCG Bloodwork',
    stageName: 'Implantation Confirmation',
    phaseNumber: 3,
    targetDate: '2026-11-10T08:00:00',
    displayDate: 'November 08 to 12 (9–14d post-FET)',
    category: 'lab',
    description: 'Serial blood draws 48 hours apart to confirm rising pregnancy hormone levels.',
    badge: 'Beta-hCG Levels 🩸',
    icon: 'drop',
    advice: 'Morning blood draw at RMA East Side with results available same afternoon.'
  },
  {
    id: 'm-first-echo',
    title: 'First Ultrasound & Heartbeat Check',
    stageName: 'Early Viability (Weeks 5–8)',
    phaseNumber: 3,
    targetDate: '2026-11-28T09:15:00',
    displayDate: 'Late November (Week 6)',
    category: 'pregnancy',
    description: 'Visualizing gestational sac, yolk sac, and first joyful baby heartbeat flutter.',
    badge: 'First Heartbeat 💓',
    icon: 'heart-pulse',
    advice: 'Emotional milestone, you may record the sound of the heart rate.'
  },
  {
    id: 'm-graduation',
    title: 'RMA Graduation & OB/GYN Transfer',
    stageName: 'Fertility Clinic Graduation (Weeks 8–10)',
    phaseNumber: 3,
    targetDate: '2026-12-19T10:00:00',
    displayDate: 'Mid-December (Week 9)',
    category: 'pregnancy',
    description: 'Official completion of fertility care at RMA of New York and transition to primary OB/GYN.',
    badge: 'RMA Graduate 🎓',
    icon: 'award',
    advice: 'Full medical dossier seamlessly transferred to your delivery hospital.'
  },
  {
    id: 'm-nipt',
    title: 'First Trimester Screening & NIPT',
    stageName: 'Prenatal Screening (Weeks 11–13)',
    phaseNumber: 4,
    targetDate: '2027-01-10T09:00:00',
    displayDate: 'Early January (Week 12)',
    category: 'pregnancy',
    description: 'Nuchal translucency scan and maternal blood non-invasive prenatal test.',
    badge: 'First Trimester Scan 🩺',
    icon: 'activity',
    advice: 'Comprehensive first official prenatal appointment with your obstetrician.'
  },
  {
    id: 'm-kick',
    title: 'First Fetal Flutters & Movements',
    stageName: 'Quickening (Weeks 18–20)',
    phaseNumber: 4,
    targetDate: '2027-02-27T12:00:00',
    displayDate: 'Late February (Week 19)',
    category: 'pregnancy',
    description: 'First physical sensations of baby movement (tiny kicks and butterflies).',
    badge: 'Baby Kicks 🦶',
    icon: 'sparkles',
    advice: 'A wonderful, reassuring daily bond begins to flourish.'
  },
  {
    id: 'm-morpho',
    title: 'Anatomy Morphology Scan (Level II)',
    stageName: 'Detailed Anatomy (Week 22)',
    phaseNumber: 4,
    targetDate: '2027-03-20T11:00:00',
    displayDate: 'Mid-March (Week 22)',
    category: 'pregnancy',
    description: 'In-depth 45-minute organ, bone, and growth ultrasound examination.',
    badge: 'Level II Scan 🖥️',
    icon: 'monitor',
    advice: 'High-resolution visualization of your growing baby boy.'
  },
  {
    id: 'm-glucose',
    title: 'Gestational Diabetes Screening',
    stageName: 'Metabolic Health (Weeks 24–28)',
    phaseNumber: 4,
    targetDate: '2027-04-17T08:30:00',
    displayDate: 'Mid-April (Week 26)',
    category: 'pregnancy',
    description: 'Oral glucose tolerance screening ensuring optimal maternal and fetal metabolic health.',
    badge: 'Glucose Test 🥤',
    icon: 'flask',
    advice: 'Bring a good book or podcast while waiting during the test interval.'
  },
  {
    id: 'm-growth',
    title: 'Third Trimester Growth & Placenta Scan',
    stageName: 'Growth Curve (Week 32)',
    phaseNumber: 4,
    targetDate: '2027-05-29T10:00:00',
    displayDate: 'Late May (Week 32)',
    category: 'pregnancy',
    description: 'Evaluating fetal weight percentile, amniotic fluid, and placental placement.',
    badge: 'T3 Growth Curve 📈',
    icon: 'trending-up',
    advice: 'Baby is accumulating healthy baby fat preparing for birth.'
  },
  {
    id: 'm-sgb',
    title: 'Group B Strep (GBS) & Birth Plan',
    stageName: 'Final Home Stretch (Weeks 35–37)',
    phaseNumber: 4,
    targetDate: '2027-06-26T09:00:00',
    displayDate: 'Late June (Week 36)',
    category: 'pregnancy',
    description: 'Standard GBS culture, anesthesia consultation, and hospital nursery bag prep.',
    badge: 'Birth Plan Ready 🧳',
    icon: 'file-check',
    advice: 'Nursery setup and hospital overnight bag are ready.'
  },
  {
    id: 'm-birth',
    title: 'Baby Homecoming: Labor & Delivery',
    stageName: 'Welcome to the World! 🎉',
    phaseNumber: 4,
    targetDate: '2027-07-20T00:00:00',
    displayDate: 'Mid-July (Weeks 37–41)',
    category: 'birth',
    description: 'The triumphant culmination of your IVF journey: holding your baby boy in your arms!',
    badge: 'Baby Born 🌟',
    icon: 'party-popper',
    advice: 'Every brave step throughout this journey leads to this miraculous moment.'
  }
];

export const PHASES_DATA_FR: PhaseInfo[] = [
  {
    id: 1,
    title: 'Phase 1 : Stimulation et ponction',
    subtitle: 'Stimulation ovarienne, monitorings réguliers et ponction folliculaire',
    dateRange: '19 sept. – 01 oct.',
    status: 'completed',
    progressPercent: 100,
    description: "Protocole de stimulation complet terminé avec un rendement remarquable de 42 ovocytes prélevés lors de la ponction du 1er octobre.",
    keyMetrics: [
      { label: 'Ovocytes prélevés', value: '42' },
      { label: 'Visites de contrôle', value: '2 monitorings' },
      { label: 'Statut', value: 'Terminée ✅' }
    ]
  },
  {
    id: 2,
    title: 'Phase 2 : Embryologie, PGT-A et préparation au FET',
    subtitle: 'Fécondation ICSI, vitrification, biopsie génétique et préparation utérine',
    dateRange: '02 oct. – Fin oct. / Début nov.',
    status: 'active',
    progressPercent: 65,
    description: "Phase actuellement en cours. 8 blastocystes vitrifiés de haute qualité. Plan de décongélation validé (Garçon). Hystéroscopie le 15 oct. et résultats PGT-A attendus 23–28 oct.",
    keyMetrics: [
      { label: 'Fécondés ICSI', value: '11 embryons' },
      { label: 'Blastocystes vitrifiés', value: '8 blastocystes' },
      { label: 'Choix de sexe', value: 'Garçon (Male)' },
      { label: 'Statut', value: 'Active ⚡' }
    ]
  },
  {
    id: 3,
    title: 'Phase 3 : Suivi de début de grossesse',
    subtitle: 'Prises de sang sériées Bêta-hCG, monitorings échographiques RMA et transition',
    dateRange: '08 nov. – Semaines 8–10',
    status: 'upcoming',
    progressPercent: 0,
    description: "Suivi médical rapproché post-transfert pour confirmer l'implantation, l'évolution du taux d'hCG et la première activité cardiaque fœtale.",
    keyMetrics: [
      { label: 'Dosages Bêta-hCG', value: '08–12 nov.' },
      { label: 'Échographies RMA', value: 'Semaines 5–8' },
      { label: 'Transition OB/GYN', value: 'Semaines 8–10' }
    ]
  },
  {
    id: 4,
    title: 'Phase 4 : Étapes obstétricales',
    subtitle: 'Grossesse à terme, dépistages prénataux et préparation à la naissance',
    dateRange: 'Semaines 06–08 à Semaines 37–41',
    status: 'upcoming',
    progressPercent: 0,
    description: "Parcours obstétrical complet avec l'obstétricien/gynécologue principal jusqu'à l'accouchement.",
    keyMetrics: [
      { label: 'Écho morphologique', value: 'Semaine 22' },
      { label: 'Dépistage DPNI', value: 'Sem. 11–13' },
      { label: 'Accouchement', value: 'Sem. 37–41' }
    ]
  }
];

export const PHASES_DATA_EN: PhaseInfo[] = [
  {
    id: 1,
    title: 'Phase 1: Ovarian Stimulation & Retrieval',
    subtitle: 'Controlled ovarian stimulation, regular monitoring, and egg retrieval',
    dateRange: 'Sept 19 – Oct 01',
    status: 'completed',
    progressPercent: 100,
    description: "Full stimulation protocol completed with an exceptional yield of 42 oocytes collected during the October 1 retrieval.",
    keyMetrics: [
      { label: 'Oocytes Retrieved', value: '42' },
      { label: 'Ultrasound Checks', value: '2 Monitorings' },
      { label: 'Status', value: 'Completed ✅' }
    ]
  },
  {
    id: 2,
    title: 'Phase 2: Embryology, PGT-A & FET Prep',
    subtitle: 'ICSI fertilization, blastocyst culture, biopsy, vitrification & uterine prep',
    dateRange: 'Oct 02 – Late Oct / Early Nov',
    status: 'active',
    progressPercent: 65,
    description: "Currently active. 8 high-grade vitrified blastocysts. Thaw plan confirmed for Boy (Male). Hysteroscopy on Oct 15 and PGT-A results expected Oct 23–28.",
    keyMetrics: [
      { label: 'Fertilized ICSI', value: '11 Embryos' },
      { label: 'Vitrified Blastocysts', value: '8 Blastocysts' },
      { label: 'Gender Choice', value: 'Boy (Male)' },
      { label: 'Status', value: 'Active ⚡' }
    ]
  },
  {
    id: 3,
    title: 'Phase 3: Early Pregnancy Monitoring',
    subtitle: 'Serial Beta-hCG bloodwork, early RMA ultrasounds & OB/GYN graduation',
    dateRange: 'Nov 08 – Weeks 8–10',
    status: 'upcoming',
    progressPercent: 0,
    description: "Close clinical surveillance following embryo transfer to confirm implantation, optimal hCG doubling, and fetal heartbeat.",
    keyMetrics: [
      { label: 'Beta-hCG Draws', value: 'Nov 08–12' },
      { label: 'RMA Ultrasounds', value: 'Weeks 5–8' },
      { label: 'OB/GYN Transfer', value: 'Weeks 8–10' }
    ]
  },
  {
    id: 4,
    title: 'Phase 4: Full-Term Obstetric Care',
    subtitle: 'Full-term pregnancy milestones, anatomy scans, and birth preparation',
    dateRange: 'Weeks 06–08 to Weeks 37–41',
    status: 'upcoming',
    progressPercent: 0,
    description: "Complete prenatal and obstetric journey through delivery with your primary obstetrician.",
    keyMetrics: [
      { label: 'Anatomy Scan', value: 'Week 22' },
      { label: 'NIPT Screening', value: 'Weeks 11–13' },
      { label: 'Delivery & Birth', value: 'Weeks 37–41' }
    ]
  }
];

export const TIMELINE_EVENTS_FR: TimelineEvent[] = [
  // Phase 1
  {
    id: 'p1-1',
    phaseId: 1,
    date: '19 sept.',
    time: 'Quotidien',
    title: 'Suppression ovarienne',
    icon: 'pill',
    category: 'medication',
    completed: true,
    statusText: 'Effectué',
    summary: 'Début du Nortrel quotidien pour mettre les ovaires au repos et synchroniser la cohorte folliculaire.',
    details: 'Prise orale de Nortrel chaque jour à la même heure.'
  },
  {
    id: 'p1-2',
    phaseId: 1,
    date: '21 sept.',
    time: 'Soir',
    title: 'Début de la stimulation ovarienne',
    icon: 'syringe',
    category: 'medication',
    completed: true,
    statusText: 'Effectué',
    summary: 'Injections quotidiennes de Gonal-F 150 UI + Menopur 150 UI.',
    details: 'Recrutement et croissance simultanée des follicules ovariens sous stimulation combinée FSH + LH.'
  },
  {
    id: 'p1-3',
    phaseId: 1,
    date: '23 sept.',
    time: '07h00',
    title: 'Visite de contrôle 1',
    icon: 'drop',
    category: 'appointment',
    completed: true,
    statusText: 'Effectué',
    summary: 'Prise de sang hormonale (Estradiol, LH, Progestérone) et échographie endovaginale.',
    location: 'RMA East Side'
  },
  {
    id: 'p1-4',
    phaseId: 1,
    date: '25 sept.',
    time: 'Matin',
    title: "Ajout de l'antagoniste",
    icon: 'pill',
    category: 'medication',
    completed: true,
    statusText: 'Effectué',
    summary: 'Ajout de Cetrotide 0,25 mg quotidien pour bloquer tout pic prématuré de LH et préserver les ovocytes.',
    details: 'Injection sous-cutanée journalière.'
  },
  {
    id: 'p1-5',
    phaseId: 1,
    date: '27 sept.',
    time: '07h30',
    title: 'Visite de contrôle 2',
    icon: 'drop',
    category: 'appointment',
    completed: true,
    statusText: 'Effectué',
    summary: 'Deuxième monitorage échographique et bilan hormonal complet.',
    location: 'RMA East Side'
  },
  {
    id: 'p1-6',
    phaseId: 1,
    date: '29 sept.',
    time: '23h00 précises',
    title: 'Injection de déclenchement exécutée',
    icon: 'sparkles',
    category: 'medication',
    completed: true,
    statusText: 'Exécuté à 23h00',
    summary: 'Trigger shot d’induction de la maturation ovocytaire finale, calé exactement 36h avant la ponction.',
    details: 'Timing critique respecté scrupuleusement à 23h00.'
  },
  {
    id: 'p1-7',
    phaseId: 1,
    date: '30 sept.',
    time: '08h45',
    title: 'Contrôle biologique pré-ponction',
    icon: 'flask',
    category: 'lab',
    completed: true,
    statusText: 'Effectué',
    summary: 'Vérification pré-opératoire et confirmation biologique de la bonne réponse au déclenchement.',
    location: 'RMA East Side'
  },
  {
    id: 'p1-8',
    phaseId: 1,
    date: '01 oct.',
    time: 'Matin',
    title: 'Ponction ovocytaire (Egg Retrieval)',
    icon: 'egg',
    category: 'surgery',
    completed: true,
    statusText: '42 ovocytes prélevés 🎉',
    summary: 'Procédure sous sédation terminée avec un total exceptionnel de 42 ovocytes récoltés.',
    details: '42 ovocytes prélevés en salle d’intervention, transférés immédiatement au laboratoire d’embryologie.'
  },

  // Phase 2
  {
    id: 'p2-1',
    phaseId: 2,
    date: '02 oct.',
    time: 'Jour J+1',
    title: 'Fécondation par ICSI',
    icon: 'microscope',
    category: 'lab',
    completed: true,
    statusText: '11 embryons fécondés',
    summary: 'Résultat : 42 ovocytes prélevés ➔ 34 matures (MII) ➔ 11 fécondés avec succès par micro-injection ICSI.',
    details: 'Excellente sélection des spermatozoïdes et injection directe dans chaque ovocyte mature.'
  },
  {
    id: 'p2-2',
    phaseId: 2,
    date: '06–08 oct.',
    time: 'J5 à J7',
    title: 'Culture blastocytaire et biopsie du trophectoderme',
    icon: 'dna',
    category: 'lab',
    completed: true,
    statusText: 'Biopsies réalisées',
    summary: 'Développement embryonnaire en milieu contrôlé jusqu’au stade blastocyste expansé. Prélèvement de cellules de trophectoderme pour analyse génétique.',
    details: 'Prélèvement sécurisé sans toucher à la masse cellulaire interne destinée au futur bébé.'
  },
  {
    id: 'p2-3',
    phaseId: 2,
    date: '09 oct.',
    time: 'Laboratoire',
    title: 'Rendement du laboratoire & Vitrification',
    icon: 'snowflake',
    category: 'lab',
    completed: true,
    statusText: '8 blastocystes vitrifiés ❄️',
    summary: 'Succès majeur : 8 blastocystes de haute qualité biopsiés et vitrifiés avec cryoconservation sécurisée.',
    details: 'Les 8 blastocystes sont conservés en azote liquide en attendant les résultats génétiques PGT-A.'
  },
  {
    id: 'p2-4',
    phaseId: 2,
    date: '11 oct.',
    time: '09h15',
    title: 'Échographie / Bilan de base FET',
    icon: 'stethoscope',
    category: 'appointment',
    completed: true,
    statusText: 'Effectué',
    summary: 'Échographie de contrôle pelvien post-ponction et reprise de la suppression quotidienne par Nortrel.',
    location: 'RMA East Side',
    details: 'Vérification de la régression ovarienne et mise en place du repos utérin avec Nortrel.'
  },
  {
    id: 'p2-5',
    phaseId: 2,
    date: '13 oct.',
    time: 'Portail RMA',
    title: 'Plan de décongélation et choix du sexe',
    icon: 'file-check',
    category: 'milestone',
    completed: true,
    statusText: 'Validé : Garçon (Male) 👦',
    summary: 'Formulaire officiel soumis via le portail avec préférence confirmée pour un Garçon (Male).',
    details: 'Le laboratoire sélectionnera le blastocyste euploïde masculin de la plus haute qualité morphologique pour le transfert.'
  },
  {
    id: 'p2-6',
    phaseId: 2,
    date: '15 oct.',
    time: '08h00',
    title: 'Hystéroscopie & Hystérosonographie (SIS)',
    icon: 'hospital',
    category: 'surgery',
    completed: false,
    statusText: 'Rendez-vous capital 🏥',
    summary: 'Hysteroscopy (Debris Removal) au Gramercy Surgery Center et Hystérosonographie par perfusion de sérum physiologique (SIS) à 08h00.',
    location: 'Gramercy Surgery Center (380 2nd Ave, Suite 1000, 10th Floor, NY 10010) & RMA East Side',
    details: 'Évaluation minutieuse de la cavité utérine, élimination des débris tissulaires éventuels pour maximiser les chances d’implantation.',
    importantNotes: [
      'Présentation à 08h00 précises',
      'Gramercy Surgery Center : 380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010',
      'Prévoir un accompagnant si une sédation légère est administrée',
      'Apporter pièce d’identité, carte d’assurance et dossier RMA'
    ]
  },
  {
    id: 'p2-7',
    phaseId: 2,
    date: 'Mi-octobre (~14–16 oct. / 28 oct.)',
    time: 'Quotidien',
    title: 'Préparation endométriale (Estrogènes)',
    icon: 'pill',
    category: 'medication',
    completed: false,
    statusText: 'En cours / Prochain palier',
    summary: 'Début du protocole d’estrogènes par voie orale / cutanée (patchs ou comprimés) pour épaissir la muqueuse utérine (endomètre en triple feuillet > 7-8 mm).',
    details: 'Objectif : préparer un endomètre réceptif et synchronisé pour l’accueil du blastocyste.'
  },
  {
    id: 'p2-8',
    phaseId: 2,
    date: '23–28 oct.',
    time: 'Fenêtre portail',
    title: 'Réception des résultats PGT-A',
    icon: 'dna',
    category: 'lab',
    completed: false,
    statusText: 'Fenêtre imminente 🧬',
    summary: 'Publication sur le portail des rapports de génétique préimplantatoire pour les 8 blastocystes biopsiés, suivie de l’appel de protocole avec l’équipe médicale.',
    details: 'Identification des blastocystes euploïdes normaux et confirmation du sexe masculin de premier choix.'
  },
  {
    id: 'p2-9',
    phaseId: 2,
    date: 'Fin oct. / Début nov.',
    time: 'Date à confirmer',
    title: 'Transfert d’embryon congelé (FET)',
    icon: 'baby',
    category: 'surgery',
    completed: false,
    statusText: 'Grand Moment 🌱',
    summary: 'Transfert doux sous guidage échographique d’un blastocyste euploïde masculin de qualité optimale.',
    location: 'RMA of New York',
    details: 'Procédure rapide et indolore. Repos préconisé le jour même, début du soutien de la phase lutéale.'
  },

  // Phase 3
  {
    id: 'p3-1',
    phaseId: 3,
    date: '08–12 nov.',
    time: '9 à 14 jours post-FET',
    title: 'Dosage sérié de Bêta-hCG',
    icon: 'drop',
    category: 'lab',
    completed: false,
    statusText: 'Confirmation d’implantation 🩸',
    summary: 'Prises de sang sériées espacées de 48h pour quantifier la Bêta-hCG plasmatique et vérifier son doublement harmonieux.',
    location: 'RMA East Side'
  },
  {
    id: 'p3-2',
    phaseId: 3,
    date: 'Semaines 5–8',
    time: 'Hebdomadaire',
    title: 'Suivi échographique précoce',
    icon: 'heart-pulse',
    category: 'appointment',
    completed: false,
    statusText: 'Premier battement de cœur 💓',
    summary: 'Échographies et prises de sang hebdomadaires : visualisation du sac gestationnel, de la vésicule vitelline et du rythme cardiaque embryonnaire.',
    location: 'RMA East Side'
  },
  {
    id: 'p3-3',
    phaseId: 3,
    date: 'Semaines 8–10',
    time: 'Consultation clé',
    title: 'Diplôme RMA & Transfert vers l’OB/GYN',
    icon: 'graduation-cap',
    category: 'milestone',
    completed: false,
    statusText: 'Remise du dossier 🎓',
    summary: 'Fin de la prise en charge en clinique de fertilité RMA et transfert officiel de Fatou vers son cabinet d’obstétrique-gynécologie habituel.',
    details: 'Clôture du dossier de PMA avec félicitations chaleureuses de l’équipe soignante de RMA.'
  },

  // Phase 4
  {
    id: 'p4-1',
    phaseId: 4,
    date: 'Semaines 06–08',
    time: '1er trimestre',
    title: 'Échographie de viabilité',
    icon: 'heart',
    category: 'pregnancy',
    completed: false,
    summary: 'Échographie prénatale initiale chez le praticien pour confirmer la viabilité et dater avec exactitude le terme.'
  },
  {
    id: 'p4-2',
    phaseId: 4,
    date: 'Semaines 11–13',
    time: '1er trimestre',
    title: 'Dépistage du premier trimestre & DPNI',
    icon: 'stethoscope',
    category: 'pregnancy',
    completed: false,
    summary: 'Dépistage Précoce Non Invasif (DPNI / NIPT), mesure de la clarté nucale par échographie et bilan sanguin prénatal.'
  },
  {
    id: 'p4-3',
    phaseId: 4,
    date: 'Semaine 12',
    time: 'Obstétrique',
    title: 'Premier rendez-vous prénatal complet',
    icon: 'hospital',
    category: 'pregnancy',
    completed: false,
    summary: 'Premier rendez-vous officiel approfondi avec l’obstétricien/gynécologue principal pour planifier tout le parcours de maternité.'
  },
  {
    id: 'p4-4',
    phaseId: 4,
    date: 'Semaines 18–20',
    time: '2e trimestre',
    title: 'Premiers mouvements fœtaux ressentis',
    icon: 'sparkles',
    category: 'pregnancy',
    completed: false,
    summary: 'Sensation des premiers petits coups et mouvements du bébé (quickening).'
  },
  {
    id: 'p4-5',
    phaseId: 4,
    date: 'Semaine 22',
    time: '2e trimestre',
    title: 'Échographie morphologique détaillée (Niveau II)',
    icon: 'monitor',
    category: 'pregnancy',
    completed: false,
    summary: 'Examen échographique anatomique approfondi organe par organe, biométrie fœtale et vérification du bien-être général.'
  },
  {
    id: 'p4-6',
    phaseId: 4,
    date: 'Semaines 24–28',
    time: 'Fin 2e trimestre',
    title: 'Dépistage du diabète gestationnel (HGPO)',
    icon: 'cup-soda',
    category: 'pregnancy',
    completed: false,
    summary: 'Test de provocation au glucose par voie orale pour écarter tout risque de diabète gestationnel maternel.'
  },
  {
    id: 'p4-7',
    phaseId: 4,
    date: 'Semaine 32',
    time: '3e trimestre',
    title: 'Échographie de croissance fœtale et du placenta',
    icon: 'trending-up',
    category: 'pregnancy',
    completed: false,
    summary: 'Contrôle des courbes de croissance pondérale du bébé, de la quantité de liquide amniotique et de l’insertion placentaire.'
  },
  {
    id: 'p4-8',
    phaseId: 4,
    date: 'Semaines 35–37',
    time: '3e trimestre',
    title: 'Dépistage du SGB et révision du projet de naissance',
    icon: 'flask',
    category: 'pregnancy',
    completed: false,
    summary: 'Prélèvement vaginal pour le streptocoque du groupe B (SGB), consultation anesthésique et finalisation du projet d’accouchement.'
  },
  {
    id: 'p4-9',
    phaseId: 4,
    date: 'Semaines 37–41',
    time: 'Terme',
    title: 'Travail, accouchement et transition post-partum',
    icon: 'party-popper',
    category: 'pregnancy',
    completed: false,
    summary: 'Arrivée à terme, travail, naissance du bébé et accompagnement bienveillant lors du séjour en maternité.',
    statusText: 'Bienvenue au monde 🎉'
  }
];

export const TIMELINE_EVENTS_EN: TimelineEvent[] = [
  // Phase 1
  {
    id: 'p1-1',
    phaseId: 1,
    date: 'Sept 19',
    time: 'Daily',
    title: 'Ovarian Suppression',
    icon: 'pill',
    category: 'medication',
    completed: true,
    statusText: 'Completed',
    summary: 'Daily Nortrel initiation to place ovaries in resting state and synchronize the follicular cohort.',
    details: 'Oral daily Nortrel at consistent time.'
  },
  {
    id: 'p1-2',
    phaseId: 1,
    date: 'Sept 21',
    time: 'Evening',
    title: 'Ovarian Stimulation Start',
    icon: 'syringe',
    category: 'medication',
    completed: true,
    statusText: 'Completed',
    summary: 'Daily subcutaneous injections of Gonal-F 150 IU + Menopur 150 IU.',
    details: 'Recruiting multiple follicles under combined FSH + LH stimulation.'
  },
  {
    id: 'p1-3',
    phaseId: 1,
    date: 'Sept 23',
    time: '07:00 AM',
    title: 'Monitoring Visit 1',
    icon: 'drop',
    category: 'appointment',
    completed: true,
    statusText: 'Completed',
    summary: 'Hormonal bloodwork (Estradiol, LH, Progesterone) and transvaginal ultrasound monitoring.',
    location: 'RMA East Side'
  },
  {
    id: 'p1-4',
    phaseId: 1,
    date: 'Sept 25',
    time: 'Morning',
    title: 'GnRH Antagonist Added',
    icon: 'pill',
    category: 'medication',
    completed: true,
    statusText: 'Completed',
    summary: 'Daily Cetrotide 0.25 mg added to block premature LH surges.',
    details: 'Subcutaneous morning injection.'
  },
  {
    id: 'p1-5',
    phaseId: 1,
    date: 'Sept 27',
    time: '07:30 AM',
    title: 'Monitoring Visit 2',
    icon: 'drop',
    category: 'appointment',
    completed: true,
    statusText: 'Completed',
    summary: 'Second pelvic ultrasound check and hormone profile evaluation.',
    location: 'RMA East Side'
  },
  {
    id: 'p1-6',
    phaseId: 1,
    date: 'Sept 29',
    time: '11:00 PM sharp',
    title: 'Trigger Shot Executed',
    icon: 'sparkles',
    category: 'medication',
    completed: true,
    statusText: 'Executed at 11:00 PM',
    summary: 'Final maturation trigger timed precisely 36 hours prior to scheduled egg retrieval.',
    details: 'Time-critical trigger successfully administered.'
  },
  {
    id: 'p1-7',
    phaseId: 1,
    date: 'Sept 30',
    time: '08:45 AM',
    title: 'Pre-Retrieval Lab Verification',
    icon: 'flask',
    category: 'lab',
    completed: true,
    statusText: 'Completed',
    summary: 'Biological check verifying successful response to trigger shot.',
    location: 'RMA East Side'
  },
  {
    id: 'p1-8',
    phaseId: 1,
    date: 'Oct 01',
    time: 'Morning',
    title: 'Oocyte Retrieval (Egg Retrieval)',
    icon: 'egg',
    category: 'surgery',
    completed: true,
    statusText: '42 Oocytes Retrieved 🎉',
    summary: 'Outpatient procedure under twilight sedation resulting in an outstanding harvest of 42 oocytes.',
    details: 'All 42 oocytes immediately transferred to the RMA embryology lab.'
  },

  // Phase 2
  {
    id: 'p2-1',
    phaseId: 2,
    date: 'Oct 02',
    time: 'Day 1 Post-Retrieval',
    title: 'ICSI Fertilization',
    icon: 'microscope',
    category: 'lab',
    completed: true,
    statusText: '11 Embryos Fertilized',
    summary: 'Yield: 42 retrieved ➔ 34 mature (MII) ➔ 11 successfully fertilized with ICSI micro-injection.',
    details: 'Intracytoplasmic sperm injection performing optimal single sperm selection.'
  },
  {
    id: 'p2-2',
    phaseId: 2,
    date: 'Oct 06–08',
    time: 'Day 5 to Day 7',
    title: 'Blastocyst Culture & Trophectoderm Biopsy',
    icon: 'dna',
    category: 'lab',
    completed: true,
    statusText: 'Biopsies Completed',
    summary: 'Incubator culture to expanded blastocyst stage. Trophectoderm cell biopsy for PGT-A.',
    details: 'Precise non-invasive biopsy leaving inner cell mass completely untouched.'
  },
  {
    id: 'p2-3',
    phaseId: 2,
    date: 'Oct 09',
    time: 'Embryology Lab',
    title: 'Lab Yield & Cryopreservation (Vitrification)',
    icon: 'snowflake',
    category: 'lab',
    completed: true,
    statusText: '8 Blastocysts Vitrified ❄️',
    summary: 'Major success: 8 high-grade blastocysts safely vitrified in liquid nitrogen awaiting PGT-A results.',
    details: 'Cryopreservation preserves viability without cellular damage.'
  },
  {
    id: 'p2-4',
    phaseId: 2,
    date: 'Oct 11',
    time: '09:15 AM',
    title: 'FET Baseline Ultrasound & Nortrel Resumed',
    icon: 'stethoscope',
    category: 'appointment',
    completed: true,
    statusText: 'Completed',
    summary: 'Post-retrieval pelvic scan at 09:15 AM and resumption of daily Nortrel ovarian suppression.',
    location: 'RMA East Side'
  },
  {
    id: 'p2-5',
    phaseId: 2,
    date: 'Oct 13',
    time: 'RMA Portal',
    title: 'Thaw Plan & Gender Selection Completed',
    icon: 'file-check',
    category: 'milestone',
    completed: true,
    statusText: 'Confirmed: Boy (Male) 👦',
    summary: 'Official form completed on portal choosing preference for a Boy (Male).',
    details: 'RMA embryology team instructed to pick the highest grade euploid male blastocyst.'
  },
  {
    id: 'p2-6',
    phaseId: 2,
    date: 'Oct 15',
    time: '08:00 AM',
    title: 'Hysteroscopy & Saline Infusion Sonohysterography (SIS)',
    icon: 'hospital',
    category: 'surgery',
    completed: false,
    statusText: 'Key Procedure 🏥',
    summary: 'Hysteroscopy (Debris Removal) at Gramercy Surgery Center and Saline Infusion Sonohysterography (SIS) at 08:00 AM.',
    location: 'Gramercy Surgery Center (380 2nd Ave, Suite 1000, 10th Floor, NY 10010) & RMA East Side',
    details: 'Ensuring clean, receptive uterine lining and removing any residual debris before transfer.',
    importantNotes: [
      'Present at 08:00 AM sharp',
      'Gramercy Surgery Center: 380 2nd Avenue, Suite 1000, 10th Floor, New York, NY 10010',
      'Accompanying adult recommended for post-procedure discharge',
      'Bring photo ID, insurance card, and RMA paperwork'
    ]
  },
  {
    id: 'p2-7',
    phaseId: 2,
    date: 'Mid-October (~Oct 14–16 / Oct 28)',
    time: 'Daily',
    title: 'Endometrial Lining Preparation (Estrogen)',
    icon: 'pill',
    category: 'medication',
    completed: false,
    statusText: 'Active / Next Phase',
    summary: 'Starting oral / transdermal estrogen protocol to build thick, trilaminar endometrial lining (> 7-8 mm).',
    details: 'Goal: synchronizing uterine lining for optimal blastocyst acceptance.'
  },
  {
    id: 'p2-8',
    phaseId: 2,
    date: 'Oct 23–28',
    time: 'Portal Window',
    title: 'PGT-A Genetic Screening Results',
    icon: 'dna',
    category: 'lab',
    completed: false,
    statusText: 'Imminent Window 🧬',
    summary: 'Portal release of preimplantation genetic test reports for all 8 blastocysts, followed by protocol call with clinical team.',
    details: 'Identifying euploid blastocysts and confirming optimal male candidate.'
  },
  {
    id: 'p2-9',
    phaseId: 2,
    date: 'Late Oct / Early Nov',
    time: 'Target Date TBD',
    title: 'Frozen Embryo Transfer (FET)',
    icon: 'baby',
    category: 'surgery',
    completed: false,
    statusText: 'Big Milestone 🌱',
    summary: 'Gentle ultrasound-guided transfer of selected euploid male blastocyst.',
    location: 'RMA of New York',
    details: 'Quick, painless procedure followed by peaceful rest and luteal phase support.'
  },

  // Phase 3
  {
    id: 'p3-1',
    phaseId: 3,
    date: 'Nov 08–12',
    time: '9 to 14 days post-FET',
    title: 'Serial Beta-hCG Pregnancy Test',
    icon: 'drop',
    category: 'lab',
    completed: false,
    statusText: 'Implantation Confirmation 🩸',
    summary: 'Serial blood draws spaced 48 hours apart measuring quantitative hCG rise.',
    location: 'RMA East Side'
  },
  {
    id: 'p3-2',
    phaseId: 3,
    date: 'Weeks 5–8',
    time: 'Weekly',
    title: 'Early RMA Ultrasound Monitoring',
    icon: 'heart-pulse',
    category: 'appointment',
    completed: false,
    statusText: 'First Heartbeat 💓',
    summary: 'Weekly ultrasounds and bloodwork visualizing gestational sac, yolk sac, and baby heartbeat.',
    location: 'RMA East Side'
  },
  {
    id: 'p3-3',
    phaseId: 3,
    date: 'Weeks 8–10',
    time: 'Milestone Consultation',
    title: 'RMA Graduation & Transfer to OB/GYN',
    icon: 'graduation-cap',
    category: 'milestone',
    completed: false,
    statusText: 'Graduation Day 🎓',
    summary: 'Successful completion of fertility care at RMA of New York and formal handover to primary obstetrician.',
    details: 'Fertility dossier successfully concluded with warm congratulations from RMA team.'
  },

  // Phase 4
  {
    id: 'p4-1',
    phaseId: 4,
    date: 'Weeks 06–08',
    time: 'First Trimester',
    title: 'Early Viability Scan',
    icon: 'heart',
    category: 'pregnancy',
    completed: false,
    summary: 'Initial prenatal ultrasound with primary care provider confirming dating and viability.'
  },
  {
    id: 'p4-2',
    phaseId: 4,
    date: 'Weeks 11–13',
    time: 'First Trimester',
    title: 'First Trimester Screening & NIPT',
    icon: 'stethoscope',
    category: 'pregnancy',
    completed: false,
    summary: 'NIPT maternal blood genetic testing, nuchal translucency scan, and baseline prenatal panel.'
  },
  {
    id: 'p4-3',
    phaseId: 4,
    date: 'Week 12',
    time: 'Obstetric Care',
    title: 'First Comprehensive Prenatal Appointment',
    icon: 'hospital',
    category: 'pregnancy',
    completed: false,
    summary: 'First full intake and maternity roadmap consultation with primary obstetrician.'
  },
  {
    id: 'p4-4',
    phaseId: 4,
    date: 'Weeks 18–20',
    time: 'Second Trimester',
    title: 'First Fetal Movements Felt',
    icon: 'sparkles',
    category: 'pregnancy',
    completed: false,
    summary: 'Feeling baby flutters and first kicks (quickening).'
  },
  {
    id: 'p4-5',
    phaseId: 4,
    date: 'Week 22',
    time: 'Second Trimester',
    title: 'Level II Detailed Anatomy Morphology Ultrasound',
    icon: 'monitor',
    category: 'pregnancy',
    completed: false,
    summary: 'Comprehensive 45-minute anatomy evaluation of all baby organs, profile, and biometry.'
  },
  {
    id: 'p4-6',
    phaseId: 4,
    date: 'Weeks 24–28',
    time: 'Late 2nd Trimester',
    title: 'Gestational Diabetes Glucose Screening',
    icon: 'cup-soda',
    category: 'pregnancy',
    completed: false,
    summary: 'Oral glucose tolerance testing ensuring optimal maternal metabolic health.'
  },
  {
    id: 'p4-7',
    phaseId: 4,
    date: 'Week 32',
    time: 'Third Trimester',
    title: 'Fetal Growth & Placenta Scan',
    icon: 'trending-up',
    category: 'pregnancy',
    completed: false,
    summary: 'Monitoring fetal weight velocity, amniotic fluid index, and placental location.'
  },
  {
    id: 'p4-8',
    phaseId: 4,
    date: 'Weeks 35–37',
    time: 'Third Trimester',
    title: 'Group B Strep (GBS) Screening & Birth Plan',
    icon: 'flask',
    category: 'pregnancy',
    completed: false,
    summary: 'GBS vaginal-rectal swab, anesthesia consult, and finalizing labor preferences.'
  },
  {
    id: 'p4-9',
    phaseId: 4,
    date: 'Weeks 37–41',
    time: 'Full Term',
    title: 'Labor, Delivery & Postpartum Transition',
    icon: 'party-popper',
    category: 'pregnancy',
    completed: false,
    summary: 'Labor, welcoming your baby boy into the world, and joyful hospital postpartum stay.',
    statusText: 'Welcome to the World 🎉'
  }
];

export const EMBRYOLOGY_FUNNEL_FR: EmbryologyFunnelStep[] = [
  {
    label: 'Ovocytes prélevés (Ponction 1er oct.)',
    count: 42,
    rate: '100%',
    description: 'Rendement exceptionnel obtenu après le protocole de stimulation Gonal-F + Menopur.',
    badge: 'Récolte majeure',
    color: 'from-stone-700 to-stone-800'
  },
  {
    label: 'Ovocytes matures (MII)',
    count: 34,
    rate: '81% de maturité',
    description: '34 ovocytes parvenus au stade de métaphase II, aptes à une fécondation assistée optimale.',
    badge: 'Maturité excellente',
    color: 'from-stone-600 to-stone-700'
  },
  {
    label: 'Embryons fécondés (ICSI 2 oct.)',
    count: 11,
    rate: 'Fécondation réussie',
    description: '11 embryons diploïdes présentant 2 pronoyaux (2PN) après micro-injection intracytoplasmique.',
    badge: 'Fécondation ICSI',
    color: 'from-amber-800 to-stone-800'
  },
  {
    label: 'Blastocystes vitrifiés (J5-J7)',
    count: 8,
    rate: '73% de blastulation',
    description: '8 blastocystes de grande qualité morphologique biopsiés pour PGT-A puis vitrifiés sans altération.',
    badge: 'Cryoconservation ❄️',
    color: 'from-[#3d2315] to-[#241207]'
  },
  {
    label: 'Sélection FET : Blastocyste euploïde masculin',
    count: 'En cours',
    rate: '23–28 oct.',
    description: 'Attente des résultats PGT-A pour choisir le blastocyste masculin euploïde de meilleur grade.',
    badge: 'Garçon (Male) 👦',
    color: 'from-[#523120] to-[#2b170c]'
  }
];

export const EMBRYOLOGY_FUNNEL_EN: EmbryologyFunnelStep[] = [
  {
    label: 'Oocytes Retrieved (Oct 01 Retrieval)',
    count: 42,
    rate: '100%',
    description: 'Exceptional harvest achieved following the Gonal-F + Menopur stimulation protocol.',
    badge: 'Major Harvest',
    color: 'from-stone-700 to-stone-800'
  },
  {
    label: 'Mature Oocytes (MII)',
    count: 34,
    rate: '81% Maturity',
    description: '34 oocytes reached metaphase II maturity, optimal for assisted fertilization.',
    badge: 'High Maturity',
    color: 'from-stone-600 to-stone-700'
  },
  {
    label: 'Fertilized Embryos (ICSI Oct 02)',
    count: 11,
    rate: 'Fertilization Success',
    description: '11 diploid embryos presenting 2 pronuclei (2PN) post intracytoplasmic sperm injection.',
    badge: 'ICSI Success',
    color: 'from-amber-800 to-stone-800'
  },
  {
    label: 'Vitrified Blastocysts (D5-D7)',
    count: 8,
    rate: '73% Blastulation',
    description: '8 top-quality blastocysts successfully biopsied for PGT-A and vitrified in liquid nitrogen.',
    badge: 'Vitrified ❄️',
    color: 'from-[#3d2315] to-[#241207]'
  },
  {
    label: 'FET Selection: Euploid Male Blastocyst',
    count: 'Pending',
    rate: 'Oct 23–28',
    description: 'Awaiting PGT-A reports to pick the highest graded euploid boy blastocyst for transfer.',
    badge: 'Boy (Male) 👦',
    color: 'from-[#523120] to-[#2b170c]'
  }
];

export const MEDICATIONS_FR: MedicationItem[] = [
  {
    id: 'nortrel',
    name: 'Nortrel (Suppression ovarienne)',
    dosage: '1 comprimé par jour',
    timing: 'Chaque soir à heure fixe (ex. 21h00)',
    purpose: 'Maintien de la mise au repos des ovaires et prévention de pics hormonaux spontanés',
    phase: 'Phase 2 (Actif actuellement)',
    currentStatus: 'active',
    instructions: "À continuer quotidiennement comme prescrit par l'équipe médicale jusqu’à instruction contraire."
  },
  {
    id: 'estrogenes',
    name: 'Estrogènes (Estradiol / Estrace ou Patchs)',
    dosage: 'Selon ordonnance spécifique',
    timing: 'À partir de mi-octobre (~14–16 oct. / 28 oct.)',
    purpose: 'Préparation et épaississement de la muqueuse endométriale (> 7-8 mm en triple feuillet)',
    phase: 'Phase 2 (Pré-transfert)',
    currentStatus: 'upcoming',
    instructions: 'Prendre selon la posologie croissante indiquée par l’infirmière coordinatrice de RMA.'
  },
  {
    id: 'progesterone',
    name: 'Progestérone (Injections IM de PIO / Ovules)',
    dosage: '50 mg ou 100 mg quotidien',
    timing: 'Démarrage précis environ 5 jours avant le FET',
    purpose: 'Ouverture de la fenêtre d’implantation et transformation sécrétoire de l’endomètre',
    phase: 'Phase 2 & Phase 3 (Soutien lutéal)',
    currentStatus: 'upcoming',
    instructions: 'L’heure de la première injection détermine précisément la synchronisation du transfert.'
  },
  {
    id: 'gonal-f',
    name: 'Gonal-F 150 UI',
    dosage: '150 UI par injection SC',
    timing: 'Du 21 au 29 sept.',
    purpose: 'Stimulation folliculaire par FSH recombinante',
    phase: 'Phase 1 (Stimulation)',
    currentStatus: 'archived',
    instructions: 'Protocole terminé avec succès (42 ovocytes prélevés).'
  },
  {
    id: 'menopur',
    name: 'Menopur 150 UI',
    dosage: '150 UI par injection SC',
    timing: 'Du 21 au 29 sept.',
    purpose: 'Stimulation combinée FSH + LH pour la maturation folliculaire',
    phase: 'Phase 1 (Stimulation)',
    currentStatus: 'archived',
    instructions: 'Protocole terminé avec succès.'
  },
  {
    id: 'cetrotide',
    name: 'Cetrotide 0,25 mg',
    dosage: '0,25 mg par injection SC',
    timing: 'Dès le 25 sept. jusqu’au déclenchement',
    purpose: 'Antagoniste de la GnRH pour empêcher une ovulation prématurée',
    phase: 'Phase 1 (Stimulation)',
    currentStatus: 'archived',
    instructions: 'Injections quotidiennes du matin effectuées.'
  }
];

export const MEDICATIONS_EN: MedicationItem[] = [
  {
    id: 'nortrel',
    name: 'Nortrel (Ovarian Suppression)',
    dosage: '1 tablet daily',
    timing: 'Every evening at a consistent time (e.g. 9:00 PM)',
    purpose: 'Maintain ovarian quiescence and prevent spontaneous hormonal fluctuations',
    phase: 'Phase 2 (Currently Active)',
    currentStatus: 'active',
    instructions: 'Continue daily as instructed by the RMA clinical team until further notice.'
  },
  {
    id: 'estrogenes',
    name: 'Estrogen (Estradiol / Estrace or Patches)',
    dosage: 'As prescribed',
    timing: 'Starting mid-October (~Oct 14–16 / Oct 28)',
    purpose: 'Proliferation and thickening of endometrial lining (> 7-8 mm trilaminar pattern)',
    phase: 'Phase 2 (Pre-Transfer)',
    currentStatus: 'upcoming',
    instructions: 'Take according to incremental schedule given by RMA nurse coordinator.'
  },
  {
    id: 'progesterone',
    name: 'Progesterone (Intramuscular PIO / Vaginal inserts)',
    dosage: '50 mg or 100 mg daily',
    timing: 'Exact start ~5 days prior to embryo transfer',
    purpose: 'Opening endometrial implantation window and secretory transformation',
    phase: 'Phase 2 & Phase 3 (Luteal Support)',
    currentStatus: 'upcoming',
    instructions: 'The exact hour of the first injection anchors the transfer timing to the hour.'
  },
  {
    id: 'gonal-f',
    name: 'Gonal-F 150 IU',
    dosage: '150 IU subcutaneous daily',
    timing: 'Sept 21 to Sept 29',
    purpose: 'Follicular growth via recombinant FSH',
    phase: 'Phase 1 (Stimulation)',
    currentStatus: 'archived',
    instructions: 'Completed successfully (42 oocytes harvested).'
  },
  {
    id: 'menopur',
    name: 'Menopur 150 IU',
    dosage: '150 IU subcutaneous daily',
    timing: 'Sept 21 to Sept 29',
    purpose: 'Combined FSH + LH follicular maturation',
    phase: 'Phase 1 (Stimulation)',
    currentStatus: 'archived',
    instructions: 'Completed successfully.'
  },
  {
    id: 'cetrotide',
    name: 'Cetrotide 0.25 mg',
    dosage: '0.25 mg subcutaneous daily',
    timing: 'From Sept 25 until trigger',
    purpose: 'GnRH antagonist preventing premature ovulation',
    phase: 'Phase 1 (Stimulation)',
    currentStatus: 'archived',
    instructions: 'Daily morning injections completed.'
  }
];

export const PROTOCOL_CALL_QUESTIONS_FR = [
  {
    id: 'q1',
    category: 'PGT-A & Génétique',
    question: "Sur les 8 blastocystes biopsiés, combien sont euploïdes (chromosomiquement normaux) et combien de garçons (Male) de premier grade avons-nous ?",
    suggestedNotes: "Noter le grade morphologique du blastocyste choisi (ex: 5AA, 4AA, 4AB)."
  },
  {
    id: 'q2',
    category: 'Endomètre & Transfert',
    question: "Suite aux résultats de l'hystérosonographie (SIS) et du retrait de débris du 15 oct., la cavité utérine est-elle jugée 100% optimale pour l'implantation ?",
    suggestedNotes: "Confirmer l'épaisseur cible et l'aspect en triple feuillet recherché."
  },
  {
    id: 'q3',
    category: 'Date Cible du FET',
    question: "Quelle est la date cible exacte retenue pour le transfert d'embryon congelé (fin octobre ou début novembre) ?",
    suggestedNotes: "Prévoir sa disponibilité et s'organiser pour le jour J."
  },
  {
    id: 'q4',
    category: 'Médication Pré-Transfert',
    question: "Quand débutons-nous les injections de progestérone (PIO) et quelle sera l'heure précise de la toute première dose ?",
    suggestedNotes: "L'horaire de la 1ère injection définit le calage embryonnaire à l'heure près."
  },
  {
    id: 'q5',
    category: 'Consignes Post-Transfert',
    question: "Quelles sont les recommandations d'activités physiques et de repos pour les 48 heures suivant le transfert ?",
    suggestedNotes: "Règles concernant les trajets, la reprise du travail et les compléments vitaminiques."
  }
];

export const PROTOCOL_CALL_QUESTIONS_EN = [
  {
    id: 'q1',
    category: 'PGT-A & Genetics',
    question: "Out of the 8 biopsied blastocysts, how many are euploid (chromosomically normal), and how many top-grade boys (Male) do we have?",
    suggestedNotes: "Record the morphological grade of the selected blastocyst (e.g. 5AA, 4AA, 4AB)."
  },
  {
    id: 'q2',
    category: 'Endometrium & Transfer',
    question: "Following the October 15 SIS and debris removal hysteroscopy, is the uterine cavity confirmed 100% optimal for embryo implantation?",
    suggestedNotes: "Confirm target endometrial thickness and trilaminar pattern."
  },
  {
    id: 'q3',
    category: 'Target FET Date',
    question: "What is the exact target date scheduled for the frozen embryo transfer (late October or early November)?",
    suggestedNotes: "Organize schedule and availability for transfer day."
  },
  {
    id: 'q4',
    category: 'Pre-Transfer Medication',
    question: "When do we start the progesterone (PIO) injections and what is the exact hour for the very first dose?",
    suggestedNotes: "The hour of the first injection defines the exact developmental synchrony."
  },
  {
    id: 'q5',
    category: 'Post-Transfer Guidelines',
    question: "What are the activity and rest guidelines for the first 48 hours following the embryo transfer?",
    suggestedNotes: "Rules regarding walking, work resumption, and continuing prenatal vitamins."
  }
];

export function getIvfData(lang: Language) {
  const isEn = lang === 'en';
  return {
    patientInfo: isEn ? PATIENT_INFO_EN : PATIENT_INFO_FR,
    immediateActions: isEn ? IMMEDIATE_ACTIONS_EN : IMMEDIATE_ACTIONS_FR,
    countdownMilestones: isEn ? COUNTDOWN_MILESTONES_EN : COUNTDOWN_MILESTONES_FR,
    phasesData: isEn ? PHASES_DATA_EN : PHASES_DATA_FR,
    timelineEvents: isEn ? TIMELINE_EVENTS_EN : TIMELINE_EVENTS_FR,
    embryologyFunnel: isEn ? EMBRYOLOGY_FUNNEL_EN : EMBRYOLOGY_FUNNEL_FR,
    medications: isEn ? MEDICATIONS_EN : MEDICATIONS_FR,
    protocolCallQuestions: isEn ? PROTOCOL_CALL_QUESTIONS_EN : PROTOCOL_CALL_QUESTIONS_FR,
  };
}
