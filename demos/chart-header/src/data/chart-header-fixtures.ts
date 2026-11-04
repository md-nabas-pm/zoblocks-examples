import type { EncounterOption, SafetyInput } from "../components/zoblocks/chart-header";

export const DEMO_PATIENT = {
  id: "patient-001",
  active: true,
  name: [{ given: ["Amara"], family: "Okonkwo" }],
  gender: "female" as const,
  birthDate: "1985-03-08",
  identifier: [
    {
      system: "https://fhir.nhs.uk/Id/nhs-number",
      value: "9434765919",
    },
    {
      system: "urn:oid:1.2.3.4",
      value: "093-441-208",
    },
  ],
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/patient-sexParameterForClinicalUse",
      extension: [
        {
          url: "value",
          valueCodeableConcept: {
            coding: [{ code: "female", display: "female" }],
          },
        },
        {
          url: "comment",
          valueString: "for medication dosing",
        },
      ],
    },
  ],
};

export const DEMO_IDENTIFIERS = [{ kind: "mrn" }, { kind: "nhs" }] as const;

export const DEMO_SAFETY: SafetyInput = {
  allergies: {
    label: "Penicillin — anaphylaxis",
    tone: "critical",
    detail: "confirmed",
  },
  codeStatus: {
    label: "DNR",
    tone: "warn",
  },
};

export const ONE_OPEN_ENCOUNTER: EncounterOption[] = [
  {
    id: "enc-1",
    label: "Outpatient · 4 Nov 2026, 09:00",
    type: "ambulatory",
    location: "Clinic",
  },
];

export const THREE_OPEN_ENCOUNTERS: EncounterOption[] = [
  {
    id: "enc-1",
    label: "Outpatient · 4 Nov 2026, 09:00",
    type: "ambulatory",
    location: "Clinic",
  },
  {
    id: "enc-2",
    label: "Inpatient · Ward 4B",
    type: "inpatient",
    location: "Ward 4B",
  },
  {
    id: "enc-3",
    label: "Virtual · 3 Nov 2026, 16:30",
    type: "virtual",
  },
];
