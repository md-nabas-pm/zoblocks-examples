import { ChartHeader } from "./components/zoblocks/chart-header";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div>
        <ChartHeader
          patient={{
            id: "patient-001",
            name: [
              {
                given: ["John"],
                family: "Doe",
              },
            ],
          }}
          identifiers={[{ kind: "mrn" }, { kind: "nhs" }]}
        >
          <div>Test content</div>
        </ChartHeader>
      </div>
    </div>
  );
}
