## Why

Every section of the landing page currently packs several ideas into one screen: the hero carries the headline, a paragraph, six industry pills and three stats; "What I Do" and "Why work with me" show five cards side by side; a case study shows meta, problem, a six-item list, an outcome and tech at once. A visitor's eye has nowhere to land. Apple's iPhone page shows the alternative: roughly one screen per idea, one large heading, generous space, and motion that reveals content as you scroll. The page should read the same way, so a recruiter or business owner takes in one point at a time.

## What Changes

- Restructure the home page into full-viewport "scenes", each presenting a single idea with a large heading. Sections lose their hairline top borders and alternate white and ash backgrounds instead.
- Hero keeps only the headline, the supporting line and the portrait, at a larger type size. The three stats and the industries list move out of the hero.
- Proof scene: the three highlighted statistics are shown one at a time, each filling the screen, switching as the visitor scrolls (pinned scroll sequence).
- Reach scene: the countries strip becomes its own full scene with large type. Industries become their own scene, with each industry highlighting in turn as the visitor scrolls.
- "What I Do": a heading, then the five outcome areas as large cards on a horizontal track that moves as the visitor scrolls down (desktop), or a swipeable snap carousel (below `lg`).
- Work: an intro scene, then one scene per case study. Each shows the title, meta, problem and outcome in large type; the "What I delivered" list moves behind a "See what I delivered" disclosure so it doesn't compete with the outcome. Copy, figures and anchors are unchanged.
- "Why teams work with me": the five values shown one at a time in a pinned scroll sequence, like the proof scene.
- Testimonials: one quote per scene, in large serif type. Quote wording unchanged.
- Closing call to action: one scene with a very large heading and the single "Let's talk" button to `/book-a-call`.
- Scroll effects throughout: fade-and-rise reveals as content enters, the hero easing out as you scroll past it, pinned sequences and the horizontal track. All motion uses transform and opacity only, and is switched off for visitors who prefer reduced motion (content then shows statically, fully readable).
- No copy, figures, quotes or contact rules change. The `/book-a-call` page is out of scope.

## Capabilities

### New Capabilities
- `focused-scroll-layout`: one-idea-per-viewport scene structure, type scale, scroll-driven reveals and sequences, reduced-motion and phone-width behavior for the home page.

### Modified Capabilities
<!-- None in openspec/specs/. See Impact for the conflict with the unarchived change. -->

## Impact

- Code: `app/page.tsx`, every file in `app/sections/`, `app/globals.css`; new client components in `app/components/` for reveals, pinned sequences and the horizontal track. Uses the existing `framer-motion` dependency; no new packages.
- Specs: the completed but unarchived change `redesign-business-monochrome` has a `professional-positioning` requirement "Industries built for" that says the hero SHALL show the industries list. This change moves that list to its own scene directly after the hero, so that requirement's wording needs updating when the earlier change is archived.
- SEO: headings and text remain in the server-rendered HTML; no metadata changes.
- Risk: pinned scroll sequences add page height and rely on client JS for the effect. Without JS or with reduced motion, every item still renders in order as normal content.
