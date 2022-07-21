function tag() {
	return {
		'@apply inline-flex w-fit h-min bg-neutral-50': {},
		'@apply overflow-hidden': {},
		'@apply ring-1 ring-neutral-200': {},
		'@apply rounded-md': {},
		'@apply flex items-center justify-between': {},

		'&-text': {
			'@apply mr-0 px-2 py-[2px] truncate': {},
			'@apply text-sm font-light': {},
		},
		'&-remove': {
			'@apply p-1 border-l': {},
			'@apply cursor-pointer': {},
			'@apply bg-neutral-50 hover:bg-neutral-600 hover:text-white hover:border-l-neutral-500':
				{},
			'@apply transition-colors duration-300': {},
		},
	}
}
function tags() {
	return {
		'@apply flex gap-2 flex-wrap': {},
	}
}

module.exports = Tag = (colors) => ({
	'.tag': {
		...tag(),
	},
	'.tags': {
		...tags(),
	},
})
