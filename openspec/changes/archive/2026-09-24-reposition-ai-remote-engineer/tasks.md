## 1. Setup

- [x] 1.1 Create a feature branch off `main` (e.g. `reposition-ai-remote-engineer`) and verify `git branch --show-current` shows it, so nothing deploys before review

## 2. Shared typography

- [x] 2.1 Add `app/components/SlashList.tsx`, which renders `string[]` items separated by an `aria-hidden` muted-accent `/` (design decision 3). Verify `npm run lint` passes.

## 3. Positioning and title

- [x] 3.1 Update `app/layout.tsx` metadata to the title "Abu Saleh - AI Software Engineer & Architect" and a description combining the headline and supporting line. Verify the browser tab title in `npm run dev`.
- [x] 3.2 Change the Navbar brand subtitle to "AI Software Engineer & Architect" and the CTA button label from "Hire Me" to "Contact". Verify both on desktop, and that the mobile menu shows no "Hire Me".
- [x] 3.3 Rewrite the Hero:
  - remove the Upwork badge
  - set the AI-led headline and the backend supporting line (PHP / Laravel, Python / FastAPI, TypeScript, 15+ years)
  - set the availability line to remote full-time or long-term contract

  Verify the hero text at desktop and about 375px width.
- [x] 3.4 Reduce the Hero actions and stats:
  - replace the Hire Me / Book a Call / Get a Quote buttons with a single "Contact" anchor to `#contact`
  - reduce the floating stats card to the 15+ Years row only
  - remove unused icon imports

  Verify that clicking Contact scrolls to the contact section and that lint passes.

## 4. Services and stack

- [x] 4.1 Update `app/sections/Services.tsx`:
  - reorder the cards so AI Engineering comes first
  - reword the AI card items to applied AI (LLM APIs, RAG, agents & agentic workflows, MCP, document processing, AI automation in existing SaaS) and remove "Data Processing & Insights"
  - add Python / FastAPI and Node.js / NestJS / Express to the Backend card
  - make the heading and intro employer-facing

  Verify rendering in both themes.
- [x] 4.2 Add `app/sections/Stack.tsx` (`id="stack"`), with the `stackGroups` data for Backend, Frontend, Data, Infrastructure and AI exactly as in the tech-stack-display spec. Render it as a `<dl>` with hairline separators and a `bg-white dark:bg-dark-900` background, using `SlashList` for each line. Verify there are no logos, icons or colored badges.
- [x] 4.3 Render `<Stack />` between `<Services />` and `<Projects />` in `app/page.tsx`. Verify its position in `npm run dev` in light and dark themes, and that at about 375px the labels stack above their values with no horizontal scroll.

## 5. Projects

- [x] 5.1 In `app/sections/Projects.tsx`:
  - replace the `.tech-tag` pills with `SlashList`
  - set the eyebrow to "Selected Work" and the heading to "Production Systems at Scale"
  - rewrite the intro so it doesn't say "built for clients"
  - keep Car Booking Engine first

  Verify each card shows a single line of slash-separated tech.
- [x] 5.2 Remove the now-unused `.tech-tag` rules from `app/globals.css`. Verify `grep -rn "tech-tag" app` returns nothing.

## 6. Employer-facing sections

- [x] 6.1 Update `app/sections/ClientLogos.tsx` copy to "Worked remotely with teams" / "across 6 countries". Verify the strip text.
- [x] 6.2 In `app/sections/WhyHireMe.tsx`:
  - change the eyebrow to "Why Teams Work With Me"
  - replace the "Modern & AI-Assisted Development" card with a "Remote-Ready Ownership" value
  - reword "End-to-End Ownership" so the two don't overlap

  Verify that five distinct values render.
- [x] 6.3 In `app/sections/Testimonials.tsx`:
  - remove the `stats` array and the left column so testimonials span the full width
  - relabel all three as "Client" with initials "C" and no role label
  - switch keys to the index or a stable id
  - delete " on Upwork" from the third quote only
  - make the heading employer-facing
  - remove unused icon imports

  Verify there are no duplicate-key warnings in the browser console.
- [x] 6.4 In `app/sections/Footer.tsx` (`FooterCTA`):
  - remove the Hire Me / Book a Call / Get a Quote button row
  - set the heading to "Let's Work Together" and the intro to invite remote-role or long-term-contract enquiries
  - add `scroll-mt-20` to the `#contact` section
  - remove unused icon imports

  Verify the contact form still renders below the intro.

## 7. Verification

- [x] 7.1 Run `npm run lint` and `npm run build`, and verify both succeed with no errors.
- [x] 7.2 Run `grep -rniE "upwork|job success|top rated|hire me|get a quote|book a call|calendly|verified review" app` and verify there are no matches.
- [x] 7.3 Visual check in `npm run dev`, in dark and light themes, at desktop and about 375px. Go through hero, countries strip, services, stack, projects, why-me, testimonials and contact. Verify:
  - there are no Upwork references
  - Contact is the only CTA
  - the 15+ years stat is visible on mobile in the hero text
  - the layout has no horizontal scroll
- [x] 7.4 Submit the contact form in `npm run dev` with valid data (requires `RESEND_API_KEY` in `.env`), and verify the success message appears and the email arrives.
