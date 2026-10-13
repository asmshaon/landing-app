## 1. Foundations

- [x] 1.1 Add the `.scene-heading` type scale to `app/globals.css` and a `Scene` Server Component (`min-h-svh`, centered, `tone` plain/ash) in `app/components/Scene.tsx`. Verify `npm run build` passes.
- [x] 1.2 Add `Reveal` in `app/components/motion/Reveal.tsx` (fade and rise once on enter, optional delay, static under reduced motion). Verify by wrapping one heading and seeing it animate in the browser, and stay static with reduced motion emulated.
- [x] 1.3 Add `PinnedSequence` in `app/components/motion/PinnedSequence.tsx` (one item fully visible at a time, plain stacked list under reduced motion). Verify with the proof statistics in task 2.2.
- [x] 1.4 Add `HorizontalTrack` in `app/components/motion/HorizontalTrack.tsx` (scroll-driven X translation at `lg`+, snap row below `lg` and under reduced motion). Verify with the outcome areas in task 2.5.
- [x] 1.5 Rewrite `ScrollProgress` to drive `scaleX` from `useScroll`. Verify the bar still fills from 0 to 100% across the page in both themes.

## 2. Scenes

- [x] 2.1 Hero: keep headline, supporting line and portrait only, headline at the largest size, with the hero easing out on scroll. Verify the first viewport at 1440×900 shows no stats, industries or countries, and nothing scrolls horizontally at 375px.
- [x] 2.2 Proof scene: the three statistics in a `PinnedSequence`, value very large and label below. Verify each fills the screen in turn at 1440×900.
- [x] 2.3 Countries scene from `ClientLogos.tsx`: large heading and staggered country names. Verify it fills one viewport alone at 1440×900.
- [x] 2.4 Industries scene: the six industries as large lines that light up as they cross the screen middle. Verify the lines go from faint to full ink in order while scrolling.
- [x] 2.5 "What I Do" scene: heading plus the five areas as large cards in a `HorizontalTrack` (id `services` kept). Verify the desktop track reaches the fifth card and the 375px row snaps with no page-level horizontal scroll.
- [x] 2.6 Work: an intro scene, then each case study as its own scene with the delivered list in a `<details>` labeled "See what I delivered". Verify with `git diff` that no case-study copy changed, that `/#car-rental` lands on its scene, and that the disclosure opens and closes by keyboard.
- [x] 2.7 "Why teams work with me": the five values in a `PinnedSequence` (id `why-me` kept). Verify each value fills the screen in turn.
- [x] 2.8 Testimonials: one quote per scene in large serif type. Verify with `git diff` that quote wording is unchanged and the longest quote fits a 1440×900 window without overflow.
- [x] 2.9 Closing CTA: one scene with a very large heading and the "Let's talk" button to `/book-a-call` (id `contact` kept). Verify the button navigates to `/book-a-call`.
- [x] 2.10 Update `app/page.tsx` to the scene order in the spec and remove the section hairline borders. Verify with the browser at 1440×900 that no two scene headings share a viewport.

## 3. Verification and docs

- [x] 3.1 Browser pass at 1440×900 and 375×667, light and dark, and with reduced motion emulated: every scene readable, no horizontal scroll, no console errors from the site.
- [x] 3.2 Update the Architecture notes in `CLAUDE.md` (scene order, motion primitives, reduced-motion behavior). Verify the notes match the code.
- [x] 3.3 Run `npm run lint` and `npm run build`; both pass.
