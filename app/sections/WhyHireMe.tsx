import { Compass, Eye, Globe, Lightbulb, MessageCircle, Plus, Rocket, Target, Users, Zap } from "lucide-react";
import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";
import { accent } from "../components/accents";

// Each trait is backed by a client testimonial ("Always positive", "Communication was clear", "met (or beat) deadlines",
// "proactive approach") or the career inventory: the urgency
// example is the food-ordering security review (critical findings fixed within three days).
// Teamwork: "works well both independently and as part of a team", "led our team of developers",
// and the case studies (releases through QA, tools for sales, finance and customer service staff).
// `summary` is the one-line version shown in the hub diagram; keep it within the description's claims.
// All copy follows positive outcome-focused language (POFL): say what will happen, not what to
// avoid ("We'll ship first thing Tuesday", not "We can't ship until Tuesday").
const values = [
  {
    icon: Target,
    title: "Business-first",
    summary: "Every task tied to a real business result.",
    description: "I start from the business goal and keep the team pointed at it, so every task we pick up moves a real result forward.",
  },
  {
    icon: MessageCircle,
    title: "Positive, outcome-focused language",
    summary: "Every message framed around what we can do.",
    description: "I frame every update around what we can do and the result we are working toward: “We’ll ship first thing Tuesday” rather than “We can’t ship until Tuesday”. It keeps conversations constructive and cooperative, and I celebrate progress and small wins along the way.",
  },
  {
    icon: Compass,
    title: "Thinks ahead",
    summary: "Built today for where the business is heading.",
    description: "I plan for where the business is heading, so the team builds once and the system grows smoothly with it.",
  },
  {
    icon: Eye,
    title: "Transparent",
    summary: "Clear updates, honest estimates, early heads-ups.",
    description: "Clear updates, honest estimates and deadlines kept. I flag risks early, together with a way forward, so the team and stakeholders can plan with confidence.",
  },
  {
    icon: Lightbulb,
    title: "Proactive",
    summary: "Risks raised early, improvements offered first.",
    description: "I spot risks early and bring improvements to the table on my own initiative.",
  },
  {
    icon: Zap,
    title: "A sense of urgency",
    summary: "Fast, calm action. Critical fixes in three days.",
    description: "When something matters, I act fast and stay calm. On my current project, critical security findings were closed within three days.",
  },
  {
    icon: Rocket,
    title: "Stays after launch",
    summary: "With the team through release and beyond.",
    description: "Launch is the midpoint. I stay with the team to release, monitor and improve, until the work delivers its full value.",
  },
  {
    icon: Globe,
    title: "Remote-ready ownership",
    summary: "Owns the work end to end, in any time zone.",
    description: "At home across time zones. I own my work end to end, keep it moving on my own and make progress visible to the whole team.",
  },
  {
    icon: Users,
    title: "Cross-functional teamwork",
    summary: "One team with QA, sales, finance and support.",
    description: "I work side by side with QA, sales, finance and customer service, share what I know and help teammates succeed, so the whole team moves as one.",
  },
];

// Where each habit sits around the hub (percent of the diagram box): nine points on an ellipse,
// clockwise from the top centre. One entry per habit, in the same order as `values`.
const hubPositions = [
  { x: 50, y: 11 },
  { x: 75, y: 17 },
  { x: 88, y: 44 },
  { x: 86, y: 67 },
  { x: 63, y: 91 },
  { x: 37, y: 91 },
  { x: 14, y: 67 },
  { x: 12, y: 44 },
  { x: 25, y: 17 },
];

// Non-breaking hyphens in titles, so "outcome-focused" stays together when a title wraps.
const keepHyphens = (text: string) => text.replaceAll("-", "\u2011");

// How far along each spoke the line is drawn (1 = all the way to the habit's centre).
const SPOKE = 0.62;

const iconTile =
  "flex w-11 h-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-900";

// All nine habits on one screen. From lg up: a hub diagram, with "My DNA" in the centre and the
// habits around it on spokes. Below lg: cards with the same summaries, each opening to the full description.
export function WhyHireMe() {
  return (
    <Scene id="why-me" className="lg:py-16">
      <Reveal className="lg:hidden">
        <p className="eyebrow mb-4">My DNA</p>
        <h2 className="scene-heading">The habits behind the work</h2>
      </Reveal>

      {/* Hub diagram */}
      <Reveal className="hidden lg:block">
        <div className="relative h-[36.5rem] xl:h-[39rem]">
          <svg
            className="absolute inset-0 h-full w-full text-slate-300 dark:text-dark-500"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Spokes run from the centre and stop short of each habit, so no text needs a backing. */}
            {hubPositions.map(({ x, y }) => (
              <line
                key={`${x}-${y}`}
                x1="50"
                y1="50"
                x2={50 + (x - 50) * SPOKE}
                y2={50 + (y - 50) * SPOKE}
                stroke="currentColor"
                strokeWidth="1.25"
                strokeDasharray="5 5"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Centre: two faint rings around a solid disc holding the heading */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] xl:h-[21rem] xl:w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-200 dark:border-dark-600" />
            <div className="absolute left-1/2 top-1/2 h-[14.5rem] w-[14.5rem] xl:h-[17rem] xl:w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-slate-50 dark:border-dark-600 dark:bg-dark-800" />
            <div className="relative flex h-48 w-48 xl:h-56 xl:w-56 flex-col items-center justify-center rounded-full bg-accent text-center shadow-xl shadow-black/10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-inverse/70">My DNA</p>
              <h2 className="mt-2 px-6 font-display text-[1.4rem] xl:text-[1.65rem] font-semibold leading-tight tracking-[-0.01em] text-ink-inverse">
                The habits behind the work
              </h2>
            </div>
          </div>

          <ul>
            {values.map(({ icon: Icon, title, summary }, i) => (
              <li
                key={title}
                className="absolute w-48 xl:w-64 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${hubPositions[i].x}%`, top: `${hubPositions[i].y}%` }}
              >
                <div className="flex flex-col items-center text-center">
                  <span className={`${iconTile} shadow-sm`}>
                    <Icon className={`w-5 h-5 ${accent(i)}`} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-display text-base xl:text-lg font-semibold leading-snug text-accent">
                    {keepHyphens(title)}
                  </h3>
                  <p className="mt-1 text-balance text-[0.8125rem] xl:text-sm leading-snug text-slate-600 dark:text-slate-400">{summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Tablets and phones: one card per habit showing the summary; tap to open the full description. */}
      <ul className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 items-start gap-3 sm:gap-4 lg:hidden">
        {values.map(({ icon: Icon, title, summary, description }, i) => (
          <li key={title}>
            <Reveal delay={80 + i * 60}>
              <details className="group rounded-2xl border border-slate-200 dark:border-dark-600 bg-slate-50 dark:bg-dark-800">
                <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto] items-start gap-3 rounded-2xl p-4 sm:p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                  <span className={iconTile}>
                    <Icon className={`w-5 h-5 ${accent(i)}`} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {/* Phones: icon, text, plus in one row. Tablets: icon and plus on top, text below. */}
                  <span className="min-w-0 md:col-span-2 md:row-start-2 md:mt-1">
                    <h3 className="font-display text-lg font-semibold leading-snug text-accent">{keepHyphens(title)}</h3>
                    <span className="mt-1 block text-[0.9375rem] leading-snug text-slate-600 dark:text-slate-400">
                      {summary}
                    </span>
                  </span>
                  <Plus
                    className="mt-1.5 md:mt-3 md:col-start-2 md:row-start-1 w-4 h-4 shrink-0 text-slate-400 transition-transform group-open:rotate-45 group-open:text-accent"
                    aria-hidden="true"
                  />
                </summary>
                <p className="-mt-1 px-4 pb-4 sm:px-5 sm:pb-5 pl-[4.25rem] sm:pl-[4.5rem] md:pl-5 text-[0.9375rem] leading-relaxed text-slate-700 dark:text-slate-300">
                  {description}
                </p>
              </details>
            </Reveal>
          </li>
        ))}
      </ul>
    </Scene>
  );
}
