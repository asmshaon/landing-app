import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";
import { Footer } from "../sections/Footer";
import { Quote, Stars, testimonials } from "../sections/Testimonials";
import { FULL_NAME } from "../seo";

const title = `Kind words · ${FULL_NAME}`;
const description = "Why clients come back to work with Abu Saleh, in their own words.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/testimonials" },
  openGraph: { url: "/testimonials", title, description },
  twitter: { title, description },
};

// Every testimonial, one per screen, then the single call to action.
export default function TestimonialsPage() {
  return (
    <div className="min-h-full">
      <Navbar />
      <main>
        <Scene>
          <Reveal className="max-w-4xl">
            <p className="eyebrow mb-4">Kind words</p>
            <h1 className="scene-heading">Don&apos;t take my word for it</h1>
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-slate-600 dark:text-slate-400">
              A few words from clients I&apos;ve worked with, some of them more than once.
            </p>
          </Reveal>
        </Scene>

        {testimonials.map((t, idx) => (
          <Scene key={idx} tone={idx % 2 === 0 ? "ash" : "plain"}>
            <Reveal>
              <figure className="max-w-5xl">
                <figcaption className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 lg:mb-10">
                  <span className="eyebrow tabular-nums">
                    {idx + 1} of {testimonials.length}
                  </span>
                  <Stars />
                </figcaption>
                <Quote text={t.text} />
              </figure>
            </Reveal>
          </Scene>
        ))}

        <Scene className="text-center">
          <Reveal className="flex flex-col items-center">
            <h2 className="scene-heading max-w-4xl">Let&apos;s make your project the next one.</h2>
            <Link
              href="/book-a-call"
              className="btn-primary mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold"
            >
              Let&apos;s talk
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Reveal>
        </Scene>
      </main>
      <Footer />
    </div>
  );
}
