import { Form } from "antd";
import { Tabs } from "@zoblocks/tabs";

export function SemanticSegmentedFormExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Semantic modes — Segmented form control</h2>
        <p className="text-sm text-gray-500">
          A segmented control is a form value, not a view switch. Using as=&quot;radiogroup&quot;
          makes it suitable for Form.Item.
        </p>
      </div>

      <Form layout="vertical" initialValues={{ density: "default" }} className="mx-auto w-fit">
        <Form.Item name="density" label="Density" className="text-center">
          <Tabs
            as="radiogroup"
            variant="segmented"
            aria-label="Density"
            items={[
              { value: "compact", label: "Compact" },
              { value: "default", label: "Default" },
              { value: "comfortable", label: "Comfortable" },
            ]}
          />
        </Form.Item>
      </Form>
    </section>
  );
}
