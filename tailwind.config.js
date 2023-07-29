/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      colors: {
        primary: "#171F31",
        lightBlue900: "#171F31",
        lightBlue800: "#2D3E63",
        white: "#FFFFFF",
        contentTertiary: "#A6A6A6",
        disabled: "#AAC4FA",
        contentSecondary: "#6B6B6B",
        gray200: "#C4C4C4",
        gray100: "#E1E1E1",
      },
    },
  },
  plugins: [],
};
