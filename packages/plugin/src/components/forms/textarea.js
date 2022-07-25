function textarea() {
	return {
		'@apply block box-border w-full outline-none': {},
		'@apply rounded-md px-4 py-2': {},
		'@apply text-sm font-light leading-6': {},
		'@apply ring-1 ring-neutral-500': {},
		'@apply transition': {},

		'&::placeholder': {
			'@apply text-neutral-300': {},
		},

		'&-error': {
			'@apply ring-red-500 text-red-500': {},
		},

		'&-focused': {
			'@apply ring-2': {},
			'&.text-area-error': {
				'@apply ring-red-500 text-red-500': {},
			},
		},

		'&-disabled': {
			'@apply cursor-not-allowed': {},
			'@apply ring-neutral-300': {},
		},
	}
}

module.exports = TextArea = (colors) => ({
	'.text-area': {
		...textarea(),
	},
})
