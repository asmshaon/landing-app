## Why

The site currently pitches a freelancer to Upwork clients. It uses three different job titles, never mentions Python/FastAPI, treats AI as a passing mention, and pushes visitors to Upwork links and quotes. The goal is now remote full-time roles and long-term remote contracts. For that, the page needs to present an AI-focused software engineer and architect with deep backend and systems experience, supported by the existing production projects rather than marketplace stats.

## What Changes

- **Positioning:** the headline presents a senior full-stack engineer building production systems that scale. The supporting line covers 15+ years across PHP/Laravel, Python/FastAPI, TypeScript and Next.js, and names AI engineering as current study. One consistent job title, "Senior Full-Stack Software Engineer", is used in the page metadata and Navbar. No copy implies ML research, data science, or AI delivery experience.
- **Tech stack section (new):** a typographic section between Services and Projects. The stack is shown in labeled groups (Backend, Frontend, Data, Infrastructure, Exploring) using type, spacing and subtle separators, with no logos or colored badges. Python/FastAPI sits in the Backend group alongside PHP/Laravel; the AI technologies sit under "Exploring" so they are not presented as delivered experience.
- **Remote availability:** "Available for new projects" becomes an availability statement for remote full-time roles or long-term contracts. Headings and copy aimed at clients are rewritten for hiring managers and teams (Services, Projects intro, ClientLogos, WhyHireMe, Testimonials, Footer CTA).
- **BREAKING (content removal):** remove every Upwork reference. This covers the "Top Rated Plus on Upwork" badge, Upwork profile links, Upwork hours, Job Success Score and Upwork status stats in the Hero and Testimonials, and the "Upwork Client / Verified Review" labels.
- **Calls to action:** remove "Hire Me" (Upwork link), "Get a Quote" (mailto) and "Book a Call" (Calendly) from the Hero and Footer CTA. Contact is the only action, and the Navbar button is relabeled from "Hire Me" to "Contact".
- **Highlights:** keep projects, 15+ years of experience and remote focus. The Hero stats card keeps only years of experience. The Testimonials stats column is removed and the three testimonials use the full width, labeled "Client".
- **Services:** the AI & Automation card is removed entirely, because AI is self-study rather than delivered work; services are Backend, Frontend and DevOps. The Backend card names Python/FastAPI and Node.js/NestJS/Express alongside Laravel.
- **WhyHireMe:** the "Modern & AI-Assisted Development" card, which is about using AI tools to code, is replaced with a remote-work ownership and reliability value.
- **Projects:** keep the existing three projects. The per-project tech pills become plain slash-separated text, and the intro copy frames them as production systems rather than client deliverables.
- **Unchanged:** the contact form and email API, LinkedIn/GitHub/X links, the Dhaka map, portfolio and blog links, theme behavior. No timezone-overlap line and no CV download.

## Capabilities

### New Capabilities
- `professional-positioning`: how the site presents the engineer's identity. Covers the full-stack-led headline, the experience supporting line, a consistent job title, first-class Python/FastAPI, AI framed as a learning area only, and projects presented as production systems.
- `tech-stack-display`: a typographic, grouped presentation of the technical stack with no logo grids or colored per-technology badges, including plain-text tech lists on projects.
- `remote-hiring-contact`: the remote-employment focus and how visitors act on it. Covers availability for remote full-time or long-term contract work, Contact as the only call to action, no Upwork references or stats, highlighted experience years, and testimonials labeled as clients.

### Modified Capabilities
(none, since the project has no existing specs)

## Impact

- **Code:** `app/layout.tsx` (metadata), `app/components/Navbar.tsx` (subtitle, CTA label), and these sections under `app/sections/`: `Hero.tsx`, `ClientLogos.tsx`, `Services.tsx`, `Projects.tsx`, `WhyHireMe.tsx`, `Testimonials.tsx` and `Footer.tsx` (`FooterCTA`). There will be a new section component for the stack, `app/page.tsx` will be updated to include it, and `app/globals.css` may need changes (tech-tag styling, stack typography).
- **Dependencies:** none added. Imports of lucide icons that are no longer used get removed (for example `Phone`, `FileText`, `Crown`, `CheckCircle`, `Clock`).
- **API:** none. `app/api/send-email/route.ts` is untouched.
- **External:** `portfolio.asmshaon.tech` is linked from the page and may still reference Upwork. It is a separate site and out of scope.
- **Deployment:** merging to `main` deploys to production immediately.
