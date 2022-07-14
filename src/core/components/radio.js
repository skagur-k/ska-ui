function radio() {
	return {
		'@apply flex items-center': {},
		'&-button': {
			'@apply flex justify-center items-center': {},
			'@apply w-4 h-4 rounded-sm mr-4': {},
			'@apply bg-neutral-100': {},
			'@apply ring-2 ring-neutral-300 group-hover:ring-2 group-hover:ring-neutral-500':
				{},
			'@apply transition-all ease-in-out duration-300': {},
			'&-focused': {
				'@apply ring-2 ring-offset-2 ring-neutral-500': {},
			},
		},

		'&-content': {
			'.radio-text': {
				'@apply text-base': {},
			},
			'.radio-caption': {
				'@apply text-sm text-neutral-400': {},
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
		},

		'&-label': {
			'@apply font-semibold': {},
		},
	}
}

module.exports = Radio = (colors) => ({
	'.radio': {
		...radio(),
	},
	'.radio-group': {
		...radioGroup(),
	},
})
