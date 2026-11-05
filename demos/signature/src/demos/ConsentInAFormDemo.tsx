"use client";

import { useState } from "react";
import { Button, Form } from "antd";
import { Signature, signatureRequired, type SignatureValue } from "@zoblocks/signature";
import "@zoblocks/signature/styles.css";

const NOW = "2026-11-04T09:00:00+05:30";

export function ConsentInAForm() {
  const [form] = Form.useForm<{ consent?: SignatureValue }>();
  const [submitted, setSubmitted] = useState(false);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={() => setSubmitted(true)}
      onFinishFailed={() => setSubmitted(false)}
    >
      <Form.Item name="consent" label="Patient signature" rules={[signatureRequired()]}>
        <Signature
          id="patient-consent"
          now={NOW}
          meaning="consent"
          attestation="I have read the information and agree to proceed."
          subject={{ display: "Patient" }}
          recordedBy={{ name: "Clinician" }}
          methods={["draw", "type", "upload"]}
          outcomes={["declined", "unable"]}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>

      {submitted && <span>Form submitted.</span>}
    </Form>
  );
}
