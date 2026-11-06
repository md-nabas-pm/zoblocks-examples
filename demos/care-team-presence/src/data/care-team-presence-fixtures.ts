import type { Presence } from "../lib/zoblocks-presence";

export const marsh = {
  id: "124",
  display: "L. Marsh, LCSW",
  role: "Therapist",
};

export const vance = {
  id: "123",
  display: "A. Vance, MD",
  role: "Attending",
};

export const boateng = {
  id: "126",
  display: "T. Boateng, MD",
  role: "Attending · Night coverage",
};

export const okafor = {
  id: "127",
  display: "Dr. Okafor",
  role: "Clinician",
};

export const careTeamNightCoverage: Presence[] = [
  {
    clinician: marsh,
    state: "in-session",
    until: "15:50",
  },
  {
    clinician: vance,
    state: "signed-out",
    coveredBy: boateng,
    until: "07:00",
  },
];

export const serverTime = "2026-08-24T10:30:00+05:30";

export const careTeamCoverageGap = {
  participant: [
    {
      member: {
        reference: "Practitioner/vance",
        display: "A. Vance, MD",
      },
      role: [{ text: "Night attending" }],
      period: {
        start: "2026-08-24T06:00:00+05:30",
        end: "2026-08-24T07:00:00+05:30",
      },
    },
    {
      member: {
        reference: "Practitioner/boateng",
        display: "T. Boateng, MD",
      },
      role: [{ text: "Day attending" }],
      period: {
        start: "2026-08-24T09:00:00+05:30",
        end: "2026-08-24T17:00:00+05:30",
      },
    },
  ],
};

export const practitionerSigner: Presence = {
  clinician: marsh,
  state: "in-group",
  coveredBy: okafor,
};
