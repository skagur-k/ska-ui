const plugin = require(`tailwindcss/plugin`)
const defaultTheme = require('tailwindcss/defaultTheme')
const components = require('./components')

const defaultColors = ['gray']

const skaui = plugin.withOptions(
	function (options = { colors: [], cssBase: true }) {
		return function ({
			addComponents,
			addVariant,
			addBase,
			variants,
			e,
			theme,
			addUtilities,
		}) {
			const optionColors = [...defaultColors, ...(options.colors || [])]

			loading({ addVariant, e, variants, theme, addUtilities })
			focus({ addVariant, e, variants, theme, addUtilities })
			hover({ addVariant, e, variants, theme, addUtilities })
			active({ addVariant, e, variants, theme, addUtilities })
			disabled({ addVariant, e, variants, theme, addUtilities })

			addComponents(
				components.map((component) => component(optionColors)),
				{
					respectPrefix: false,
				}
			)

			if (options.cssBase) {
				addBase({
					html: {
						'@apply selection:bg-sky-700 selection:text-white': {},
						fontSize: '16px',
					},
					body: {
						position: 'relative',
						minHeight: '100%',
					},
					h1: { '@apply text-4xl': {} },
					h2: { '@apply text-3xl': {} },
					h3: { '@apply text-2xl': {} },
					h4: { '@apply text-xl': {} },
					h5: { '@apply text-lg': {} },
					p: { '@apply text-base': {} },
				})
			}
		}
	},
	function () {
		return {
			theme: {
				extend: {
					fontFamily: {
						sans: ['Inter', ...defaultTheme.fontFamily.sans],
					},
					fontSize: {
						tiny: [
							'0.5rem',
							{
								lineHeight: '1rem',
							},
						],
					},
					animation: {
						'spin-slow': 'spin 1.5s linear infinite',
						fadeIn: 'fadeIn 0.3s ease-in-out',
						ltr: 'ltr 1.5s ease-out infinite',
					},
					keyframes: {
						fadeIn: {
							'0%': { opacity: 0 },
							'100%': {
								opacity: 1,
							},
						},
						ltr: {
							'0%': { right: '100%', width: '80%' },
							'100%': {
								right: '-100%',
								width: '50%',
							},
						},
					},
					// colors,
					variants: {
						extend: {
							boxShadow: ['disabled'],
							cursor: ['disabled'],
							textColor: ['active', 'disabled:hover'],
							textDecoration: ['disabled'],
							backgroundColor: ['disabled'],
							borderColor: ['disabled'],
						},
					},
				},
			},
		}
	}
)

// Variants
// The variant is set if both meet the conditions ex: e:active && e[data-active]

function active({ addVariant, e }) {
	addVariant('active', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(`active${separator}${className}`)}:active`
		})
	})
}

function disabled({ addVariant, e }) {
	addVariant('disabled', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(`disabled${separator}${className}`)}:disabled`
		})
	})
}

function focus({ addVariant, e }) {
	addVariant('focus', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(`focus${separator}${className}`)}:focus`
		})
	})
}

function hover({ addVariant, e }) {
	addVariant('hover', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(`hover${separator}${className}`)}:hover`
		})
	})
}

function loading({ addVariant, e }) {
	addVariant('loading', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(`loading${separator}${className}`)}[data-loading]`
		})
	})
}

// function focus({ addVariant, e, variants }) {
// 	addVariant('focus', ({ modifySelectors, separator }) => {
// 		modifySelectors(({ className }) => {
// 			return `.${e(`focus${separator}${className}`)}:focus, .${e(
// 				`focus${separator}${className}`
// 			)}[data-focus]`
// 		})
// 	})
// }

module.exports = skaui
