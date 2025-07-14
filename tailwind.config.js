// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
	theme: {
		extend: {
			spacing: {
				section: "80rem",
			},
			fontFamily: {
				ttnorms: ["TTNorms"],
				hk: ["HK Modular"],
			},
			listStyle: "disc",
		},
	},
};
