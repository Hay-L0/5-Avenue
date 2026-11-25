# The 5th Avenue — project foundation

A modular Next.js starter for the redesigned website.

## Requirements

- Node.js 20.9+
- npm

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/` — App Router pages, layout, global styles and loading/error states
- `components/layout/` — shared site header and footer
- `components/sections/` — homepage sections
- `lib/` — site configuration and utilities
- `types/` — shared TypeScript types
- `public/` — static assets

## Important migration note

This is a clean visual and architectural foundation. The original Zite site could
not be fully inspected, so its exact workflows, forms, data sources, booking or
payment flows, external integrations, and page inventory have not yet been migrated.

Before replacing the live site, document and port each existing feature. Do not
remove or redirect existing user workflows until their replacement is implemented
and tested.

Update `lib/site-config.ts` with verified brand details and replace the placeholder
copy in the section components with approved content.
