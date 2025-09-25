import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Big Coches Premium Colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        // Luxury Brand Colors
        luxury: {
          blue: "hsl(var(--luxury-blue))",
          "blue-light": "hsl(var(--luxury-blue-light))",
          silver: "hsl(var(--luxury-silver))",
          platinum: "hsl(var(--luxury-platinum))",
        },
        
        // Background System
        "background-dark": "hsl(var(--background-dark))",
        "background-darker": "hsl(var(--background-darker))",
        
        // Text Hierarchy
        "text-primary": "hsl(var(--text-primary))",
        "text-primary-dark": "hsl(var(--text-primary-dark))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-secondary-dark": "hsl(var(--text-secondary-dark))",
        "text-muted": "hsl(var(--text-muted))",
        "text-muted-dark": "hsl(var(--text-muted-dark))",
        
        // Interactive
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        hover: "hsl(var(--hover))",
        "hover-dark": "hsl(var(--hover-dark))",
        
        // Cards
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          dark: "hsl(var(--card-dark))",
          "foreground-dark": "hsl(var(--card-foreground-dark))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        
        // Borders
        "border-dark": "hsl(var(--border-dark))",
        "input-dark": "hsl(var(--input-dark))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "var(--radius-lg)",
        "2xl": "calc(var(--radius-lg) + 0.5rem)",
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      
      boxShadow: {
        luxury: "var(--shadow-luxury)",
        premium: "var(--shadow-premium)",
        card: "var(--shadow-card)",
      },
      
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-dark": "var(--gradient-dark)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-midnight": "var(--gradient-midnight)",
      },
      
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
