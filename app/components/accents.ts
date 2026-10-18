// The site's only chromatic colours: one family of deep corporate blues for big display text
// (Proof's stats, WhyHireMe's habit icons), with a lighter shade in dark mode. Everything else stays
// monochrome.
export const ACCENTS = [
  "text-blue-900 dark:text-blue-300", // navy
  "text-sky-800 dark:text-sky-300", // steel blue
  "text-indigo-900 dark:text-indigo-300", // indigo
  "text-cyan-900 dark:text-[#8bbccc]", // petrol blue (muted by hand in dark; cyan-300 reads as neon)
] as const;

// Cycles through the palette, so any number of items reuse the same four colours.
export const accent = (i: number) => ACCENTS[i % ACCENTS.length];
