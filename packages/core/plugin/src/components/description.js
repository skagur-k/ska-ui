function description() {
	return {
		'@apply relative rounded-md box-content': {},
		'@apply max-w-prose': {},

		'&-title': {
			'@apply flex items-center gap-2': {},
			'@apply font-light text-base text-neutral-700': {},
		},
		'&-content': {
			'@apply text-base leading-6': {},
		},
	}
}

module.exports = Description = (colors) => ({
	'.description': {
		...description(),
	},
})
