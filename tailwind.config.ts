import type { Config } from "tailwindcss";
const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { primary: v("primary"), navy: v("navy"), ink: v("ink"), muted: v("muted"), alt: v("alt"), line: v("line"), pale: v("pale") }, fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] } } },
} satisfies Config;
