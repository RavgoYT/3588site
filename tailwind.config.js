/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        spacing: {
        'section': '20rem'
        },
        fontFamily: {
            ttnorms: ['TTNorms'],
            hk: ['HK Modular']
          },
      },
    },
    plugins: [],
  }