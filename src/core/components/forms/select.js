function select() {
	return {
		'@apply inline-flex flex-col relative min-w-[300px] w-fit outline-none':
			{},

		'&-label': {
			'@apply mb-2 text-sm': {},
			'&-disabled': {
				'@apply text-neutral-400': {},
			},
		},
	}
}

function selectButton() {
	return {
		'&-button': {
			'@apply px-3 py-2 relative inline-flex items-center justify-between':
				{},
			'@apply text-sm': {},
			'@apply rounded-md overflow-hidden cursor-default': {},
			'@apply shadow-sm outline-none': {},
			'@apply ring-2 ring-neutral-200 ring-inset': {},
			'@apply transition-all duration-200': {},

			'&-content': {
				'@apply flex items-center gap-2': {},
			},
			'&-focusvisible': {
				'@apply ring-2 ring-neutral-500': {},
			},
			'&-hovered': {
				'@apply ring-neutral-500': {},
			},

			'&-disabled': {
				'@apply bg-neutral-50 ring-neutral-200': {},
				'@apply text-neutral-400': {},
				'@apply cursor-not-allowed': {},
			},
		},
		'&-opened-button': {
			'@apply bg-neutral-50 ring-neutral-500': {},
		},
	}
}

module.exports = Select = (colors) => ({
	'.select': {
		...select(),
		...selectButton(),
	},
})
