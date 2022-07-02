function buttonBase() {
	return {
		'@apply cursor-pointer select-none relative': {},
		'@apply text-sm font-semibold max-w-fit': {},

		'@apply transition-all duration-100 ease-linear': {},
		'@apply px-2 py-1 rounded-md': {},

		'@apply outline-none': {},
		'@apply border border-neutral-200': {},

		'&-content': {
			[`@apply flex items-center justify-center`]: {},
		},

		'&-icon': {
			'@apply text-lg mr-2': {},
		},

		'&-disabled, &-loading': {
			'@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-[0.85]':
				{},
		},

		// Loading
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
			'@apply hover:border-neutral-400 hover:bg-neutral-100': {},

			// Focus
			'@apply focus:ring-[1px] focus:ring-neutral-700 focus:ring-offset-1':
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
			'@apply border border-neutral-800 dark:border-neutral-100': {},

			'@apply text-neutral-800 bg-transparent': {},
			'@apply dark:text-neutral-100 dark:bg-transparent': {},

			// Hover
			'@apply hover:bg-neutral-800 hover:text-neutral-100 hover:border-neutral-800':
				{},
			'@apply dark:hover:bg-neutral-100 dark:hover:text-neutral-800 dark:hover:border-neutral-200':
				{},

			// Focus
			'@apply focus:ring-[1px] focus:ring-neutral-100 focus:ring-offset-0':
				{},

			// Active
			'@apply active:bg-neutral-300 active:ring-offset-1': {},
			'@apply dark:active:bg-neutral-200': {},

			// Disabled
			'@apply disabled:active:bg-neutral-100 disabled:hover:border-neutral-300 disabled:shadow-none':
				{},

			...colors.reduce(
				(styles, color) => ({
					...styles,
					[`&[data-color="${color}"]`]: {
						[`@apply text-${color}-500 bg-none`]: {},
						[`@apply border-${color}-500`]: {},

						// Hover
						[`@apply hover:text-white hover:border-${color}-500 hover:bg-${color}-500`]:
							{},

						// Focus
						[`@apply focus:ring-[1px] focus:ring-${color}-500 focus:ring-offset-0`]:
							{},

						// Active
						[`@apply active:bg-${color}-400 active:ring-offset-1`]:
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
			'@apply text-sm px-2 py-1': {},
		},
		'&-md': {
			'@apply text-base px-3 py-2': {},
		},
		'&-lg': {
			'@apply text-base px-3 py-3': {},
		},
		'&-block': {
			'@apply text-lg flex justify-center max-w-full py-2': {},
		},
		'&-xs.icononly': {
			'@apply inline-flex h-7 w-7 justify-center items-center': {},
		},
		'&-sm.icononly': {
			'@apply inline-flex h-8 w-8 justify-center items-center': {},
		},
		'&-md.icononly': {
			'@apply inline-flex h-10 w-10 justify-center items-center': {},
		},
		'&-lg.icononly': {
			'@apply inline-flex h-12 w-12 justify-center items-center': {},
		},
	}
}

function buttonIconSize() {
	return {
		'&-xs &-icon': {
			'@apply text-base mr-1': {},
		},
		'&-sm &-icon': {
			'@apply text-lg mr-2': {},
		},
		'&-md &-icon': {
			'@apply text-xl mr-2': {},
		},
		'&-lg &-icon': {
			'@apply text-2xl mr-3': {},
		},
		'&-block &-icon': {
			'@apply text-xl mr-2': {},
		},
		'&-xs.icononly &-icon': {
			'@apply text-base mr-0 p-0': {},
		},
		'&-sm.icononly &-icon': {
			'@apply text-xl mr-0 p-0': {},
		},
		'&-md.icononly &-icon': {
			'@apply text-2xl mr-0 p-0': {},
		},
		'&-lg.icononly &-icon': {
			'@apply text-3xl mr-0 p-0': {},
		},
	}
}

function buttonMisc(colors) {
	return {
		// Spinner
		'&-spinner': {
			[`@apply absolute w-4 h-4 left-0 right-0 top-0 bottom-0 m-auto`]:
				{},
			[`@apply border-2 rounded-full border-l-gray-300 border-r-gray-300 border-t-gray-300 border-b-gray-400`]:
				{},
			[`@apply animate-spin-slow`]: {},
		},

		...colors.reduce(
			(styles, color) => ({
				...styles,
				[`&[data-color="${color}"] &-spinner`]: {
					[`@apply border-${color}-300 border-b-${color}-400`]: {},
				},
			}),
			{}
		),

		'&-xs &-spinner': {
			[`@apply w-4 h-4`]: {},
		},
		'&-sm &-spinner': {
			[`@apply w-5 h-5`]: {},
		},
		'&-md &-spinner': {
			[`@apply w-6 h-6`]: {},
		},
		'&-lg &-spinner': {
			[`@apply w-6 h-6`]: {},
		},
		'&-block &-spinner': {
			[`@apply w-6 h-6`]: {},
		},

		'&-xs.icononly &-spinner': {
			[`@apply w-4 h-4`]: {},
		},
		'&-sm.icononly &-spinner': {
			[`@apply w-4 h-4`]: {},
		},
		'&-md.icononly &-spinner': {
			[`@apply w-5 h-5`]: {},
		},
		'&-lg.icononly &-spinner': {
			[`@apply w-6 h-6`]: {},
		},
		'&-block.icononly &-spinner': {
			[`@apply w-6 h-6`]: {},
		},

		// Notification
		'&-notification': {
			[`@apply absolute w-2 h-2 -right-1 -top-1`]: {},
			[`@apply rounded-full bg-red-500`]: {},
			// [`@apply animate-ping`]: {},
		},

		'&[data-focus] &-notification': {
			[`@apply invisible`]: {},
		},
	}
}

module.exports = Button = (colors) => ({
	'.btn': {
		// Base Button Styles
		...buttonBase(),
		// Sizes
		...buttonSize(),
		...buttonIconSize(),

		// Shapes
		...buttonShape(),

		// Variants
		...buttonSolid(colors),
		...buttonGhost(colors),

		...buttonSecondary(),

		// Loading
		...buttonMisc(colors),
	},
})
