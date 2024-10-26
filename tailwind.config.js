/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
          fontFamily: {
            palanquin: ['Palanquin', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
          },
        backgroundImage: {'footer-pattern': "url('src/assets/images/bg-pattern-footer-mobile.svg')"},
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "slategray": "rgb(221, 221, 221)",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "yellow": "rgb(219, 219, 55)"
      }
    }
  },
  plugins: [],
}
