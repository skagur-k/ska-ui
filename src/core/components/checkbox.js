function checkbox(colors) {
	return {
		'@apply cursor-pointer relative select-none': {},
		'@apply text-white bg-neutral-100 border-2 rounded': {},
		'@apply w-5 h-5 flex flex-shrink-0': {},
		'@apply justify-center items-center mr-2': {},
		'@apply transition ease-in-out duration-150': {},

		'@apply border-neutral-400 group-active:border-neutral-700': {},
		'@apply group-hover:border-neutral-700': {},

		'&-check': {
			'@apply w-3 h-3': {},
		},

		'&-rounded': {
			'@apply rounded-xl': {},
		},

		...colors.reduce(
			(styles, color) => ({
				...styles,
				[`&[data-color="${color}"]`]: {
					[`@apply text-white bg-white`]: {},
					[`@apply border-${color}-500`]: {},

					// Hover
					[`@apply group-hover:border-${color}-500 group-hover:bg-${color}-100`]:
						{},
					// Active
					[`@apply group-active:bg-${color}-400`]: {},

					'&.checkbox-disabled': {
						[`@apply border-${color}-100 group-hover:border-${color}-100 group-hover:bg-white`]:
							{},
					},
				},
			}),
			{}
		),
	}
}

function checkboxSelected(colors) {
	return {
		'&-focused': {
			'@apply border-neutral-700 group-active:border-neutral-700': {},
		},
		'&-selected': {
			'@apply bg-neutral-700 group-active:bg-neutral-500': {},
			'@apply border-neutral-700 group-active:border-neutral-500': {},

			...colors.reduce(
				(styles, color) => ({
					...styles,
					[`&[data-color="${color}"]`]: {
						[`@apply text-white bg-${color}-500`]: {},
						[`@apply border-${color}-500`]: {},

						// Hover
						[`@apply group-hover:border-${color}-500 group-hover:bg-${color}-500`]:
							{},
						[`@apply group-focus:ring-2`]: {},

						// Active
						[`@apply group-active:bg-${color}-400`]: {},

						[`@apply disabled:active:bg-${color}-500 disabled:hover:bg-${color}-500 disabled:hover:border-${color}-400 disabled:shadow-none`]:
							{},
					},
				}),
				{}
			),
		},
	}
}

function checkboxSizes() {
	return {
		'&-sm': {
			'@apply w-4 h-4': {},
		},

		'&-sm &-check': {
			'@apply w-3 h-3': {},
		},

		'&-md': {
			'@apply w-5 h-5': {},
		},
		'&-md &-check': {
			'@apply w-4 h-4': {},
		},

		'&-lg': {
			'@apply w-6 h-6': {},
		},
		'&-lg &-check': {
			'@apply w-5 h-5': {},
		},
	}
}

function checkboxLabelSizes() {
	return {
		'&-sm': {
			'@apply text-base': {},
		},
		'&-md': {
			'@apply text-base': {},
		},
		'&-lg': {
			'@apply text-base': {},
		},
	}
}

module.exports = Checkbox = (colors) => ({
	'.checkbox': {
		...checkbox(colors),
		...checkboxSelected(colors),
		...checkboxSizes(),

		'&-disabled': {
			'@apply cursor-not-allowed border-neutral-200 group-hover:border-neutral-200':
				{},
		},
	},
	'.checkbox-label': {
		...checkboxLabelSizes(),
	},
})
