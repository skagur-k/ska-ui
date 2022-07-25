function checkboxWrapper(colors) {
	return {
		'@apply inline-flex items-baseline': {},
	}
}

function checkbox(colors) {
	return {
		'@apply cursor-pointer relative select-none': {},
		'@apply text-white bg-neutral-100 border-2 rounded': {},
		'@apply w-5 h-5 flex flex-shrink-0': {},
		'@apply flex justify-center items-center mr-2': {},
		'@apply transition ease-in-out duration-150': {},

		'@apply border-neutral-400 group-active:border-neutral-700': {},
		'@apply group-hover:border-neutral-700': {},

		'&-check': {
			'@apply w-3 h-3 transition-all': {},
		},

		'&-rounded': {
			'@apply rounded-full': {},
		},
		'&-focused': {
			'@apply ring-2 ring-offset-2 ring-neutral-500': {},
		},

		...colors.reduce(
			(styles, color) => ({
				...styles,
				[`&[data-color="${color}"]`]: {
					[`@apply text-white bg-white`]: {},
					[`@apply border-${color}-500`]: {},

					[`@apply group-hover:border-${color}-500 group-hover:bg-${color}-100`]:
						{},
					[`@apply group-active:bg-${color}-400`]: {},

					'&.checkbox-disabled': {
						[`@apply border-${color}-100 group-hover:border-${color}-100 group-hover:bg-white`]:
							{},
					},
					'&.checkbox-focused': {
						[`@apply ring-2 ring-offset-2 ring-${color}-500`]: {},
					},
				},
			}),
			{}
		),
	}
}

function checkboxSelected(colors) {
	return {
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
						[`@apply group-focus:ring-4`]: {},

						// Active
						[`@apply group-active:bg-${color}-400`]: {},
						'&.checkbox-disabled': {
							[`@apply border-${color}-500 group-hover:border-${color}-500 group-hover:bg-${color}-500`]:
								{},
						},
						'&.checkbox-focused': {
							[`@apply ring-2 ring-offset-2 ring-${color}-500`]:
								{},
						},
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
			'@apply w-4 h-4': {},
		},
	}
}

function checkboxLabel() {
	return {
		'@apply flex flex-col items-start': {},

		'&-sm': {
			'@apply text-base': {},
		},
		'&-md': {
			'@apply text-base': {},
		},
		'&-lg': {
			'@apply text-base': {},
		},

		'& .checkbox-caption': {
			'@apply text-xs text-neutral-400': {},
		},
	}
}

function checkboxGroup() {
	return {
		[`@apply flex flex-col gap-2`]: {},
		[`@apply text-base`]: {},

		[`&-label`]: {
			[`@apply text-sm font-semibold`]: {},
		},
		[`&-caption`]: {
			[`@apply text-xs font-medium text-neutral-500`]: {},
		},
		[`&-items`]: {
			[`@apply flex flex-row gap-2 text-base`]: {},

			'&-col': {
				[`@apply flex-col gap-2`]: {},
			},
		},
		[`&-label-left`]: {
			[`@apply flex flex-row items-start gap-2`]: {},
			'& .checkbox-group-label': {
				'@apply max-w-[240px]': {},
			},
		},
	}
}

module.exports = Checkbox = (colors) => ({
	'.checkbox-wrapper': {
		...checkboxWrapper(colors),
	},

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
		...checkboxLabel(),
	},
	'.checkbox-group': {
		...checkboxGroup(),
	},
})
