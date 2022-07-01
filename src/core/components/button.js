function buttonBase() {
	return {
		'@apply cursor-pointer select-none relative': {},
		'@apply font-semibold max-w-fit': {},
		'@apply transition-all duration-100 ease-linear': {},
		'@apply flex items-center justify-center': {},
	}
}

function buttonSolid(colors) {
	return {
		'&-solid': {
			'@apply shadow-sm': {},
			'@apply border border-neutral-200': {},
			'@apply text-neutral-900 bg-neutral-100': {},

			// Hover
			'@apply hover:border-neutral-400 hover:bg-neutral-200': {},

			// Focus
			'@apply focus:ring-[4px] focus:ring-sky-500': {},

			...colors.reduce(
				(styles, color) => ({
					...styles,
					[`&[data-color="${color}"]`]: {
						[`@apply border-${color}-600`]: {},
						[`@apply text-white bg-${color}-500`]: {},
					},
				}),
				{}
			),
		},
	}
}

function buttonShape() {
	return {
		'&-rounded': {
			'@apply rounded-3xl': {},
		},
	}
}

function buttonSize() {
	return {
		'&-xs': {
			'@apply text-xs p-1': {},
		},
		'&-sm': {
			'@apply text-sm px-2 py-1': {},
		},
		'&-md': {
			'@apply text-base px-2 py-1': {},
		},
		'&-lg': {
			'@apply text-lg px-4 py-2': {},
		},
	}
}

module.exports = Button = (colors) => ({
	'.btn': {
		// Base Button Styles
		...buttonBase(),

		// Sizes
		...buttonSize(),

		'&-disabled': {
			'@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-60':
				{},
		},

		'&-block': {
			'@apply block max-w-full': {},
		},

		// Shapes
		...buttonShape(),

		// Variants
		...buttonSolid(colors),
	},
})
