const COLORS = [
  "bg-violet-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-lime-500",
  "bg-fuchsia-500",
  "bg-sky-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-emerald-500",
  "bg-gray-500",
  "bg-neutral-500",
  "bg-stone-500",
  "bg-zinc-500",
  "bg-crimson-500",
  "bg-coral-500",
  "bg-silver-500",
  "bg-gold-500",
  "bg-bronze-500",
];

/**
 * Returns a random Tailwind bg color class.
 */
export const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

/**
 * Returns a consistent color for a given string (e.g. label or icon name).
 * Useful when you want the same item to always get the same color.
 */
export const getColorFromString = (str = "") => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLORS[Math.abs(hash) % COLORS.length];
};
