# Signature examples

A standalone React + Vite page with eight Signature examples using the installed
`@zoblocks/signature` package and Ant Design. Patient and practitioner details are
synthetic. Each example is implemented in its own file under `src/demos`.

## Run locally

```bash
npm install
npm run dev
```

## Included examples

1. Consent in an Ant Design form with required validation and structured submission.
2. Keyboard-only typed signing.
3. Declined, unable, verbal, and on-paper outcomes.
4. A locked signed record.
5. A pending countersignature.
6. A withdrawn consent that retains the original record.
7. FHIR R4 transaction bundle generation and JSON inspection.
8. Stored ink rendered in light and dark Ant Design themes.

Run `npm run build` for the available TypeScript and production build check.
