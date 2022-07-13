function snippet() {
	return {
		'@apply relative': {},
		'@apply block min-w-[300px] w-max box-border outline-none': {},
		'@apply font-mono text-sm': {},
		'@apply pl-4 pr-20 py-3 rounded-md': {},
		'@apply ring-1 ring-inset ring-neutral-300': {},
		'@apply hover:ring-neutral-500': {},
		'@apply transition duration-300': {},

		'&-dark': {
			'@apply bg-neutral-800 text-neutral-100': {},
			'@apply ring-neutral-100': {},
			'@apply hover:ring-neutral-200': {},
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
function snippetText() {
	return {
		'&-text': {
			'@apply select-all': {},
		},
	}
}

function snippetCopy() {
	return {
		'&-copy': {
			'@apply absolute w-5 h-5': {},
			'@apply top-3 right-4': {},
			'@apply cursor-pointer hover:text-neutral-400': {},
			'@apply transition duration-200': {},
		},
	}
}

module.exports = Snippet = (colors) => ({
	'.snippet': {
		...snippet(),
		...snippetText(),
		...snippetPrompt(),
		...snippetCopy(),
	},
})
