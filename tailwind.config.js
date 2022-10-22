/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        textColor : "hsl(0, 0%, 55%)",
        headingColor : "hsl(0, 0%, 41%)"
      },
      screens:{
        sm: '200px',
        md: '700px'
      }
    }
  },
  plugins: [],
};
