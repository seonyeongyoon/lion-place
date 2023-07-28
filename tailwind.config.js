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
      },
    },
  },
  plugins: [],
};
