function meter() {
	return {
		'@apply flex flex-col gap-2': {},
		'&-labels': {
			'@apply flex justify-between items-center': {},
		},
		'&-labels-label': {
			'@apply text-sm': {},
		},
		'&-labels-value': {
			'@apply text-sm': {},
		},
		'&-bar': {
			'@apply overflow-hidden rounded-md': {},
		},
		'&-bar-track': {
			'@apply h-3 bg-neutral-100': {},
		},
		'&-bar-fill': {
			'@apply h-3 bg-neutral-800': {},
			'@apply transition-all duration-500': {},
		},
	}
}

module.exports = Meter = (colors) => ({
	'.meter': {
		...meter(),
	},
})
