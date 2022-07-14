function radio() {
	return {
		'@apply flex items-center': {},
		'&-disabled': {
			'@apply cursor-not-allowed': {},
		},
	}
}

function radioComponents() {
	return {
		'&-button': {
			'@apply flex justify-center items-center': {},
			'@apply w-4 h-4 rounded-sm mr-4': {},
			'@apply bg-neutral-100': {},
			'@apply ring-2 ring-neutral-300 group-hover:ring-2 group-hover:ring-neutral-800':
				{},
			'@apply transition-all ease-in-out duration-300': {},

			'&-check': {
				'@apply w-3 h-3 text-neutral-800': {},
			},
			'&-focused': {
				'@apply ring-2 ring-offset-2 ring-neutral-800': {},
			},
			'&-disabled': {
				'@apply bg-neutral-100': {},
				'@apply ring-neutral-100 group-hover:ring-neutral-100': {},
			},
			'&-rounded': {
				'@apply rounded-full': {},
			},
			'&-selected': {
				'@apply ring-neutral-800': {},
			},
		},

		'&-content': {
			'.radio-text': {
				'@apply text-base': {},
			},
			'.radio-caption': {
				'@apply text-sm text-neutral-400': {},
				'@apply max-w-prose': {},
			},
		},

		'&-disabled &-content': {
			'.radio-text': {
				'@apply text-neutral-400': {},
			},
			'.radio-caption': {
				'@apply text-neutral-400': {},
			},
		},
	}
}

function radioGroup() {
	return {
		'@apply flex flex-col gap-3 min-w-fit': {},

		'&-radios': {
			'@apply flex flex-col gap-3': {},
		},

		'&-row &-radios': {
			'@apply flex flex-row': {},
			'& .radio .radio-button': {
				'@apply mr-2': {},
			},
		},

		'&-label': {
			'@apply font-semibold': {},
		},
	}
}

module.exports = Radio = (colors) => ({
	'.radio': {
		...radio(),
		...radioComponents(),
	},
	'.radio-group': {
		...radioGroup(),
	},
})
