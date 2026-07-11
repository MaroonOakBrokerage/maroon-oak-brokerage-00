# Changelog — Customer-Facing Redesign

All changes below were made directly in the project source (no manual follow-up edits needed).

## Removed

- All internal/startup content: the "Our Growth Roadmap" timeline section and `timeline` data, the
  "Leadership Philosophy" producer-transition section on About, and internal-role language in team
  bios (`lib/data.ts` → `team`).
- Reduced Core Values from 11 to exactly 6: Understanding First, Integrity Always, Clients First,
  Ownership & Excellence, Relentless Communication, Continuous Improvement.
- Fabricated testimonials, star ratings, and the `TestimonialCard` component (retired, unused).
- All office address and map content sitewide (Contact, About, homepage). No dedicated office/location
  page exists.
- All placeholder carrier names ("Carrier A/B/C/D/E") on the homepage and Claims page.

## Added

- **Homepage hero**: expanded, keyboard-navigable, reduced-motion-aware Personal/Business toggle with
  full coverage lists (10 personal lines, 11 business lines) and staggered icon reveal.
- **"What Are You Looking to Protect?"** guided explorer section (`ExplorerTiles`) — 7 tiles linking to
  relevant coverage.
- **4-step "How It Works" process** section (`ProcessSteps`) with scroll-triggered reveal that respects
  `prefers-reduced-motion`.
- **"Continue Exploring"** cross-link sections on Personal, Business, About, and Claims pages
  (`ContinueExploring`).
- **"What You Can Expect"** trust section replacing testimonials — six honest service-standard
  statements, no fabricated names, photos, or ratings.
- **Sticky mobile action bar** (`MobileActionBar`) — Call / Personal / Business / Get a Quote, visible
  only below the `lg` breakpoint.
- **Interactive Core Values explorer** on About (`ValuesExplorer`) — click a value to read more, instead
  of a static list.
- Texas remote-service messaging sitewide: "Based in Central Texas and serving clients remotely
  throughout Texas" plus the phone/email/video-call explanation (Contact page and Footer).
- Required carrier-network statement: "We work across a growing network of insurance markets..."
  (homepage, replacing the fake carrier strip).
- Required claims wording and 5-step claims flow (Make sure everyone is safe → Prevent additional
  damage → Document the loss → Contact the carrier → Contact Maroon Oak if assistance is needed).
  Claims page no longer implies Maroon Oak adjusts or pays claims.
- Massively expanded quote form (`QuoteForm.tsx`): "What are you looking to protect?" branch into
  Personal vs. Business field sets, UTM/referrer capture, honeypot spam field, duplicate-submission
  guard, and documented environment variables for a future CRM/email/AgencyZoom integration
  (`app/api/contact/route.ts`). No SSNs, driver's license numbers, payment, banking, or medical fields
  are collected, and the API route defensively rejects any that somehow arrive.

## Declined

- The request to fabricate fake reviewer names and photos was not implemented. This would be a
  deceptive practice (and directly contradicted the same message's own instruction not to invent
  customer names or photos). The "What You Can Expect" section fulfills the same goal — building
  trust — honestly.

## Verification

- Full static QA pass: no remaining references to growth-plan/timeline language, placeholder carrier
  names, office/map content, or fabricated testimonials anywhere in `app/`, `components/`, or `lib/`.
- All local imports resolve; all named/default imports match their source module's exports; every
  file using a React hook has `"use client"`; brace/paren/bracket balance verified across all 35
  TypeScript files.
- `npm install` / `npm run build` could not be executed in this sandbox (no network access to the npm
  registry) — run both locally as your first verification step after downloading the project.
