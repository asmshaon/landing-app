# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build (also the only type check; there is no separate `tsc` script)
- `npm run lint` — ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript)

There is no test suite.

## Stack

Next.js 16 (App Router) + React 19, Tailwind CSS v4 (CSS-first config, no `tailwind.config.*`), framer-motion (scroll effects), lucide-react, next-themes. Path alias `@/*` maps to the repo root (e.g. `@/lib/utils` for the `cn()` clsx + tailwind-merge helper).

## Architecture

A personal portfolio/landing site (the home page plus a `/book-a-call` booking page) for a senior full-stack engineer. It is written for recruiters and non-technical readers: business outcomes, not a skills list.

- `app/page.tsx` composes the page by stacking section components from `app/sections/` in order. The fixed top Navbar has no section links or mobile menu, only the logo, theme toggle and a LinkedIn icon (shown from `xl` up).
- `app/components/` holds page chrome (Navbar, ScrollProgress). Note: Navbar defines its own inline `ThemeToggle`; `app/components/ThemeToggle.tsx` is currently not imported anywhere.
- The home page follows "one idea per viewport" (modelled on apple.com/iphone): every section is a full-height scene with one large heading, alternating white and ash backgrounds instead of divider lines. Don't add a second idea to a scene; give it its own scene.
- Scene order: Hero (headline, supporting line, portrait), Proof (the four stats, one at a time), ClientLogos (countries), Industries (four domains with what was built in each; every line must trace to the inventory), Services ("What I Do", id `services`), CaseStudies (intro + one scene per study, wrapper id `work`), WhyHireMe ("My DNA": eight traits one at a time, id `why-me`), Testimonials (one featured quote plus a "Read more kind words" link to `/testimonials`, id `testimonials`), FooterCTA (id `contact`), Footer.
- Scene building blocks: `app/components/Scene.tsx` (full-height band, `tone` plain/ash) and the `.scene-heading` type scale in `globals.css`. Client motion primitives live in `app/components/motion/`: `Reveal` (fade-and-rise on enter, CSS-driven), `PinnedSequence` (sticky frame showing one item per viewport of scroll; used by Proof and WhyHireMe), `HorizontalTrack` (vertical scroll slides the card row at `lg`+, swipeable snap row below), and `HeroFade`/`ScrollHighlight` in `ScrollEffects.tsx`. Sections stay Server Components and pass their rendered content into these.
- Reduced motion is handled in CSS, not JS (so server and client markup match): the `prefers-reduced-motion: reduce` block in `globals.css` unpins sequences into stacked scenes, turns the track into the snap row and forces `.scroll-linked`/`.reveal` content visible. A `<noscript>` style in `layout.tsx` shows reveals without JS.
- In `PinnedSequence`, opacity is driven by a function `useTransform`, not the array form: the array form with a multi-step scroll range left opacity stuck at its first value (framer's accelerated path).
- Site content (outcome areas, case studies, testimonials, etc.) is hardcoded as arrays at the top of each section file — edit copy there.
  - Case studies come from the shareable career inventory. Clients stay anonymous, so no client names, links or screenshots, and every figure must appear in that inventory.
  - No technology names on the page, including case studies (they only live in `KNOWS_ABOUT` in `seo.ts`).
  - Contact is only by booking a Cal.com call. Don't add a contact form, an email address, phone or WhatsApp number, or a map.
  - The call to action reads "Let's talk", never "Contact".
  - Copy uses Indian English, which follows British spelling (optimise, modernise, catalogue, licence, travellers), and has no em or en dashes: write "May 2026 to present" for date ranges and "2-5" for number ranges.
- Images live in `public/images/`; `next.config.ts` sets `images.unoptimized: true`.
- SEO: `app/seo.ts` holds the site URL, name, role, headline, description and the `KNOWS_ABOUT` skills list, and every SEO surface reads from it: the `metadata` export and the JSON-LD `Person`/`WebSite` graph in `app/layout.tsx`, `app/opengraph-image.tsx` (the 1200×630 share card, built from `public/images/og-portrait.png`), `app/robots.ts` and `app/sitemap.ts` (which lists `/`, `/book-a-call` and `/testimonials`). When the hero headline or description changes, update `seo.ts` too. Technology names may appear in `KNOWS_ABOUT` because it isn't rendered on the page.
- Sections are Server Components by default; only interactive components (Navbar, ScrollProgress, BookingCalendar and the motion primitives) are `"use client"`.
- `app/sections/Footer.tsx` exports both `FooterCTA` (the `#contact` band, whose "Let's talk" button links to `/book-a-call`) and `Footer`.
- `app/book-a-call/page.tsx` is the booking page: Navbar, the "How the call goes" steps, the calendar and Footer. It sets its own title, canonical and Open Graph URL, and `app/book-a-call/opengraph-image.tsx` re-exports the root share card, because a page-level `openGraph` override drops the inherited image.
- `app/testimonials/page.tsx` lists every testimonial (one per screen) and ends with the "Let's talk" button. The quotes, `Quote` and `Stars` are exported from `app/sections/Testimonials.tsx`; it has its own `opengraph-image.tsx` re-export like `/book-a-call`. Visits to this page are how the owner sees interest, so keep it a separate URL.
- `app/book-a-call/BookingCalendar.tsx` embeds the Cal.com calendar inline via `@calcom/embed-react`. The event is set by the `CAL_LINK` constant (`<username>/<event-slug>`) at the top of the file. The calendar follows the site theme through next-themes' `resolvedTheme`, with its brand colour set to the monochrome ink. There are no API routes and no env vars.

## Theming

- The palette is monochrome: black, white and neutral ash greys only, with no chromatic accents, gradients or glows.
- `app/providers.tsx` wraps next-themes with `attribute="class"`, default theme **light**.
- `app/globals.css` declares `@custom-variant dark (&:is(.dark *))`, so Tailwind `dark:` variants key off the `.dark` class, not the media query. Palette tokens are defined in the `@theme inline` block:
  - `dark-*`, `slate-*` and `gray-*` all resolve to the same neutral ash scale. The names are kept for existing utilities.
  - `accent` is theme-aware ink (`--ink`): near-black in light and near-white in dark. `ink-inverse` is its opposite.
  - `font-display` is the Newsreader serif used for headings.
  - Shared plain-CSS classes (`btn-primary`, `eyebrow`, scroll progress styles) are defined further down the same file.
- Style both light and dark variants when adding UI (pattern: `bg-slate-50 dark:bg-dark-800`). Every section follows the theme except `Footer`, which stays black in both themes.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: SSH into the server, `git pull` in `/var/www/landing`, `npm ci --include=dev`, `npm run build`, then reload/start the PM2 process `landing-app` on port 3000. It is a Node server deployment (`npm start` under PM2), not a static export. The local `out/` directory is a stale leftover from an old static export. Anything merged to `main` goes live.
