import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Brand colors
        brand: {
          DEFAULT: "#0000FF", // Main blue color from the design
          light: "#4B6BFB", // Lighter blue used in gradients
          dark: "#2B3674", // Darker blue used in text
        },

        // Accent colors
        accent: {
          pink: "#FF8FBA", // Pink used in gradients
          blue: "#7EB6FF", // Light blue used in gradients
          purple: "#5D2DFD", // Purple used in dark sections
        },

        // Gradient presets
        gradient: {
          hero: "linear-gradient(135deg, #0B0B2B 0%, #2B3674 100%)",
          text: "linear-gradient(90deg, #FF8FBA 0%, #7EB6FF 100%)",
          card: "linear-gradient(135deg, #2B3674 0%, #5D2DFD 100%)",
        },

        // UI colors
        ui: {
          primary: "#111111", // Primary text color
          secondary: "#666666", // Secondary text color
          muted: "#999999", // Muted text color
          border: "#E5E7EB", // Border color
          hover: "#F3F4F6", // Hover state color
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0B0B2B 0%, #2B3674 100%)",
        "gradient-text": "linear-gradient(90deg, #FF8FBA 0%, #7EB6FF 100%)",
        "gradient-card": "linear-gradient(135deg, #2B3674 0%, #5D2DFD 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
