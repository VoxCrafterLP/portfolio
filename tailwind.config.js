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
		extend: {
			colors: {
				'dark_gray': {
					100: '#121212',
					200: '#111111'
				},
				vox_gray: {
					100: '#1e2227',
					200: '#23272e',
				},
				bggradient: {
					1: '#070d25',
					2: '#1a0622'
				}
			}
		},
	},
	plugins: [],
};
