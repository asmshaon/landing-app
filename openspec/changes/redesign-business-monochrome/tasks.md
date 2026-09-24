## 1. Baseline

- [x] 1.1 Archive `reposition-ai-remote-engineer` (`openspec archive reposition-ai-remote-engineer`) and confirm with `openspec list --specs` that `professional-positioning`, `remote-hiring-contact` and `tech-stack-display` exist. Then confirm `openspec validate redesign-business-monochrome --strict` reports no "target spec does not exist" notes.
- [x] 1.2 Commit the reposition work already in the working tree on its branch, so the redesign starts from a clean diff. Verify that `git status` shows no modified tracked files before section edits begin.

## 2. Monochrome tokens and theme

- [x] 2.1 In `app/globals.css`, re-value `dark-*` and `slate-*` and add the `gray-*` override to the neutral ash scale. Add `--ink` (light `#111`, dark `#f4f4f4`) and map `--color-accent`/`accent-light`/`accent-dark` to it (design §1). Add a comment explaining that slate and gray are the ash scale. Verify that `npm run build` passes.
- [x] 2.2 In `app/globals.css`, delete `hero-gradient`, `text-gradient`, `badge-glow`, `section-dark`, `float-animation` and its keyframes. Restyle `btn-primary`, `btn-outline`, `stats-card`, `value-card`, the nav underline and the scrollbar to ink and ash (design §2). Verify that `grep -nE 'rgba\(124|#7c3aed|#a78bfa|linear-gradient' app/globals.css` returns nothing.
- [x] 2.3 Set `defaultTheme="light"` in `app/providers.tsx`. Verify in a private window that the page first loads light, and that after toggling to dark and reloading it stays dark.
- [x] 2.4 Add Newsreader through `next/font/google` in `app/layout.tsx` as `--font-display`, register `--font-display` in `@theme inline`, and update the metadata description to the draft in design §8. Verify that `npm run build` passes and the browser tab title is unchanged.

## 3. Page chrome

- [x] 3.1 Update `navLinks` in `app/components/Navbar.tsx` to home/services("What I Do")/work/experience/why-me/testimonials, and relabel the CTA button (desktop and mobile) from "Contact" to "Let's talk". Make the bar, mobile menu and brand gradient text theme-aware and monochrome. Verify that each link scrolls to its section and the active underline tracks scrolling in both themes, and that the bar doesn't wrap at 1024px (if it does, hide Home at `lg`).
- [x] 3.2 Point `ScrollProgress`, `SlashList` (separator `text-slate-400`) and the unused `ThemeToggle.tsx` at ink/ash colors. Verify that the progress bar is visible in both themes.

## 4. Existing sections

- [x] 4.1 Rewrite `app/sections/Hero.tsx` with a theme-aware background, the headline in `font-display`, the supporting line, the "industries I build for" line, a single "Let's talk" button (with the availability line removed), a three-stat row visible at all widths, a greyscale photo and no glow blobs or float animation (design §8). Verify that at 375px the 16+ years is visible and nothing scrolls horizontally, and that the hero has no technology names.
- [x] 4.2 Make `ClientLogos.tsx` theme-aware (content unchanged). Verify it in both themes.
- [x] 4.3 Replace the three service cards in `Services.tsx` with the five "What I Do" outcome areas, using monochrome icon tiles, and rewrite the heading and intro in plain language. Verify that no card title is a discipline or technology name and that there is no AI area.
- [x] 4.4 Make `WhyHireMe.tsx` theme-aware and monochrome, and reword its technical card to "Thinks Ahead" (design §8). Verify that no purple, green or blue icon tiles remain.
- [x] 4.5 Restyle `Testimonials.tsx`: ink stars, and neutral avatar and link tiles with no blue, purple or amber (quote text unchanged). Verify with `git diff` that no quote wording changed.
- [x] 4.6 In `Footer.tsx`, make `FooterCTA` theme-aware, keep `Footer` black in both themes, rewrite the CTA copy with the "What happens next" steps (design §8), delete the email, WhatsApp and map blocks and their now-unused imports, and switch form status to an icon plus text in ink/ash. Verify that submitting the form still shows success (with `RESEND_API_KEY` set) and failure states in both themes.

## 5. New sections

- [x] 5.1 Create `app/sections/CaseStudies.tsx` (`id="work"`) with the six case studies from design §8: each an `<article id>` with a left rail and a right column, and an optional tech line of six items or fewer via `SlashList`. Verify that the six appear newest first, with no client names, links or screenshots, and a single column at 375px.
- [x] 5.2 Create `app/sections/Experience.tsx` (`id="experience"`) with the 17 engagements from design §8, as an `<ol>` with hairline rules and "Read case study" anchors for the six case-study entries. Verify that there are 17 entries from May 2026 to Jan 2009, that the car-rental anchor scrolls to `#car-rental`, and that dates stack above the text at 375px.
- [x] 5.3 Update `app/page.tsx` to the order Hero, ClientLogos, Services, CaseStudies, Experience, WhyHireMe, Testimonials, FooterCTA, Footer. Delete `app/sections/Projects.tsx`, `app/sections/Stack.tsx` and `public/projects/*` once `grep -rn "Projects\|Stack\|/projects/" app` shows no remaining references. Verify that `npm run build` passes.

## 6. Color sweep and docs

- [x] 6.1 Remove the remaining chromatic utilities. Verify that `grep -rnE '(green|orange|yellow|amber|blue|violet|purple|red|emerald)-[0-9]' app` returns nothing.
- [x] 6.2 Update the Theming and Architecture notes in `CLAUDE.md`: light default, ash scale behind the slate/gray/dark names, the new sections and the removal of Stack/Projects. Verify that the notes match the code.

## 7. Verification

- [x] 7.1 Run `npm run lint` and `npm run build`. Both pass.
- [x] 7.2 Search the rendered page (`curl -s localhost:3000` on `npm run dev`) for "40%", "99.9%", "vroomvroomvroom", "americandiscountvacations", "dlcompare", "Upwork", "FastAPI", "15+", "srabon", "mailto:", "wa.me", "WhatsApp", "iframe", "Open to remote" and ">Contact<". There are no matches.
- [x] 7.3 Do a manual pass in light and dark at 375px and 1280px. There is no horizontal scroll, every section follows the theme except the black footer, there is no colored UI, and muted text meets 4.5:1 contrast (checked with DevTools).
- [x] 7.4 Run `openspec validate redesign-business-monochrome --strict`. It passes.
