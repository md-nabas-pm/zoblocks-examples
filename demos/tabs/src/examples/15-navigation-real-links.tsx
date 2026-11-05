import { useState } from "react";
import { Tabs } from "@zoblocks/tabs";

export function NavigationRealLinksExample() {
  const [currentSection, setCurrentSection] = useState("overview");

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Navigation with real links</h2>
        <p className="text-sm text-gray-500">
          Navigation tabs render real anchors. They preserve browser navigation behaviour, including
          opening links in a new tab. Hover over a link to preview its URL.
        </p>
      </div>

      <Tabs
        as="nav"
        variant="underline"
        aria-label="Project"
        value={currentSection}
        onChange={(value) => setCurrentSection(value)}
        onClick={(event) => {
          event.preventDefault();
        }}
        items={[
          { value: "overview", label: "Overview", href: "/project" },
          {
            value: "issues",
            label: "Issues",
            href: "/project/issues",
            count: 31,
          },
          {
            value: "pulls",
            label: "Pull requests",
            href: "/project/pulls",
            count: 7,
          },
          { value: "actions", label: "Actions", href: "/project/actions" },
          {
            value: "insights",
            label: "Insights",
            href: "/project/insights",
          },
        ]}
      />
    </section>
  );
}
