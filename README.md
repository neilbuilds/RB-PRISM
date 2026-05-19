# RB Prism UI

RB Prism is an AI-first experience insights dashboard concept for the RBMH Hackathon.

## Current deployment mode

This repository currently uses a **prebuilt static deployment** to bypass package install failures on Vercel.

Vercel serves the already-built files from:

```txt
dist/
```

The important deployment config is:

```json
{
  "installCommand": "echo Skipping install - using committed dist",
  "buildCommand": "echo Skipping build - using committed dist",
  "outputDirectory": "dist"
}
```

## Important

Do not delete `dist/` while this workaround is active.

Do not upload or commit `node_modules/`.

## Local development

When package installation is healthy locally:

```bash
corepack enable
pnpm install
pnpm run dev
```

Build locally:

```bash
pnpm run build
```

After building, commit the updated `dist/` folder if Vercel is still in static deployment mode.
