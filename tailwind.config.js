/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'white': '#ffffff',
			'black': '#000000',
			'grey-100': '#f3f3f3',
			'grey-150': '#e7e7e7',
			'grey-200': '#c7c7c7',
			'grey-300': '#888888',
			'grey-400': '#2c2c2c',
			'yellow': '#f7c547',
			'green': '#66fc75',
			'blue': '#1378d1',
			'blue-dark': '#0d5fa8',
			'blue-light': '#e8f1fa',
			'dark-grey': '#9b9b9b',
		},
		extend: {}
	},
	plugins: []
}
