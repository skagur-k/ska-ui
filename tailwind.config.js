/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bg: 'var(--geist-background, var(--accents-4))',
				fg: 'var(--geist-foreground, var(--accents-8)',
				accent: {
					100: 'var(--accents-1)',
					200: 'var(--accents-2)',
					300: 'var(--accents-3)',
					400: 'var(--accents-4)',
					500: 'var(--accents-5)',
					600: 'var(--accents-6)',
					700: 'var(--accents-7)',
					800: 'var(--accents-8)',
				},
				themed: {
					fg: `var(--themed-fg)`,
					bg: `var(--themed-bg)`,
					border: 'var(--themed-border)',
				},
			},
		},
	},
	plugins: [],
}
