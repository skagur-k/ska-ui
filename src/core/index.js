const plugin = require(`tailwindcss/plugin`)

const Button = require('./components/button')

const components = [Button]

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
						'@apply antialiased border-gray-200 leading-5': {},
						fontSize: '14px',
					},
					body: {
						position: 'relative',
						minHeight: '100%',
					},
				})
			}
		}
	},
	function () {
		return {
			theme: {
				extend: {
					animation: {
						'spin-slow': 'spin 1.5s linear infinite',
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
