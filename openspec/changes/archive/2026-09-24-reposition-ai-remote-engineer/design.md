## Context

See proposal.md for motivation and the specs for requirements. This change touches most sections of a single-page Next.js site. Content is hardcoded as arrays at the top of each section file.

Constraints that shape the approach:
- **Two kinds of section styling:**
  - Theme-aware sections (Services, Projects, Testimonials) use `bg-slate-50 dark:bg-dark-800`.
  - Always-dark sections (Hero, ClientLogos, WhyHireMe, contact CTA) use `section-dark`, `hero-gradient` or `bg-dark-900`.
- **Hero stats card:** it floats beside the photo and is `hidden lg:block`, so it doesn't show on mobile.
- **Navigation:** in-page links go through the Navbar's `scrollToSection`, which offsets for the 80px fixed nav. A plain `href="#contact"` relies on `scroll-smooth` and has no offset.
- **Testimonials:** they currently use `key={t.name}`, and all three share the same name. Relabeling them all "Client" keeps the duplicate React keys.
- **Verification:** there is no test suite; checks are `npm run lint`, `npm run build` and a manual visual check.

## Goals / Non-Goals

**Goals:**
- Tell the AI-first, backend-supported, remote-focused story with as few new components as possible.
- Make the stack section and project tech lists share one typographic style.
- Keep every changed section correct in light and dark themes and at phone width.

**Non-Goals:**
- Redesigning the visual language (colors, fonts, hero layout, animations).
- Adding a navigation link for the stack section.
- Changing the contact form, the email API route or its HTML escaping.
- Updating `portfolio.asmshaon.tech` or `blog.asmshaon.tech`.

## Decisions

### 1. Stack section is a new server component with a data array
Add `app/sections/Stack.tsx`, export `Stack`, with `id="stack"`, and render it in `app/page.tsx` between `<Services />` and `<Projects />`. The groups live in a `stackGroups` array at the top of the file (`{ label, lines: string[][] }`), following the same content-in-file pattern as other sections.
- *Alternative:* fold the stack into the Services cards. Rejected because the card grid with colored icon tiles conflicts with the typographic treatment.
- *Alternative:* add "Stack" to `navLinks`. Rejected because the nav already has six items and the section is supporting content, not a destination.

### 2. Stack layout is a definition list with hairline separators
- **Markup:** a semantic `<dl>`. Each group is a row with the label (`<dt>`) in small uppercase tracked muted text (matching the existing `text-xs font-bold uppercase tracking-widest` eyebrow style) and its lines (`<dd>`) in larger medium-weight text.
- **Layout:** two columns (`sm:grid-cols-[10rem_1fr]`) that stack to one column below `sm`.
- **Separators:** a `border-t` using `border-slate-200 dark:border-dark-600` between groups.
- **Background:** `bg-white dark:bg-dark-900`, so it doesn't merge into the identical `slate-50`/`dark-800` bands of Services and Projects above and below.
- *Alternative:* a centered multi-column list. Rejected because group labels read better when aligned left, like a spec sheet.

### 3. One shared slash-separated list component
Add `app/components/SlashList.tsx`, which renders `string[]` items joined by a separator `<span aria-hidden="true">` containing `/` in a muted accent color (`text-accent/60`). Screen readers get each item name. Both `Stack` (each line) and `Projects` (each project's `tech`) use it, so the two can't drift apart visually. After Projects switches over, the `.tech-tag` CSS in `globals.css` is removed.
- *Alternative:* plain `tech.join(" / ")` strings. Rejected because the separator couldn't be colored separately, and every slash would be read aloud.

### 4. Consistent title and draft copy
One title, **"Senior Full-Stack Software Engineer"**, is used in the metadata title (`Abu Saleh - Senior Full-Stack Software Engineer`) and the Navbar subtitle, and the hero is written to match it. AI is not in the title: the engineer's AI work is side projects and self-study, so the page presents it as a learning area only. "Architect" is deliberately not used as a job title: for remote hiring it reads as a role companies staff internally, and the architecture depth is carried by the hero supporting line and the "Architecture-First Mindset" value instead. Draft copy (final wording can be tuned during apply without changing the specs):
- **Hero headline:** "Senior full-stack engineer building production systems that scale."
- **Hero supporting line:** "15+ years across backend and frontend in PHP / Laravel, Python / FastAPI, TypeScript and Next.js - and currently going deep on AI engineering, from LLM APIs to RAG and agents."
- **Hero availability:** "Open to remote roles - full-time or long-term contract"
- **Metadata description:** the headline and supporting line combined.
- **ClientLogos:** "Worked remotely with teams" / "across 6 countries"
- **Services:** eyebrow stays "What I Do". Heading "Full-Stack Engineering, End to End". Intro: what I bring to a team, from architecture to production. Three cards in a 3-column grid: Backend Engineering, Frontend Development, DevOps & Infrastructure. The AI card is removed rather than reworded, since offering AI as a service would overstate self-study. The Backend card names Laravel, Python / FastAPI, and Node.js / NestJS / Express.
- **Projects:** eyebrow "Selected Work". Heading "Production Systems at Scale". Intro: systems I designed and built that run in production.
- **WhyHireMe:** eyebrow "Why Teams Work With Me". The "Modern & AI-Assisted Development" card becomes "Remote-Ready Ownership": works async, communicates clearly, and owns outcomes end to end. The existing "End-to-End Ownership" card is reworded to focus on the full lifecycle, so the two don't overlap.
- **Testimonials:** eyebrow "Testimonials". Heading "What It's Like to Work With Me".
- **Footer CTA:** heading "Let's Work Together". Intro: "Hiring for a remote role or a long-term contract? Get in touch."

### 5. Calls to action
- **Hero:** replace the three buttons with one `btn-primary` "Contact" plain anchor to `#contact`. Add `scroll-mt-20` to the `#contact` section so plain anchors clear the fixed nav. The Navbar's own `scrollToSection` computes its offset itself and is unaffected.
  - *Alternative:* copy the Navbar's scroll handler into Hero. Rejected because it duplicates logic that one CSS class already covers.
- **Navbar:** change the button label from "Hire Me" to "Contact". Its handler is unchanged.
- **Footer CTA:** remove the button row entirely. The form sits directly below the intro, so a Contact button would point at itself.
- **Imports:** remove icons that are no longer used (`Phone`, `FileText`, `Clock`, `CheckCircle`, `Crown`, and any in Testimonials) so lint passes.

### 6. Stats reduction
- **Hero:** the floating stats card keeps only the "15+ Years Experience" row. It stays a floating accent, with the same component and a single row. The years statement also appears in the supporting line, so mobile users see it (see the spec scenario for phone width).
- **Testimonials:** delete the `stats` array and the left column. The grid becomes `grid md:grid-cols-3 gap-6` across the full width. Keys switch to the array index or a stable `id`, since every name is now "Client". Initials become "C". In the third testimonial, delete only the words " on Upwork". The "Explore My Work" / "Read My Insights" cards stay.

## Risks / Trade-offs

- **[Lost inbound freelance leads]** Removing Upwork proof and buttons may reduce project enquiries from past-style clients. → Accepted and intentional; long-term contracts are still invited through Contact.
- **[AI interest without AI experience]** → AI appears only as the hero's "currently going deep on" line and the stack's "Exploring" row; the specs forbid offering AI as a service. If AI work ships later, promoting it is a content-only follow-up.
- **[Single-row stats card looks sparse]** → Keep it compact. If it looks off during the visual check, remove the card; the years stat stays in the hero text either way, so the spec is still met.
- **[Linked portfolio site still mentions Upwork]** → Out of scope; flagged to the user.
- **[Push to main deploys immediately]** → Implement on a branch, run lint and build, check both themes at desktop and phone width, then merge.

## Migration Plan

1. Implement on a feature branch.
2. `npm run lint` and `npm run build` must pass.
3. Visual check with `npm run dev` in dark and light themes at desktop and about 375px: hero, stack, projects, testimonials, contact.
4. Search the rendered page for "Upwork", "Job Success", "Top Rated", "Hire Me", "Quote" and "calendly".
5. Merge to `main`; the deploy runs automatically. Roll back with `git revert` of the merge commit.
