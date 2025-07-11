import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    variants: {
      extend: {
        animation: ['motion-safe'],
      }
    },
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'background-ep': "url('/rick-morty-cover.jpg')",
       },
    },
  },
  plugins: [],
} satisfies Config;
