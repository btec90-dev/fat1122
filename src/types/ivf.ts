export type Language = 'fr' | 'en';
export type PhaseStatus = 'completed' | 'active' | 'upcoming';

export interface ImmediateActionItem {
  id: string;
  title: string;
  dateText: string;
  category: 'plan' | 'medication' | 'appointment' | 'lab' | 'consultation';
  status: 'done' | 'in_progress' | 'urgent' | 'pending';
  description: string;
  highlight?: string;
  location?: string;
  actionButton?: {
    label: string;
    url?: string;
    type?: 'modal' | 'link' | 'call';
  };
  details: string[];
}

export interface TimelineEvent {
  id: string;
  phaseId: 1 | 2 | 3 | 4;
  date: string;
  time?: string;
  title: string;
  icon: string;
  category: 'medication' | 'appointment' | 'lab' | 'surgery' | 'milestone' | 'pregnancy';
  completed: boolean;
  statusText?: string;
  summary: string;
  details?: string;
  location?: string;
  importantNotes?: string[];
}

export interface PhaseInfo {
  id: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  dateRange: string;
  status: PhaseStatus;
  progressPercent: number;
  description: string;
  keyMetrics?: { label: string; value: string }[];
}

export interface MedicationItem {
  id: string;
  name: string;
  dosage: string;
  timing: string;
  purpose: string;
  phase: string;
  currentStatus: 'active' | 'archived' | 'upcoming';
  instructions: string;
}

export interface EmbryologyFunnelStep {
  label: string;
  count: number | string;
  rate?: string;
  description: string;
  badge: string;
  color: string;
}

export interface CountdownMilestone {
  id: string;
  title: string;
  stageName: string;
  phaseNumber: 2 | 3 | 4;
  targetDate: string; // ISO
  displayDate: string;
  category: 'procedure' | 'lab' | 'fet' | 'pregnancy' | 'birth';
  description: string;
  badge: string;
  icon: string;
  advice: string;
}

export interface PatientInfo {
  name: string;
  clinic: string;
  clinicLocation: string;
  medicalTeam: string;
  surgeryCenter: string;
  surgeryAddress: string;
  preferredGender: string;
  activePhaseId: number;
  activePhaseTitle: string;
  statusSummary: string;
}
