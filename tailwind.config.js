/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // ---------- 1️⃣  Install these plugins ----------
  //   npm i -D tailwindcss-theming tw-animate-css
  plugins: [
    require("tailwindcss-theming"), // for @theme custom directives
    require("tw-animate-css"), // for animation utilities
    // If you want the “@custom-variant” syntax you can use the official
    // tailwindcss plugin directly – it’s built‑in from v3.3+:
    // require('tailwindcss/plugin')(function({ addVariant }) { addVariant('custom', ... ) })
  ],

  // ---------- 2️⃣  Extend the theme ----------
  theme: {
    extend: {
      // Your custom colors/spacing/etc. can go here **if you want Tailwind to generate utilities
      // for them**.  Otherwise, keep them in CSS variables (as shown above).
      colors: {
        primary: "var(--primary)", // for small use‑cases
        // … add any you need
      },
    },
  },

  // ---------- 3️⃣  Dark mode on class ------------------------------------------------
  darkMode: "class",
};
// tailwind.config.js
