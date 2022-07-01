function buttonBase() {
	return {
		'@apply cursor-pointer select-none relative': {},
		[`@apply font-semibold max-w-fit`]: {},
		'@apply border border-neutral-200 outline-none': {},
		'@apply transition-all duration-100 ease-linear': {},
		'@apply flex items-center justify-center': {},
		'@apply px-2 py-0 rounded-md': {},
	}
}

function buttonSolid(colors) {
	return {
		'&-solid': {
			'@apply shadow-sm': {},
			'@apply border border-neutral-200': {},
			'@apply text-neutral-100 bg-neutral-800': {},

			// Hover
			'@apply hover:border-neutral-400 hover:bg-neutral-700': {},

			// Focus
			'@apply focus:ring-[1px] focus:ring-neutral-400 focus:ring-offset-2':
				{},

			// Active
			'@apply active:bg-neutral-600': {},

			...colors.reduce(
				(styles, color) => ({
					...styles,
					[`&[data-color="${color}"]`]: {
						[`@apply text-white bg-${color}-500`]: {},
						[`@apply border-${color}-600`]: {},

						// Hover
						[`@apply hover:border-${color}-400 hover:bg-${color}-400`]:
							{},

						// Focus
						[`@apply focus:ring-[1px] focus:ring-${color}-500 focus:ring-offset-2`]:
							{},

						// Active
						[`@apply active:bg-${color}-300 active:ring-offset-2`]:
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
	}
}

function buttonSize() {
	return {
		'&-xs': {
			'@apply text-xs px-2 p-1': {},
		},
		'&-sm': {
			'@apply text-sm px-4 py-1': {},
		},
		'&-md': {
			'@apply text-base px-8 py-1': {},
		},
		'&-lg': {
			'@apply text-base px-10 py-2': {},
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
