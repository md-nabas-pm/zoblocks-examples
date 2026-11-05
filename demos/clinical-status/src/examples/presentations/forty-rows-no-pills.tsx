import { ClinicalStatus } from "@/components/zoblocks/clinical-status";

const observations = [
  {
    name: "Sodium",
    value: "139 mmol/L",
    status: "final",
  },
  {
    name: "Potassium",
    value: "6.8 mmol/L",
    status: "final",
  },
  {
    name: "TSH",
    value: "3.1 mIU/L",
    status: "preliminary",
  },
  {
    name: "HbA1c",
    value: "52 mmol/mol",
    status: "corrected",
  },
] as const;

export default function FortyRowsNoPillsExample() {
  return (
    <div className="w-full space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b text-slate-500">
              <th className="px-4 py-3 font-medium">Test</th>
              <th className="px-4 py-3 font-medium">Result</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {observations.map((observation) => (
              <tr key={observation.name} className="border-b last:border-b-0">
                <td className="px-4 py-3 font-medium">{observation.name}</td>

                <td className="px-4 py-3 text-slate-600">{observation.value}</td>

                <td className="px-4 py-3">
                  <ClinicalStatus
                    scale="result-status"
                    step={observation.status}
                    shape="affix"
                    density="compact"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
