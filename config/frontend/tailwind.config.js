module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./theme/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    spinner: (theme) => ({
      default: {
        color: "#fff",
        size: "1em",
        border: "1px",
        speed: "700ms",
      },
    }),
    fontFamily: {
      display: ['"Abril Fatface"'],
      sans: ["Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      filter: {
        "grayscale-0": "none",
        "grayscale-1": "grayscale(1)",
      },
      transitionProperty: {
        filter: "filter",
      },
      colors: {
        "primary": "var(--primary)",
        "primary-10": "var(--primary-10)",
        "primary-20": "var(--primary-20)",
        "primary-30": "var(--primary-30)",
        "primary-40": "var(--primary-40)",
        "primary-50": "var(--primary-50)",
        "primary-60": "var(--primary-60)",
        "primary-70": "var(--primary-70)",
        "primary-80": "var(--primary-80)",
        "primary-90": "var(--primary-90)",
        "primary-warm": "var(--primary-warm)",
        "primary-cold": "var(--primary-cold)",
        "primary-low": "var(--primary-low)",
        "primary-lowest": "var(--primary-lowest)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "primary-opposite": "var(--primary-opposite)",
        "secondary": "var(--secondary)",
        "secondary-10": "var(--secondary-10)",
        "secondary-20": "var(--secondary-20)",
        "secondary-30": "var(--secondary-30)",
        "secondary-40": "var(--secondary-40)",
        "secondary-50": "var(--secondary-50)",
        "secondary-60": "var(--secondary-60)",
        "secondary-70": "var(--secondary-70)",
        "secondary-80": "var(--secondary-80)",
        "secondary-90": "var(--secondary-90)",
        "secondary-warm": "var(--secondary-warm)",
        "secondary-cold": "var(--secondary-cold)",
        "secondary-low": "var(--secondary-low)",
        "secondary-lowest": "var(--secondary-lowest)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-opposite": "var(--secondary-opposite)",
      },
    },
    container: { center: true, padding: "1rem" },
    letterSpacing: { wide: ".05em", wider: ".1em", widest: ".25em" },
    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md: " 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
      lg: " 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
      xl: " 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
      "2xl": "0 30px 30px -15px rgba(0, 0, 0, 0.85)",
    },
  },
  corePlugins: {},
  variants: { margin: ["responsive", "group-hover"], filter: ["hover"] },
  plugins: [
    require("tailwindcss-filters"),
    // require('@tailwindcss/custom-forms'),
    require("tailwindcss-spinner")(),
  ],
};
