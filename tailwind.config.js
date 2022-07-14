/** @type {import('tailwindcss').Config} */

const skaui = require('./src/core')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js, jsx, ts,tsx}'],
	plugins: [
		skaui({
			colors: ['red', 'blue', 'sky'],
			cssBase: true,
		}),
	],
}
