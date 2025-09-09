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
			keyframes: {
				shine: {
					'0%': { 'background-position': '100%' },
					'100%': { 'background-position': '-100%' },
				},
			},
			animation: {
				shine: 'shine 5s linear infinite',
			},
		},
	},
};
