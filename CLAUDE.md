# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build (also the only type check; there is no separate `tsc` script)
- `npm run lint` — ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript)

There is no test suite.

## Stack

Next.js 16 (App Router) + React 19, Tailwind CSS v4 (CSS-first config, no `tailwind.config.*`), framer-motion, lucide-react, next-themes. Path alias `@/*` maps to the repo root (e.g. `@/lib/utils` for the `cn()` clsx + tailwind-merge helper).

## Architecture

A single-page personal portfolio/landing site for a freelance full-stack engineer.

- `app/page.tsx` composes the page by stacking section components from `app/sections/` in order. Navigation is in-page anchors: the `navLinks` array in `app/components/Navbar.tsx` lists section ids, which must match the `id` on each section's root `<section>`; Navbar also tracks the active section on scroll and updates the URL hash.
- `app/components/` holds page chrome (Navbar, ScrollProgress). Note: Navbar defines its own inline `ThemeToggle`; `app/components/ThemeToggle.tsx` is currently not imported anywhere.
- Site content (projects, services, testimonials, etc.) is hardcoded as arrays at the top of each section file — edit copy there. Images live in `public/projects/` and `public/images/`; `next.config.ts` sets `images.unoptimized: true`.
- Sections are Server Components by default; only interactive ones (Hero, Footer, Navbar, ScrollProgress) are `"use client"`.
- `app/sections/Footer.tsx` exports both `FooterCTA` (contact form) and `Footer`. The form POSTs JSON `{name, email, subject, message}` to `app/api/send-email/route.ts`, which validates and forwards to the Resend HTTP API (no SDK) using `RESEND_API_KEY` from `.env` (gitignored; the form returns a 500 without it). Recipient address is hardcoded in the route.

## Theming

- `app/providers.tsx` wraps next-themes with `attribute="class"`, default theme **dark**.
- `app/globals.css` declares `@custom-variant dark (&:is(.dark *))`, so Tailwind `dark:` variants key off the `.dark` class, not the media query. Custom palette tokens (`dark-900`…`dark-500`, `accent`, `accent-light`, `accent-dark`) are defined in the `@theme inline` block; shared plain-CSS classes (e.g. `section-dark`, `hero-gradient`) are defined further down the same file.
- Style both light and dark variants when adding UI (pattern: `bg-slate-50 dark:bg-dark-800`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: SSH into the server, `git pull` in `/var/www/landing`, `npm ci --include=dev`, `npm run build`, then reload/start the PM2 process `landing-app` on port 3000. It is a Node server deployment: static export (`output: "export"`) was deliberately removed because the API route needs a server, and the local `out/` directory is a stale leftover from that. Anything merged to `main` goes live.
