import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";

export const testimonials = [
  {
    text: "Abu was a pleasure to work with. He is professional, reliable, and a very hard worker. Always positive, he works well both independently and as part of a team. He consistently made himself available when needed and brought creative, out-of-the-box thinking to every project. Abu stays up to date with best practices and modern frameworks, ensuring high-quality results. I highly recommend him for full-stack development work.",
  },
  {
    text: "I can't recommend Abu enough. He was a pleasure to work with from start to finish. Abu demonstrated strong technical expertise across both front-end and back-end development, delivering clean, efficient code and thoughtful solutions throughout the project. He is a very hard worker, listener and problem solver. I came to him only with an idea and he built it from scratch. Communication was clear, prompt, and professional, and he consistently met (or beat) deadlines. What really stood out was his proactive approach to solving problems and suggesting improvements that added real value. I will absolutely hire Abu again for future projects and recommend him to anyone looking for a skilled and dependable developer.",
  },
  {
    text: "Abu Saleh is one of the best developers I've ever worked with. He not only can accomplish any job presented to him, but he makes really sound judgements on how to fill in all the gaps that were previously undefined. In addition to this, he has exceptional leadership skills as he led our team of developers to complete the project at hand. We have already re-hired him for our next project. Highly recommend.",
  },
];

// The quote shown on the home page; the rest live on /testimonials.
const FEATURED = 2;

const featuredSizes = "text-2xl sm:text-3xl lg:text-[2.5rem]";
const longSizes = "text-xl sm:text-2xl lg:text-[1.875rem]";

export function Stars() {
  return (
    <span className="flex gap-1" aria-label="5 out of 5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-accent fill-current" />
      ))}
    </span>
  );
}

// A single quote in large serif type. Very long quotes step down a size so they fit one screen.
export function Quote({ text }: { text: string }) {
  return (
    <blockquote
      className={`font-display text-accent leading-[1.35] tracking-[-0.01em] ${
        text.length > 500 ? longSizes : featuredSizes
      }`}
    >
      &ldquo;{text}&rdquo;
    </blockquote>
  );
}

// One featured quote, with a link to the full set so interest shows up as visits to /testimonials.
export function Testimonials() {
  return (
    <Scene id="testimonials" tone="ash">
      <Reveal>
        <figure className="max-w-5xl">
          <figcaption className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 lg:mb-10">
            <span className="eyebrow">In my clients&apos; own words</span>
            <Stars />
          </figcaption>
          <Quote text={testimonials[FEATURED].text} />
        </figure>
        <Link
          href="/testimonials"
          className="group mt-10 inline-flex items-center gap-2 font-semibold text-accent border-b border-accent pb-1"
        >
          Read more kind words
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </Reveal>
    </Scene>
  );
}
