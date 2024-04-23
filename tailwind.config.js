/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/components/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "mm-logo": "url('/src/assets/cm_logo_black_1.svg')",
      "main-slide-1": "url('/src/assets/9edf775855b793faf29a232296dff4b0.jpg')",
      "main-slide-2": "url('/src/assets/8e3443c56ff34d62d34d24beb5c27b62.jpg')",
      "main-slide-3": "url('/src/assets/82a06cea427f491c3d6e421824d6aebf.jpg')",
    },
  },
  plugins: [],
};
