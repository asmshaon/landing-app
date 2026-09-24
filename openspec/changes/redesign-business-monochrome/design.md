## Context

See proposal.md for motivation and the specs for requirements. The current state that shapes the approach:

- **Unarchived baseline:** the site's working tree already contains the uncommitted, fully implemented `reposition-ai-remote-engineer` change, whose three specs this change modifies. `openspec/specs/` is empty until that change is archived.
- **Color lives in two places:**
  - Tokens in `app/globals.css`: the `@theme inline` block, where `dark-*` is blue-tinted `#050507…#252540`, `accent` is violet `#7c3aed`, and the `slate-*` scale is overridden. The same file has plain classes: `hero-gradient`, `text-gradient`, `btn-primary`, `stats-card`, `section-dark`, `value-card`, `badge-glow` and the nav underline.
  - Hard-coded utilities in section files: `text-orange-400`, `bg-green-400`, `bg-blue-600/10`, `fill-amber-400`, `text-purple-400`, `from-blue-900/30`, `text-red-400`/`text-green-400` form status, and Tailwind's default `gray-*`, which is blue-tinted.
- **Always-dark sections:** Hero, ClientLogos, WhyHireMe and the contact CTA render `text-white` on dark backgrounds whatever the theme. Only Services, Projects, Testimonials and Stack are theme-aware.
- **Theme provider:** `app/providers.tsx` sets `defaultTheme="dark"` and `enableSystem`.
- **framer-motion:** it is in `package.json` but not imported anywhere in `app/`.
- **Verification:** there is no test suite. The checks are `npm run lint`, `npm run build` and a manual pass in the browser.

## Goals / Non-Goals

**Goals:**
- Make the palette change in one place (the tokens), so most existing utilities become monochrome without editing each call site.
- Keep content as arrays at the top of each section file, the existing pattern, so copy stays easy to edit.
- Stop needing the inventory at apply time: the draft content is fixed below.

**Non-Goals:**
- Changing the contact form's behavior or the email API.
- Updating `portfolio.asmshaon.tech` or `blog.asmshaon.tech`.
- Rewriting testimonial wording or the countries strip content.
- Adding animation libraries, a CMS or a data file format. Content stays in TSX.

## Decisions

### 1. Re-value tokens and don't rename them
The palette is made neutral in `@theme inline`:
- `dark-900…500` become `#0a0a0a #111111 #1a1a1a #262626 #333333`.
- The `slate-*` overrides become a neutral ash scale: `#fafafa #f4f4f4 #e5e5e5 #d4d4d4 #a3a3a3 #737373 #525252 #404040 #262626 #171717`.
- Tailwind's `gray-*` is overridden to the same scale.

`accent` becomes theme-aware ink: `--color-accent: var(--ink)`, with `--ink` near-black (`#111`) in `:root` and near-white (`#f4f4f4`) in `.dark`. `accent-light` and `accent-dark` map to ash mid-tones. All existing `slate-*`, `gray-*`, `dark-*` and `accent` utilities turn monochrome with no call-site edits. The remaining call sites that use chromatic utilities (listed in Context) are fixed by hand.
- *Alternative:* rename the tokens to `ash-*` and `ink` and rewrite every class. Rejected: it touches every file for no visible gain, and the rewrite can happen later.
- *Risk handled:* "slate" and "gray" become misleading names. A comment in `globals.css` records that both are the ash scale, and CLAUDE.md's theming note is updated to say so.

### 2. Remove the decorative CSS classes instead of recoloring them
- **Deleted:** `hero-gradient`, `text-gradient`, `badge-glow`, `section-dark`, `float-animation` and its keyframes, and the glow blobs in Hero.
- **Recolored:** `btn-primary` becomes solid ink with inverse text, and hover shifts it one step on the ash scale with no colored shadow. `btn-outline`, `stats-card` and `value-card` become hairline ash borders.
- **Scrollbar and ScrollProgress:** these use `--ink`.
- *Alternative:* make the gradients grey. Rejected: grey gradients look muddy, and flat bands with hairline rules are what gives the monochrome look its clarity.

### 3. Light default, theme-aware sections, black footer
- `providers.tsx` sets `defaultTheme="light"` and keeps `enableSystem`, so a stored or explicit choice still wins.
- Hero, ClientLogos, WhyHireMe and the contact CTA get light/dark pairs, following the existing `bg-white dark:bg-dark-900` pattern.
- Sections alternate between `bg-white` and `bg-slate-50` (ash-50) in light, and between `dark-900` and `dark-800` in dark, separated by `border-slate-200 dark:border-dark-600` hairlines.
- The `Footer` alone stays `bg-dark-900 text-white` in both themes, as a closing band. The spec allows this.
- Visitors who already stored `dark` keep dark. That is acceptable.

### 4. Editorial serif for headings
A display serif is added through `next/font/google`: **Newsreader**, the same face the career inventory uses. It is exposed as `--font-display` and a `font-display` utility and used on `h1`/`h2` only. Inter stays for body and UI. This adds no npm dependency.
- *Alternative:* Inter only. It works, but the page reads as a SaaS template. The serif is what signals "business profile" to a recruiter.

### 5. Case studies and timeline as two new server components
- **`app/sections/CaseStudies.tsx`** (`id="work"`) replaces `Projects.tsx`. It holds a `caseStudies` array of `{ id, business, region, period, role, problem, delivered: string[], outcome, tech?: string[] }`. Each case study is an `<article id={id}>` in a single column, which reads better than a card grid for text-heavy content. The layout has a left rail (period, region, role in muted small caps) and a right column (problem, delivered bullets, outcome in bold). An optional `tech` line renders through `SlashList`, whose separator becomes `text-slate-400`. It is limited to six items.
- **`app/sections/Experience.tsx`** (`id="experience"`) holds an `engagements` array of `{ period, business, role, type, caseStudyId? }`. It renders as an `<ol>` with hairline rules, dates in a `sm:` left column, and a "Read case study →" anchor when `caseStudyId` is set.
- **Deleted:** `Projects.tsx`, `Stack.tsx` and `public/projects/*`. Check for other references to each before deleting it.
- *Alternative:* one combined section with expandable timeline rows. Rejected: hidden content is weaker for skimming recruiters, and it needs `"use client"`.

### 6. "What I Do" reuses `Services.tsx`
`Services.tsx` keeps `id="services"`, so existing `#services` links still work, and its array is rewritten as the outcome areas below. The colored icon tiles become monochrome lucide icons on an ash tile. The nav label changes to "What I Do".

### 7. Navigation
`navLinks` becomes:
- `home` (Home)
- `services` (What I Do)
- `work` (Work)
- `experience` (Experience)
- `why-me` (Why Me)
- `testimonials` (Testimonials)
- a "Let's talk" button linking to `#contact` (the section id stays `contact`; it is no longer a text nav link)

The old `portfolio` id goes away. Section order in `page.tsx` is Hero, ClientLogos, Services, CaseStudies, Experience, WhyHireMe, Testimonials, FooterCTA, Footer. The active-section tracking needs no change, because it reads `navLinks`.

### 8. Draft content
The wording can be tuned during apply without changing the specs. Every figure below comes from the shareable inventory.

**Hero**
- **Headline:** "I turn hard business problems into reliable software."
- **Supporting line:** "16+ years designing, building and leading production systems: payments, bookings, point of sale, marketplaces and SaaS platforms that businesses run on every day."
- **Industries I build for:** Fintech & payments · Retail & POS · E-commerce & marketplaces · SaaS · Logistics & supply chain. These are industries the work applies to, not a client list.
- **Stats, visible at all widths:** `16+` years · `4M+` rentals handled (car-rental platform) · `4–5` engineers led (current team).
- **Call to action:** one "Let's talk" button. There is no availability line.

**Metadata description:** "Senior full-stack software engineer with 16+ years designing, building and leading production systems: payments, bookings, point of sale, marketplaces and SaaS platforms."

**What I Do (5 areas)**
1. **Bookings and payments:** booking engines and checkouts where money has to be right every time (car rental, e-wallet, event food ordering).
2. **One product, many suppliers:** combining 7 tour operators or 10+ rental suppliers into one catalogue and one booking flow.
3. **Modernizing legacy systems:** retiring aging platforms one piece at a time while the business keeps running (cruise retailer, legal-tech site, newsletter platform, car-rental booking engine).
4. **Leading small teams:** leading 2–5 developers through code review, planning, mentoring and hiring.
5. **Security and compliance:** security reviews, penetration-test fixes and state compliance reporting.

**Case studies (newest first)**
| id | Business · period · role | Problem → delivered → outcome |
|---|---|---|
| `food-ordering` | US in-venue food ordering for events and food trucks · May 2026–present · Lead engineer, team of 4–5 | Fans order from their seats and vendors print tickets in the truck. Prices were partly decided by the phone app, which could be tampered with. → Moved all pricing and payment onto the server. Wrote the first security review of the order services. Built login protection and kitchen printing. → 8 security findings identified. The critical, high and medium ones were fixed within three days. The platform is in its pilot stage. |
| `legal-search` | US legal-tech: searchable contract exhibits from SEC filings · Mar 2022–Apr 2025 · Sole engineer | Lawyers needed real contract examples, buried in public SEC filings. → Chose the stack and built the whole product: filing crawler, full-text search, saved searches and alerts, subscriptions and API access. Replaced the legacy site. → Indexed 100k–1M exhibits (reported). |
| `retail-pos` | US point-of-sale, delivery and inventory platform for licensed, regulated retailers · Aug 2021–Apr 2023 · Lead engineer, team of 2–3 | Regulated retailers had to run sales, delivery, stock and state compliance reporting. → Point of sale, delivery drivers, online orders, purchasing, inventory and state track-and-trace reporting. Built the public SaaS website and onboarding from the first commit. → A wholesale product spun off. Kept pace as the company expanded into more US states. Top backend contributor, also involved in hiring. |
| `tour-catalogue` | US cruise and escorted-tour retailer · Oct 2023–Sep 2025 · Proposed and designed the architecture | 7 tour operators each publish tours and prices in their own format and on their own schedule. → One catalogue fed by automated daily syncs that back up data before loading and never leave the site half-updated. Retired the legacy admin and started a new public site. → Tour and search pages became several times faster (reported). #1 contributor to the API. |
| `ewallet` | Singapore consumer and merchant e-wallet plus a marketplace · Jun 2020–Jul 2021 · Main contributor | Customers send money, pay merchants by QR code and withdraw to banks. A transfer must never be applied twice. → Money-movement and top-up flows, identity checks, the admin back office, and most of the marketplace seller portal. → Fixed a race condition found by a penetration test and hardened the wallet's security. |
| `car-rental` | Australian car-rental comparison and booking · Mar 2015–Apr 2020 · Senior backend developer | Travellers compare and book across many rental companies. Airline and airport partners want their own branded sites. → 10+ suppliers behind one booking API. Booking changes and cancellations, payments, white-label partner sites, admin back office. Replaced the old booking engine. → 4M+ rentals in 5 countries with sub-second responses (reported). One of the two largest contributors. |

**Timeline (17 entries):** May 2026–present food ordering (Lead Software Engineer, remote contractor) → Mar–Apr 2026 sales-pipeline and forecasting SaaS → Jan–Apr 2026 financial-newsletter publisher → Nov–Dec 2023 rural accommodation listings → Oct 2023–Sep 2025 cruise and tour retailer → Sep–Oct 2023 education-services marketplace (AU) → Aug–Oct 2023 fitness marketplace (US) → Jul–Sep 2023 game price comparison in 12 European countries → Mar 2022–Apr 2025 legal-tech → Aug 2021–Apr 2023 regulated-retail E-POS, which includes its SaaS website → Jun 2020–Jul 2021 Singapore e-wallet → Mar 2015–Apr 2020 car rental → Apr 2014–Apr 2015 hotel and travel booking for the Saudi market (Senior Software Engineer, full-time on-site, Dhaka) → Jul 2013–Feb 2015 Australian online travel retailer (part-time remote) → Jan 2012–Apr 2014 email-based project management (on-site) → May 2010–Dec 2011 job portal (on-site) → Jan 2009–Apr 2010 email outreach for a startup (Junior Web Developer, on-site).

Roles and types come from the "Role" line of each inventory section.

**Other copy**
- **WhyHireMe:** keep the five values, but reword any card that relies on technical terms ("Architecture-First Mindset" becomes "Thinks Ahead", covering systems that keep working as the business grows).
- **Call-to-action section (`FooterCTA`, id `contact`):** eyebrow "Let's talk", heading "Got a problem worth solving?", intro "Tell me what you're building or what's in the way, and we'll take it from there." The left column shows a real three-step "What happens next" sequence: you describe the problem, I reply with questions and first thoughts, and we decide together whether it's a fit. The email, WhatsApp and map blocks are deleted. The form and its API are unchanged.
- **Testimonials:** copy is unchanged apart from styling.
- **Rating stars:** ink-filled.
- **Form status:** text plus a `CheckCircle`/`AlertCircle` icon in ink or ash, with no red or green.

## Risks / Trade-offs

- [Deltas can't be archived before the baseline exists] → Task 1.1 archives `reposition-ai-remote-engineer` first. `openspec validate --strict` currently passes, with info notes that go away after that.
- [Overstating reported figures] → Figures marked "reported" in the inventory keep that meaning. Only the values in the draft table are allowed, and task 7.2 greps for the removed figures.
- [Seven nav links crowd the desktop bar] → Check at 1024px during apply. If it wraps, hide "Home" at `lg` (the brand already links home). This is a layout tweak only.
- [Countries strip names Canada and Thailand, which the shareable inventory doesn't mention] → Left unchanged per the proposal. See Open Questions.
- [Re-valued `slate`/`gray` names mislead future editors] → Comment in `globals.css` and a CLAUDE.md note.
- [Deploying from `main` is immediate] → Merge only after lint, build and the manual theme and mobile pass. Roll back by reverting the merge commit.

## Open Questions

- Should the countries strip keep Canada and Thailand? This is copy only and can be settled at any time without changing specs or tasks.
