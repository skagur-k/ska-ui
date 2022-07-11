function tooltip() {
	return {
		'@apply block absolute bg-neutral-800/80 text-neutral-100': {},
		'@apply mt-2 px-4 py-2 shadow-md z-50': {},
		'@apply max-w-sm rounded-md': {},

		'&-text': {
			'@apply text-sm': {},
		},
	}
}

module.exports = Tooltip = () => ({
	'.tooltip': {
		...tooltip(),
	},
})
