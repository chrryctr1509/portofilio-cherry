/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#22c55e',
					secondary: '#bbf7d0',
					muted: '#f0fdf4',
				},
			},
		},
	},
	plugins: [],
};

