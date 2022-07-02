function buttonBase() {
	return {
		'@apply cursor-pointer select-none relative overflow-hidden': {},
		'@apply text-sm font-medium max-w-fit': {},

		'@apply transition-all duration-100 ease-linear': {},
		'@apply flex items-center justify-between': {},
		'@apply px-3 py-1 rounded-md': {},

		'@apply outline-none': {},
		'@apply border border-neutral-200': {},

		'&-icon': {
			'@apply text-lg mr-2': {},
		},

		'&-disabled': {
			'@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50':
				{},
		},
	}
}

function buttonSecondary() {
	return {
		'&-secondary': {
			'@apply shadow-sm': {},
			'@apply border border-neutral-800': {},
			'@apply text-neutral-100 bg-neutral-800': {},

			// Hover
			'@apply hover:border-neutral-400': {},

			// Focus
			'@apply focus:ring-[1px] focus:ring-neutral-400 focus:ring-offset-2':
				{},

			// Active
			'@apply active:bg-neutral-700': {},

			// Disabled
			'@apply disabled:active:bg-neutral-800 disabled:hover:border-neutral-800 disabled:shadow-none':
				{},
		},
	}
}

function buttonSolid(colors) {
	return {
		'&-solid': {
			'@apply shadow-sm': {},
			'@apply border border-neutral-300': {},
			'@apply text-neutral-800 bg-neutral-50': {},

			// Hover
			'@apply hover:border-neutral-400': {},

			// Focus
			'@apply focus:ring-[1px] focus:ring-neutral-400 focus:ring-offset-2':
				{},

			// Active
			'@apply active:bg-neutral-300': {},

			// Disabled
			'@apply disabled:active:bg-neutral-100 disabled:hover:border-neutral-300 disabled:shadow-none':
				{},

			...colors.reduce(
				(styles, color) => ({
					...styles,
					[`&[data-color="${color}"]`]: {
						[`@apply text-white bg-${color}-500`]: {},
						[`@apply border-${color}-500`]: {},

						// Hover
						[`@apply hover:border-${color}-400 hover:bg-${color}-400`]:
							{},

						// Focus
						[`@apply focus:ring-[1px] focus:ring-${color}-500 focus:ring-offset-2`]:
							{},

						// Active
						[`@apply active:bg-${color}-500 active:ring-offset-2`]:
							{},

						[`@apply disabled:active:bg-${color}-500 disabled:hover:bg-${color}-500 disabled:hover:border-${color}-400 disabled:shadow-none`]:
							{},
					},
				}),
				{}
			),
		},
	}
}

function buttonGhost(colors) {
	return {
		'&-ghost': {
			'@apply shadow-sm': {},
			'@apply border border-neutral-200': {},
			'@apply text-neutral-900 bg-neutral-100': {},

			// Hover
			'@apply hover:border-neutral-400 hover:bg-neutral-200': {},

			// Focus
			'@apply focus:ring-[1px] focus:ring-sky-500': {},

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
		'&-squared': {
			'@apply rounded-md': {},
		},
	}
}

function buttonSize() {
	return {
		'&-xs': {
			'@apply text-xs px-2 p-1': {},
		},
		'&-sm': {
			'@apply text-sm px-3 py-1': {},
		},
		'&-md': {
			'@apply text-base px-4 py-1': {},
		},
		'&-lg': {
			'@apply text-lg px-5 py-1': {},
		},
		'&-block': {
			'@apply text-lg flex justify-center max-w-full py-2': {},
		},
		'&-xs.icononly': {
			'@apply inline-flex h-6 w-6 justify-center items-center': {},
		},
		'&-sm.icononly': {
			'@apply inline-flex h-7 w-7 justify-center items-center': {},
		},
		'&-md.icononly': {
			'@apply inline-flex h-8 w-8 justify-center items-center': {},
		},
		'&-lg.icononly': {
			'@apply inline-flex h-10 w-10 justify-center items-center': {},
		},
	}
}

function buttonIconSize() {
	return {
		'&-xs &-icon': {
			'@apply text-sm mr-1': {},
		},
		'&-sm &-icon': {
			'@apply text-base mr-2': {},
		},
		'&-md &-icon': {
			'@apply text-lg mr-2': {},
		},
		'&-lg &-icon': {
			'@apply text-xl mr-2': {},
		},
		'&-block &-icon': {
			'@apply text-xl mr-2': {},
		},
		'&-xs.icononly &-icon': {
			'@apply mr-0 p-0': {},
		},
		'&-sm.icononly &-icon': {
			'@apply mr-0 p-1': {},
		},
		'&-md.icononly &-icon': {
			'@apply mr-0 p-1': {},
		},
		'&-lg.icononly &-icon': {
			'@apply mr-0 p-1': {},
		},
	}
}

function buttonNotification() {
	return {
		'&-notification': {
			[`@apply absolute w-2 h-2 bg-red-500 rounded-full -top-1 -right-1 border-red-400 border-[1px]`]:
				{},
		},
	}
}

module.exports = Button = (colors) => ({
	'.btn': {
		// Base Button Styles
		...buttonBase(),
		// Sizes
		...buttonSize(),
		...buttonNotification(),
		...buttonIconSize(),

		// Shapes
		...buttonShape(),

		// Variants
		...buttonSolid(colors),
		...buttonGhost(colors),

		...buttonSecondary(),
	},
})
