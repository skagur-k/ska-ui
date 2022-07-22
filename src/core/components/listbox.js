function listbox() {
	return {
		'@apply flex flex-col outline-none overflow-auto': {},
		'@apply text-sm': {},

		'&-content': {
			'@apply flex items-center gap-2': {},
		},
	}
}

function listboxOptions() {
	return {
		'&-items': {
			'@apply flex flex-col gap-2 max-h-[300px]': {},
			'&::-webkit-scrollbar': {
				width: '1px',
			},
			'&::-webkit-scrollbar-track': {
				width: '1px',
			},

			'&::-webkit-scrollbar-thumb': {
				backgroundColor: 'darkgrey',
			},
		},
	}
}

function listboxOption() {
	return {
		'@apply flex items-center justify-between': {},
		'@apply px-2 py-2': {},
		'@apply text-neutral-700': {},
		'@apply outline-none rounded-md': {},
		'@apply transition-all duration-300': {},
		'@apply cursor-pointer': {},

		'&-disabled': {
			'@apply text-neutral-200': {},
		},
		'&-focused': {
			'@apply bg-neutral-200 text-neutral-800': {},
		},
		'&-selected': {
			'@apply text-neutral-800 font-bold': {},
		},
		'&-label': {
			'@apply text-sm': {},
		},
		'&-description': {
			'@apply text-xs': {},
		},
	}
}

function listboxSection() {
	return {
		'@apply text-sm': {},
		'@apply text-neutral-700': {},

		'&-heading': {
			'@apply font-bold text-neutral-800': {},
			'@apply px-2 py-2': {},
		},
	}
}

module.exports = ListBox = (colors) => ({
	'.listbox': {
		...listbox(),
		...listboxOptions(),
	},

	'.listbox-option': {
		...listboxOption(),
	},

	'.listbox-section': {
		...listboxSection(),
	},
})
