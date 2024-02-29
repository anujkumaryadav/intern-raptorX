/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/common/Navbar.jsx",
    "./src/components/common/Footer.jsx",
    "./src/components/common/GradientText.jsx",
    "./src/components/core/Career.jsx",
    "./src/components/core/OportunityAvailable.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
        'questrial': ['Questrial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

