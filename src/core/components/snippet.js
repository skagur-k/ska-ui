function snippet() {
	return {
		'@apply relative': {},
		'@apply inline-block w-1/2 box-border outline-none': {},
		'@apply font-mono text-sm': {},
		'@apply px-4 py-3 rounded-md': {},
		'@apply ring-1 ring-neutral-300': {},

		'&-dark': {
			'@apply bg-neutral-800 text-neutral-100': {},
		},
	}
}

function snippetPrompt() {
	return {
		'&-prompt': {
			'@apply mr-2 select-none': {},
		},
	}
}

function snippetCopy() {
	return {
		'&-copy': {
			'@apply absolute w-5 h-5': {},
			'@apply top-3 right-4': {},
			'@apply cursor-pointer hover:text-neutral-400': {},
		},
	}
}

module.exports = Snippet = (colors) => ({
	'.snippet': {
		...snippet(),
		...snippetPrompt(),
		...snippetCopy(),
	},
})
