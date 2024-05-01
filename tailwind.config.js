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
    boxShadow: {
      default: "0px 2px 15px -2px rgba(0, 0, 0, 0.09)",
    },
    backgroundImage: {
      "mm-logo": "url('/assets/cm_logo_white_1.svg')",
      "mm-logo-black": "url('/assets/cm_logo_black_1.svg')",
      "main-slide-1": "url('/src/assets/2cbdc335c379f94e7e7969ed6b08101d.jpg')",
      "main-slide-2": "url('/src/assets/a624623de99152a98a469e912a155fe8.jpg')",
      "main-slide-3": "url('/src/assets/cf7f6b4169ac4d81038a94bbaf45f768.jpg')",
      "main-slide-sm1":
        "url('/src/assets/d2ba27ae1dce5496d71887b39eb456b4.jpg')",
      "main-slide-sm2":
        "url('/src/assets/e0b5a9a4f135403cbb0cda05a1782aee.jpg')",
      "main-slide-sm3":
        "url('/src/assets/f497598c4bc4ee922ac055ea7d317e55.jpg')",
      script: "url('/src/assets/cm_sub_brand_img_1.jpg')",
      "membership-1": "url('/src/assets/cm_main_member_benefit_icon_1.png')",
      "membership-2": "url('/src/assets/cm_main_member_benefit_icon_2.png')",
      "membership-3": "url('/src/assets/cm_main_member_benefit_icon_3.png')",
    },
  },
  plugins: [],
};
