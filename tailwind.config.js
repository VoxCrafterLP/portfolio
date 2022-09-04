/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: '"Roboto"',
			display: ['"Roboto"', '"sans-serif"'],
			body: ['"Roboto"', '"sans-serif"'],
		},
		screens: {
			sm: '950px',
			md: '1000px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {},
	},
	plugins: [],
};
