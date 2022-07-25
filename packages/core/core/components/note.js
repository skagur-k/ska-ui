function note() {
	return {
		'@apply flex flex-1 px-3 py-1 items-center': {},
		'@apply justify-between': {},
		'@apply rounded-md h-fit': {},
		'@apply border-0 ring-1 ring-neutral-300': {},
		'@apply text-sm': {},

		'&-filled': {
			'@apply bg-neutral-800 text-neutral-100': {},
		},
	}
}

function noteSizes() {
	return {
		'&-sm': {
			'@apply text-sm': {},
		},
		'&-md': {
			'@apply text-sm py-2': {},
		},
		'&-lg': {
			'@apply text-base py-2': {},
		},
	}
}

function noteTypes() {
	return {
		'&-secondary': {
			'@apply ring-neutral-800 text-neutral-800': {},
			'&.note-filled': {
				'@apply bg-neutral-600 text-white': {},
			},

			'&.note-contrast': {
				'@apply bg-neutral-100 ring-neutral-800 text-black': {},
			},
		},
		'&-success': {
			'@apply ring-blue-600 text-blue-600': {},
			'&.note-filled': {
				'@apply bg-blue-600 text-white': {},
			},
			'&.note-contrast': {
				'@apply bg-blue-100 ring-blue-800 text-blue-800': {},
			},
		},
		'&-warning': {
			'@apply ring-yellow-500 text-yellow-600': {},
			'&.note-filled': {
				'@apply bg-yellow-500 text-white': {},
			},
			'&.note-contrast': {
				'@apply bg-yellow-100 ring-yellow-800 text-yellow-700': {},
			},
		},
		'&-error': {
			'@apply ring-red-600 text-red-600': {},
			'&.note-filled': {
				'@apply bg-red-600 text-white': {},
			},
			'&.note-contrast': {
				'@apply bg-red-100 ring-red-800 text-red-800': {},
			},
		},
	}
}

function noteLabel() {
	return {
		'&-label': {
			'@apply mr-1 font-semibold': {},
		},
	}
}

function noteText() {
	return {
		'&-text': {},
	}
}

function variants() {
	return {
		'&-filled': {},
	}
}

module.exports = Note = (colors) => ({
	'.note': {
		...note(),
		...noteSizes(),
		...noteTypes(),
		...noteLabel(),
		...noteText(),
	},
})
