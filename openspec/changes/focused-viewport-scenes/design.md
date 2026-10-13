## Context

The home page is `app/page.tsx` stacking Server Component sections from `app/sections/`. Each section is a `py-20 lg:py-24` band with a hairline top border and a 4xl–5xl heading. `framer-motion` 12 is already a dependency but unused on the page. Sections must stay Server Components where possible so copy stays in server HTML. See proposal.md for motivation and specs/focused-scroll-layout for required behavior.

## Goals / Non-Goals

**Goals:**
- A small set of reusable motion primitives, so each section stays a mostly static Server Component that wraps its content.
- Smooth scroll effects on mid-range laptops and phones (transform/opacity only, no layout thrash).

**Non-Goals:**
- Scroll-scrubbed video or image sequences as on Apple product pages; the site has no product imagery for it.
- Changing copy, the navbar, the footer band or `/book-a-call`.

## Decisions

### 1. Three client primitives in `app/components/motion/`
- `Reveal`: wraps children in a `motion.div` that animates `opacity 0→1, y 32→0` once via `whileInView` (`viewport={{ once: true, amount: 0.3 }}`), with an optional `delay` for staggering heading → body.
- `PinnedSequence`: takes an array of rendered items. Its outer element is `items.length × 100svh` tall; an inner `sticky top-0 h-svh` frame stacks the items absolutely. `useScroll({ target, offset: ["start start", "end end"] })` gives progress; each item i gets an opacity/scale `useTransform` window around `i / n`, so exactly one is fully visible at a time. Used for the proof statistics and the five values.
- `HorizontalTrack`: at `lg`+, outer height = `(cards × ~60vw + gutters)` mapped to vertical scroll, inner sticky frame translates the row on X from `0` to `-(rowWidth - viewportWidth)` (measured with a ResizeObserver). Below `lg` it renders a native `overflow-x-auto snap-x snap-mandatory` row.

Alternatives: GSAP ScrollTrigger (new dependency, licence and bundle cost); CSS scroll-driven animations (`animation-timeline: view()`), which would avoid JS but Firefox support is still incomplete. framer-motion is already installed and handles both.

### 2. Server-rendered content, client-only motion
Items passed to the primitives are rendered by the Server Component sections, so all text is in the HTML. With `useReducedMotion()` true, `PinnedSequence` renders items as a normal stack of full scenes and `HorizontalTrack` renders the snap row, with no scroll listeners.

### 3. Scene shell and type scale
A `Scene` Server Component gives `min-h-svh flex items-center py-24 lg:py-32` plus a `tone` prop (`plain` = `bg-white dark:bg-dark-900`, `ash` = `bg-slate-50 dark:bg-dark-800`). Hairline section borders are removed. Headings use `font-display text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight`; the hero headline goes to `lg:text-[6.5rem]`. A shared `.scene-heading` class in `globals.css` keeps the scale in one place.

### 4. Scene content decisions
- Hero: headline, supporting line, portrait. A client `HeroFade` wrapper maps page scroll 0→80vh to `opacity 1→0, scale 1→0.94` on the text.
- Statistics: value at `text-[9rem] lg:text-[14rem]`, label as a heading below.
- Countries: "Teams in six countries." heading, countries stagger in as large display text.
- Industries: heading "What I build for", industries as large stacked lines. Each line's opacity is tied to scroll (0.25 → 1 as it crosses the middle of the screen), so they light up one by one.
- Case studies: two-column at `lg` (meta + title left, problem + outcome right). Outcome in large type as the visual anchor. `<details>/<summary>` for the delivered list: native keyboard support, no JS.
- Testimonials: quote at `text-2xl lg:text-4xl` serif; the longest quote (~110 words) is checked to fit a 900px-tall window at that size, otherwise drop to `lg:text-3xl` for it.

### 5. ScrollProgress
Kept, but rewritten to `useScroll().scrollYProgress` → `scaleX` so it no longer re-renders React on every scroll event.

## Risks / Trade-offs

- [Pinned sections make the page much taller (≈ +8 viewports)] → keep each pinned item to one viewport, and the scroll progress bar shows where the visitor is.
- [`svh`/sticky quirks on mobile browsers with collapsing toolbars] → use `svh` units for frames, test in Chrome mobile emulation at 375×667.
- [Long testimonial overflowing at large size] → per-quote size check in the tasks.
- [Hash links landing mid-sequence] → ids sit on the outer element of each scene; case-study ids unchanged.

## Migration Plan

Single branch, verified with lint, build and a browser pass at 1440×900 and 375×667 in both themes, plus reduced motion. Rollback is reverting the merge; no data or config changes.
