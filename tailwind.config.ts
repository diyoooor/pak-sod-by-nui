import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: {
          primary: "#17833C", // Light Olive Green (for main elements)
          secondary: "#FFD700", // Pastel Yellow (for highlights)
          accent: "#FFB6C1", // Light Pink (for accents)
          neutral: "#F5F5DC", // Beige (for background)
          info: "#E6E6FA", // Lavender (for cards or informational backgrounds)
          main: "#f0f0f0",
        },
        dark: {
          primary: "#556B2F", // Dark Olive Green (for main elements)
          secondary: "#F0E68C", // Khaki (for highlights)
          accent: "#DC143C", // Crimson (for accents)
          neutral: "#2F4F4F", // Dark Slate Gray (for background)
          info: "#483D8B", // Dark Slate Blue (for cards or informational backgrounds)
        },
      },
    },
  },
  plugins: [],
};
export default config;
