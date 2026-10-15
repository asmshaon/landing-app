import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";

const countries = ["USA", "Australia", "Canada", "Singapore", "Thailand", "Saudi Arabia"];

export function ClientLogos() {
  return (
    <Scene>
      <Reveal>
        <h2 className="scene-heading max-w-4xl">
          Worked remotely with teams across {countries.length} countries
        </h2>
      </Reveal>
      <ul className="mt-14 lg:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 lg:gap-y-10">
        {countries.map((name, i) => (
          <li key={name}>
            <Reveal delay={150 + i * 90}>
              <span className="font-display text-3xl sm:text-4xl lg:text-6xl text-slate-500 dark:text-slate-400">
                {name}
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </Scene>
  );
}
