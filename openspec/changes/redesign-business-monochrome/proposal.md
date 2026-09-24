## Why

Recruiters and other non-technical readers are now the site's main audience. The site still reads like an engineer's skills sheet: a grouped tech-stack section, tech lists on project cards, Backend/Frontend/DevOps service cards and a hero that lists languages. Its violet, gradient-heavy look also feels like a developer template. The career inventory (`career-history/inventory/pdf`, shareable edition) documents 18 sections of work from 2009 to 2026 with business outcomes. The site should tell that story in plain language, with a calm black, white and ash design.

## What Changes

- **Visual theme:** a monochrome palette of black, white and neutral ash greys replaces the violet accent, the blue-tinted darks, the gradients, the glows and the green, orange and yellow status colors. **Light (white/ash) becomes the default theme** and the black theme stays available through the toggle. The profile photo is shown in greyscale. Every section works in both themes.
- **Positioning copy:** the hero, the metadata and the section intros talk about the systems built and the problems they solve, instead of languages and frameworks. The engineer is not tied to past clients' industries. The headline is about building reliable systems that solve business problems. The supporting line states 16+ years and names kinds of systems (payments, bookings, point of sale, marketplaces, SaaS). A short "industries I build for" line lists retail and POS plus a few growing industries. The job title stays "Senior Full-Stack Software Engineer". The hero no longer mentions AI study.
- **Availability line removed:** "Open to remote roles, full-time or long-term contract" is removed. The page leads with value and problems solved, not with what the engineer is looking for.
- **Contact:** the message form is the only direct channel. **BREAKING (content removal):** the email address, WhatsApp number and embedded map are removed. The LinkedIn, GitHub and X links stay. The single call to action uses a conversational label ("Let's talk") instead of "Contact", and the section invites visitors to describe a problem.
- **What I do:** the Backend/Frontend/DevOps service cards are replaced with business outcome areas in plain language, such as taking bookings and payments, connecting many suppliers into one product, modernizing legacy systems, leading small teams, and security reviews. Each area is backed by the case studies.
- **Case studies (replaces Projects):** 6 anonymized case studies taken from the inventory. Each shows the business, the problem, what was delivered, the outcome and the role. The six are the car-rental comparison platform, the cruise and tour retailer, the Singapore e-wallet, the regulated-retail E-POS, the SEC-exhibit legal-tech product and in-venue food ordering. Any figure shown must appear in the inventory. **BREAKING (content removal):** the current project cards name client sites (vroomvroomvroom, americandiscountvacations, dlcompare), link to them and show their screenshots. They also make claims the inventory doesn't support ("40% faster loads", "99.9% uptime"). All of this is removed.
- **Experience timeline (new):** every engagement in reverse chronological order (17 entries, because the inventory's two E-POS sections are one engagement), each with dates, a one-line description of the business, the role and the type of engagement.
- **Stack section removed:** `Stack.tsx` is deleted. Technology names appear only as a small, muted line at the foot of each case study.
- **Highlighted evidence:** the hero may show a few business figures that the inventory supports (for example 16+ years, and 4M+ rentals handled on the car-rental platform), in addition to the years of experience.
- **Navigation:** the links become Home, What I Do, Work, Experience, Why Me and Testimonials, plus a "Let's talk" button.
- **Unchanged:** the contact form and email API, testimonial wording, the countries strip content, and the social, portfolio and blog links.

## Capabilities

### New Capabilities
- `monochrome-visual-theme`: the black/white/ash palette, light as the default theme with dark on the toggle, no chromatic accents, a greyscale photo and legible contrast in both themes.
- `business-case-studies`: anonymized, outcome-focused case studies where every figure can be traced to the inventory and technology appears only as a secondary footnote.
- `career-timeline`: a chronological list of all engagements with dates, business, role and engagement type.

### Modified Capabilities
- `professional-positioning`: the headline, the supporting line and the services become business-focused and domain-neutral, and an "industries I build for" line is added. The Python/FastAPI and "projects as production systems" requirements are removed. The rule that AI is presented only as study stays.
- `tech-stack-display`: the grouped stack section and its theme/viewport requirement are removed. The project tech-list requirement becomes a case-study footnote.
- `remote-hiring-contact`: the highlighted evidence can include figures backed by the inventory (16+ years). The employer-facing copy covers the new sections and invites visitors to describe a problem. The call-to-action label changes from "Contact" to a conversational one. The form becomes the only direct channel, so email, WhatsApp and the map are removed. The remote availability statement is removed.

These three capabilities come from the completed but unarchived change `reposition-ai-remote-engineer`. That change must be archived first so its specs become the baseline `openspec/specs/` that these deltas modify.

## Impact

- **Code:** `app/globals.css` (tokens, removal of gradient and glow classes), `app/providers.tsx` (default theme), `app/layout.tsx` (metadata, display font), `app/page.tsx`, `app/components/Navbar.tsx`, `app/components/SlashList.tsx`, `app/components/ScrollProgress.tsx`, and every file in `app/sections/`. New: `CaseStudies.tsx`, `Experience.tsx`. Deleted: `Stack.tsx`, `Projects.tsx`, and the unused `public/projects/*` screenshots.
- **Dependencies:** none added. The display font loads through the existing `next/font/google`.
- **API:** none. `app/api/send-email/route.ts` is untouched.
- **Content source:** only the shareable edition of the inventory is used, never the PRIVATE edition.
- **Deployment:** merging to `main` deploys to production immediately.
