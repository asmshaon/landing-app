import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";
import { Footer } from "../sections/Footer";
import { StudyFacts, caseStudies, labelClass } from "../sections/CaseStudies";
import { FULL_NAME } from "../seo";

const title = `Case studies · ${FULL_NAME}`;
const description =
  "Six businesses Abu Saleh has built software for: the problem each one faced, what was delivered and what changed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: { url: "/case-studies", title, description },
  twitter: { title, description },
};

const number = (i: number) => String(i + 1).padStart(2, "0");

// Intro with an index of every study, then one study per scene, then the call to action.
export default function CaseStudiesPage() {
  return (
    <div className="min-h-full">
      <Navbar />
      <main>
        <Scene>
          <Reveal className="max-w-4xl">
            <p className="eyebrow mb-4">Case studies</p>
            <h1 className="scene-heading">Six businesses, in their own words</h1>
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-slate-600 dark:text-slate-400">
              What each business needed, what I delivered, and what changed. Client names are left out on purpose.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ol className="mt-14 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-dark-600 border border-slate-200 dark:border-dark-600 rounded-2xl overflow-hidden">
              {caseStudies.map((study, i) => (
                <li key={study.id} className="bg-white dark:bg-dark-900">
                  <a
                    href={`#${study.id}`}
                    className="group flex h-full flex-col gap-4 p-6 lg:p-8 transition-colors hover:bg-slate-50 dark:hover:bg-dark-800"
                  >
                    <span className="flex items-center justify-between font-display text-sm font-semibold tabular-nums text-slate-400">
                      {number(i)}
                      <ArrowDown
                        className="w-4 h-4 transition-transform group-hover:translate-y-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="font-display text-lg lg:text-xl font-semibold leading-snug text-accent">
                      {study.title}
                    </span>
                    <span className="mt-auto text-sm text-slate-500 dark:text-slate-400">
                      {study.region} · {study.period}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </Scene>

        {caseStudies.map((study, i) => {
          const tone = i % 2 === 0 ? "ash" : "plain";
          const next = caseStudies[i + 1];

          return (
            <Scene key={study.id} id={study.id} tone={tone}>
              <article>
                <Reveal className="max-w-5xl">
                  <p className="eyebrow mb-5 tabular-nums">
                    Case study {i + 1} of {caseStudies.length}
                  </p>
                  <div className="flex items-start gap-5 lg:gap-8">
                    <span
                      className="hidden sm:block font-display font-semibold tabular-nums leading-none text-slate-300 dark:text-dark-500 text-6xl lg:text-8xl"
                      aria-hidden="true"
                    >
                      {number(i)}
                    </span>
                    <h2 className="font-display font-semibold text-accent text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em]">
                      {study.title}
                    </h2>
                  </div>
                  <StudyFacts
                    study={study}
                    className="mt-10 pt-6 border-t border-slate-200 dark:border-dark-600"
                  />
                </Reveal>

                <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  <Reveal delay={100} className="lg:col-span-5">
                    <p className={`${labelClass} mb-3`}>The problem</p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{study.problem}</p>

                    <div
                      className={`mt-10 rounded-2xl border border-slate-200 dark:border-dark-600 p-6 lg:p-8 ${
                        tone === "ash" ? "bg-white dark:bg-dark-900" : "bg-slate-50 dark:bg-dark-800"
                      }`}
                    >
                      <p className={`${labelClass} mb-3`}>The outcome</p>
                      <p className="font-display text-accent text-xl lg:text-2xl leading-snug">{study.outcome}</p>
                    </div>
                  </Reveal>

                  <Reveal delay={200} className="lg:col-span-7">
                    <p className={`${labelClass} mb-3`}>What I delivered</p>
                    <ul className="divide-y divide-slate-200 dark:divide-dark-600 border-y border-slate-200 dark:border-dark-600">
                      {study.delivered.map((item) => (
                        <li key={item} className="flex gap-4 py-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                          <Check className="mt-1 w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {next && (
                      <a
                        href={`#${next.id}`}
                        className="group mt-10 inline-flex items-center gap-2 font-semibold text-accent border-b border-accent pb-1"
                      >
                        Next: {next.title}
                        <ArrowDown className="w-4 h-4 shrink-0 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                      </a>
                    )}
                  </Reveal>
                </div>
              </article>
            </Scene>
          );
        })}

        <Scene tone={caseStudies.length % 2 === 0 ? "ash" : "plain"} className="text-center">
          <Reveal className="flex flex-col items-center">
            <h2 className="scene-heading max-w-4xl">Facing a problem like one of these?</h2>
            <p className="mt-6 max-w-xl text-lg lg:text-xl text-slate-600 dark:text-slate-400">
              Book a 30-minute call and tell me about it. You don&apos;t need to prepare anything.
            </p>
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
