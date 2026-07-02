/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* === Dark Editorial Palette === */
        "void":        "#080808",
        "void-2":      "#0d0d0d",
        "void-3":      "#111111",
        "surface-dk":  "#161616",
        "surface-dk2": "#1c1c1c",
        "surface-dk3": "#242424",
        "border-dk":   "#2a2a2a",
        "border-dk2":  "#383838",

        /* === Text === */
        "ink":         "#f0ede8",
        "ink-2":       "#b8b4ae",
        "ink-3":       "#6e6b66",

        /* === Accent === */
        "gold":        "#f0c040",
        "gold-2":      "#c49a20",
        "ember":       "#ff4d00",
        "ice":         "#5b8def",

        /* === Legacy (kept for any remnant usage) === */
        "primary":               "#5b8def",
        "on-primary":            "#f0ede8",
        "surface":               "#080808",
        "on-surface":            "#f0ede8",
        "on-surface-variant":    "#b8b4ae",
        "surface-container-low": "#161616",
        "surface-container-lowest": "#0d0d0d",
        "surface-container-high":   "#1c1c1c",
        "surface-container-highest":"#242424",
        "outline-variant":       "#2a2a2a",
        "primary-container":     "#5b8def",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body:    ["'Inter'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem",  { lineHeight: "0.9" }],
        "11xl": ["12rem",  { lineHeight: "0.85" }],
        "12xl": ["14rem",  { lineHeight: "0.8" }],
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "0.8" },
        },
      },
      animation: {
        "marquee":         "marquee 28s linear infinite",
        "marquee-slow":    "marquee 45s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "fade-up":         "fade-up 0.6s ease forwards",
        "scale-in":        "scale-in 0.5s ease forwards",
        "slide-in-left":   "slide-in-left 0.5s ease forwards",
        "float":           "float 4s ease-in-out infinite",
        "pulse-glow":      "pulse-glow 2s ease-in-out infinite",
        "shimmer":         "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      transitionTimingFunction: {
        "expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
