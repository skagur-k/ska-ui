function tooltip() {
	return {
		'@apply block absolute bg-neutral-800/80 text-neutral-100': {},
		'@apply mt-2 px-4 py-2 shadow-sm z-50': {},
		'@apply max-w-prose rounded-md': {},
	}
}

module.exports = Tooltip = () => ({
	'.tooltip': {
		...tooltip(),
	},
})
