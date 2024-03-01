/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/common/Navbar.jsx",
    "./src/components/common/Footer.jsx",
    "./src/components/common/GradientText.jsx",
    "./src/components/common/Button.jsx",
    "./src/components/core/Career.jsx",
    "./src/components/core/OportunityAvailable.jsx",
    "./src/components/core/OportunityMoreDetails.jsx",
    "./src/components/core/OportunityDescription.jsx",
    "./src/components/core/CarrierTitle.jsx.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy':['Gilroy','sans-serrif'],
        'lexend': ['Lexend', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

