import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px"
      }
    },
    extend: {
      backgroundImage: {
        primaryGradient:
          "linear-gradient(132deg,#090606 36.57%,#0a242c 117.79%)"
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        m_plus_2: ["var(--font-m_plus_2)"]
      },
      colors: {
        "body-ash": "#f4f7f9",
        "button-cta": "#1c1515",
        "grey-200": "#e2e8f0",
        "grey-800": "#32353b",
        "grey-300": "#cbd5e1",
        "grey-500": "#6f7b8b",
        "grey-50-10": "rgba(249, 250, 251, .1)",
        "transparent-blue": "#087ac733",
        "transparent-yellow500": "#ca8a0433",
        "success-600": "#16a34a",
        "text-800": "#1e293b",
        "text-500": "#64748b",
        "link-500": "#0ea5e9",
        "sky-blue":"#01aee8",
        "success-50":"#f0fdf4",
        "active-border": "#01aee8",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        },
        "collapsible-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-collapsible-content-height)"
          }
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out"
      },
      gridTemplateColumns: {

        'cols-auto': 'repeat(auto-fit,minmax(0,1fr))',
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
