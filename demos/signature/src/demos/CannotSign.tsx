"use client";

import { useState } from "react";
import { Form } from "antd";
import { Signature, type SignatureValue } from "@zoblocks/signature";
import "@zoblocks/signature/styles.css";

const NOW = "2026-11-04T09:00:00+05:30";

export function CannotSign() {
  const [, setValue] = useState<SignatureValue | undefined>();

  return (
    <Form layout="vertical">
      <Form.Item label="Patient signature">
        <Signature
          id="non-signing-outcome"
          now={NOW}
          meaning="consent"
          outcomes={["declined", "unable", "verbal", "on-paper"]}
          onChange={setValue}
        />
      </Form.Item>
    </Form>
  );
}
