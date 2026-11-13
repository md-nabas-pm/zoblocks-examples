# Clinical Note Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/md-nabas-pm/zoblocks-examples/tree/main/demos/clinical-note?file=src/App.tsx)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/devbox/github/md-nabas-pm/zoblocks-examples/tree/main/demos/clinical-note)

A standalone React + Vite demo of the ZoBlocks `clinical-note` component.

All note content and identities in these examples are synthetic and explicitly fictional. The examples demonstrate interface behavior only; they are not clinical advice or clinically validated workflows.

The component does not persist notes. Save states are supplied by the host, and the save-state example changes that display prop locally without autosave, an offline queue, or storage. Commit callbacks are demonstrations of the callback arguments, not storage or signature services. The signed reader displays supplied attestations and addenda without verifying them or establishing legal supersession.

## Run locally

```bash
npm install
npm run dev
``
```
