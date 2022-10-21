/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        textColor : "hsl(0, 0%, 55%)",
        headingColor : "hsl(0, 0%, 41%)"
      }
    }
  },
  plugins: [],
};
