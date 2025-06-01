
// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        spacing: {
        'section': '80rem'
        },
        fontFamily: {
            ttnorms: ['TTNorms'],
            hk: ['HK Modular']
          },
      },
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          'p': {
            fontSize: '1.25rem', // Sets the default text size for paragraphs globally
          },
        });
      }
    ],
  }