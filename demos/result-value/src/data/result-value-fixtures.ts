/**
 * Local fixtures for the Result Value demo.
 *
 * These are illustrative FHIR Observation-shaped objects.
 * They contain no real patient information.
 */

export const observationPotassiumCritical = {
  resourceType: "Observation",
  id: "obs-potassium-critical",
  meta: {
    versionId: "2",
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "2823-3",
        display: "Potassium",
      },
    ],
    text: "Potassium",
  },
  valueQuantity: {
    value: 6.8,
    unit: "mmol/L",
    system: "http://unitsofmeasure.org",
    code: "mmol/L",
  },
  interpretation: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "HH",
          display: "Critical high",
        },
      ],
    },
  ],
  referenceRange: [
    {
      low: {
        value: 3.5,
        unit: "mmol/L",
      },
      high: {
        value: 5.1,
        unit: "mmol/L",
      },
    },
  ],
  issued: "2026-11-10T07:52:00Z",
  note: [
    {
      text: "Called to ordering provider 07:52. Repeat specimen requested.",
    },
  ],
};

/**
 * Seven distinct absence states.
 * `masked` means a result exists but is not visible to this reader.
 */
export const observationMasked = {
  id: "bh",
  analyte: "Toxicology",
  absent: "masked",
} as const;
