/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/components/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "1079px" },
      lg: { min: "1080px" },
    },
    extend: {
      colors: {
        black: {
          100: "#1E1E1E",
          200: "#231F20",
        },
        gray: {
          100: "#8D8D8D",
          200: "#EEEEEE",
          300: "#F8F8F8",
        },
      },
    },
    backgroundImage: {
      "mm-logo": "url('/src/assets/cm_logo_white_1.svg')",
      "mm-logo-black": "url('/src/assets/cm_logo_black_1.svg')",
      "main-slide-1": "url('/src/assets/9edf775855b793faf29a232296dff4b0.jpg')",
      "main-slide-2": "url('/src/assets/8e3443c56ff34d62d34d24beb5c27b62.jpg')",
      "main-slide-3": "url('/src/assets/82a06cea427f491c3d6e421824d6aebf.jpg')",
      "main-slide-sm1":
        "url('/src/assets/d2ba27ae1dce5496d71887b39eb456b4.jpg')",
      "main-slide-sm2":
        "url('/src/assets/e0b5a9a4f135403cbb0cda05a1782aee.jpg')",
      "main-slide-sm3":
        "url('/src/assets/f497598c4bc4ee922ac055ea7d317e55.jpg')",
    },
  },
  plugins: [],
};
