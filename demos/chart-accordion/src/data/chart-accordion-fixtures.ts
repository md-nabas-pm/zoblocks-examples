export const CHART_UPDATED_AT = {
  recent: "2026-11-10T09:15:00Z",
  previous: "2026-11-09T14:30:00Z",
  older: "2026-11-08",
} as const;

export const ALLERGY_FIXTURES = [
  {
    name: "Penicillin",
    reaction: "Rash",
    severity: "Moderate",
  },
  {
    name: "Peanuts",
    reaction: "Anaphylaxis",
    severity: "High",
  },
] as const;

export const MEDICATION_FIXTURES = [
  {
    name: "Amlodipine",
    dose: "5 mg",
    frequency: "Once daily",
  },
  {
    name: "Metformin",
    dose: "500 mg",
    frequency: "Twice daily",
  },
  {
    name: "Atorvastatin",
    dose: "20 mg",
    frequency: "At night",
  },
] as const;

export const LAB_RESULT_FIXTURES = [
  {
    name: "Haemoglobin",
    value: "13.8 g/dL",
    status: "Within range",
  },
  {
    name: "Potassium",
    value: "4.2 mmol/L",
    status: "Within range",
  },
  {
    name: "Creatinine",
    value: "0.9 mg/dL",
    status: "Within range",
  },
  {
    name: "eGFR",
    value: "88 mL/min/1.73m²",
    status: "Stable",
  },
  {
    name: "HbA1c",
    value: "6.8%",
    status: "Review",
  },
] as const;

export const VITAL_FIXTURES = [
  { name: "Blood pressure", value: "124/78 mmHg" },
  { name: "Heart rate", value: "72 bpm" },
  { name: "Respiratory rate", value: "16 /min" },
  { name: "Temperature", value: "36.8 °C" },
  { name: "Oxygen saturation", value: "98%" },
] as const;

export const CHART_CONTEXT = {
  patientLabel: "Okonkwo, A. · MRN 4471902",
  encounterLabel: "Outpatient review · 10 November 2026",
} as const;
