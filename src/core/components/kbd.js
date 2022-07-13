function kbd() {
	return {
		'@apply flex gap-2 px-2 py-1 items-center': {},
		'@apply rounded-md w-fit h-fit': {},
		'@apply border-0 ring-1 ring-neutral-300': {},
		'@apply bg-neutral-50 shadow-sm': {},
		'@apply cursor-pointer': {},
		'@apply text-xs leading-3': {},
	}
}

module.exports = KBD = (colors) => ({
	'.kbd': {
		...kbd(),
	},
})
