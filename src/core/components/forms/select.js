function select() {
	return {
		'@apply inline-flex flex-col relative w-full outline-none': {},

		'&-label': {
			'@apply mb-2': {},
		},
	}
}

function selectButton() {
	return {
		'&-button': {
			'@apply px-3 py-1 relative inline-flex items-center justify-between':
				{},
			'@apply rounded-md overflow-hidden cursor-default': {},
			'@apply shadow-sm outline-none': {},
			'@apply ring-1 ring-neutral-300 ring-inset': {},

			'&-focusvisible': {
				'@apply ring-2 ring-neutral-800': {},
			},
		},
		'&-opened-button': {
			'@apply bg-neutral-100': {},
		},
	}
}

module.exports = Select = (colors) => ({
	'.select': {
		...select(),
		...selectButton(),
	},
})
