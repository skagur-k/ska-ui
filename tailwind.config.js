/** @type {import('tailwindcss').Config} */

const skaui = require('./packages/core/plugin/')

module.exports = {
	darkMode: 'class',
	content: ['./packages/core/**/*.{ts,tsx}'],
	plugins: [
		skaui({
			colors: ['red', 'blue', 'sky'],
			cssBase: true,
		}),
	],
}
