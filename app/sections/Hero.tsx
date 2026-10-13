import Image from "next/image";
import { HeroFade } from "../components/motion/ScrollEffects";

// Hand-drawn double frame around the portrait; strokes follow the theme's ink color.
function SketchFrame() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 500"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full text-accent pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        vectorEffect="non-scaling-stroke"
        strokeWidth="1.6"
        d="M34 13 C120 8 282 12 366 15 C385 16 392 29 391 49 C387 180 394 331 390 458 C389 478 378 488 358 487 C258 491 140 485 40 489 C20 490 10 479 11 460 C14 330 8 190 12 45 C12 26 19 14 34 13 Z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        strokeWidth="1"
        opacity="0.55"
        d="M29 19 C132 15 270 17 371 11 C389 12 396 27 395 45 C398 176 389 318 394 462 C394 482 381 493 362 492 C262 486 150 494 36 492 C17 491 5 481 7 462 C4 340 12 196 8 40 C8 22 15 18 29 19 Z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-dark-900 min-h-svh flex items-center pt-24 pb-16 lg:pt-28">
      <HeroFade className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.55fr_0.6fr] gap-10 lg:gap-14 items-center">
          {/* Portrait: first on mobile, right column on large screens */}
          <figure className="order-first lg:order-last w-full max-w-[14rem] sm:max-w-[16rem] lg:max-w-xs mx-auto lg:mr-0">
            <div className="relative aspect-[4/5]">
              <div aria-hidden="true" className="portrait-backdrop absolute inset-[3%] rounded-[1.4rem]" />
              <SketchFrame />
              <div className="absolute inset-x-[7%] top-[5%] bottom-[3%] overflow-hidden rounded-b-[1.2rem]">
                <Image
                  src="/images/asmshaon_profile_cutout.webp"
                  alt="Portrait of Abu Saleh"
                  fill
                  sizes="(min-width: 1024px) 20rem, 16rem"
                  className="object-contain object-bottom grayscale contrast-105"
                  priority
                />
              </div>
            </div>
            <figcaption className="mt-4 text-center text-[0.9375rem] leading-snug text-slate-600 dark:text-slate-400">
              The engineer you call when it has to work.
            </figcaption>
          </figure>

          <div>
            <h1 className="font-display font-semibold text-accent text-5xl sm:text-6xl lg:text-[5.25rem] xl:text-[6rem] leading-[1] tracking-[-0.025em]">
              I build software around what your business needs,{" "}
              <em className="not-italic text-slate-500 dark:text-slate-400">not the other way round.</em>
            </h1>

            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              For over 16 years, I&apos;ve built secure, resilient software that solves business
              problems for startups and enterprises: payments, bookings, point of sale, marketplaces
              and SaaS, built compliance-ready from day one. Software should adapt to your business,
              so I start with your goals, then build software that pays its way. I already use
              AI in my day-to-day engineering for clients, and I&apos;m now building AI features into
              business software on my own projects.
            </p>
          </div>
        </div>
      </HeroFade>
    </section>
  );
}
