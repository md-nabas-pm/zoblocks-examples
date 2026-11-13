import { IdentityProvider, PatientBanner } from "@zoblocks/identity";

import TwoPatientsOneName from "./examples/Identifying/two-patients-one-name";
import ConfirmBeforeOrderingExample from "./examples/Identifying/confirm-before-ordering";
import OneResourceFourAudiences from "./examples/access/one-resource-four-audiences";
import WrongPatientRefused from "./examples/access/wrong-patient-refused";

export default function App() {
  const demoPatient = {
    resourceType: "Patient" as const,
    id: "patient-1001",
    active: true,

    name: [
      {
        use: "official" as const,
        family: "Morgan",
        given: ["Alex"],
      },
    ],

    gender: "unknown" as const,
    birthDate: "1985-06-15",

    identifier: [
      {
        use: "official" as const,
        system: "https://hospital.example.org/identifiers/mrn",
        value: "MRN-1001",
      },
      {
        use: "secondary" as const,
        system: "https://hospital.example.org/identifiers/visit",
        value: "VIS-2026-1001",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Original Patient Banner */}
      <section className="flex w-full items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <IdentityProvider
            disclosure="clinical"
            photos="deny"
            identifierSystems={[
              {
                kind: "mrn",
                label: "MRN",
                systems: ["https://hospital.example.org/identifiers/mrn"],
                weight: 2,
              },
              {
                kind: "visit",
                label: "Visit ID",
                systems: ["https://hospital.example.org/identifiers/visit"],
                weight: 1,
              },
            ]}
          >
            <PatientBanner
              patient={demoPatient}
              context="action"
              identifiers={[{ kind: "mrn" }, { kind: "visit" }]}
            />
          </IdentityProvider>
        </div>
      </section>

      {/* Identifying: Two patients, one name */}
      <section className="flex w-full items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <TwoPatientsOneName />
        </div>
      </section>

      {/* Identifying: Confirm before ordering */}
      <section className="flex w-full items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <ConfirmBeforeOrderingExample />
        </div>
      </section>

      {/* Access: One resource, four audiences */}
      <section className="flex w-full items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <OneResourceFourAudiences />
        </div>
      </section>

      {/* Access: Wrong patient, refused */}
      <section className="flex w-full items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <WrongPatientRefused />
        </div>
      </section>
    </div>
  );
}
