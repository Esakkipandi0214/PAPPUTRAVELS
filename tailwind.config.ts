import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        tab_01: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        background: "var(--background)", // Ensure these variables are defined in your global styles
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
