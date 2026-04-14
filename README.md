# amanita.barcelona site

Marketing + pre-launch operating site for an AI agents agency (React + TypeScript + Vite + Tailwind + Motion).

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deploy

```bash
npm run deploy
```

## Funnel and analytics configuration

Copy `.env.example` to `.env` and fill values:

- `VITE_CALENDLY_URL`: discovery call booking URL
- `VITE_LEAD_WEBHOOK_URL`: POST endpoint for lead capture
- `VITE_GA_ID`: Google Analytics measurement ID (optional)
- `VITE_PLAUSIBLE_DOMAIN`: Plausible domain (optional)

If no webhook is provided, contact/newsletter forms run in demo mode but still show UX success states.

## Core pre-launch pages

- Offers: `/offers`
- Proof assets: `/proof-kit`, `/proof/case-support-triage`
- Content cadence: `/prelaunch/content-cadence`
- Outbound playbook: `/prelaunch/outbound-playbook`
- Funnel pages: `/contact`, `/newsletter`, `/pricing`

## Suggested operating rhythm

- 2 posts/week: insight + teardown
- 30 personalized outreaches/week
- 2-3 discovery calls/week
- Monthly conversion review: page traffic -> lead capture -> calls -> proposals
