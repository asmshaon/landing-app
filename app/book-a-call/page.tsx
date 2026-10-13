import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../sections/Footer";
import { FULL_NAME } from "../seo";
import { BookingCalendar } from "./BookingCalendar";

const title = `Book a call · ${FULL_NAME}`;
const description = "Pick a time for a short call about what you're building or what isn't working.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book-a-call" },
  openGraph: { url: "/book-a-call", title, description },
  twitter: { title, description },
};

const steps = [
  {
    title: "Book a slot",
    detail: "If you can, add a line or two about the system and what's going wrong. It helps me come prepared.",
  },
  {
    title: "We talk for 30 minutes",
    detail: "You walk me through what you have and where it hurts. Expect a lot of questions from me.",
  },
  {
    title: "You get a straight answer",
    detail: "If I can help, I'll tell you how I'd approach it. If I'm not the right person for it, I'll say so.",
  },
];

export default function BookACall() {
  return (
    <div className="min-h-full">
      <Navbar />
      <main className="bg-white dark:bg-dark-900 pt-28 pb-20 lg:pt-36 lg:pb-24">
        {/* Calendar spans the full width so Cal.com shows the time slots beside the month, not below it. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div>
            <h1 className="mb-8 font-display font-medium text-accent text-4xl lg:text-[3.25rem] leading-[1.05]">
              Tell me what you&apos;re working on.
            </h1>

            <p className="eyebrow mb-2">How the call goes</p>
            <ol className="md:grid md:grid-cols-3 md:gap-x-8">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 py-4"
                >
                  <span className="row-span-2 w-8 h-8 rounded-full border border-accent flex items-center justify-center font-display text-accent">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-accent">{step.title}</span>
                  <span className="text-[0.9375rem] text-slate-600 dark:text-slate-400">{step.detail}</span>
                </li>
              ))}
            </ol>
          </div>

          <BookingCalendar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
