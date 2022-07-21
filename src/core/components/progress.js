function progress() {
	return {
		'@apply flex flex-col gap-2': {},
		'&-labels': {
			'@apply flex justify-between items-center': {},
		},
		'&-labels-label': {
			'@apply text-sm': {},
		},
		'&-labels-value': {
			'@apply text-sm': {},
		},
		'&-bar': {
			'@apply relative overflow-hidden rounded-md': {},
		},
		'&-bar-track': {
			'@apply h-2 bg-neutral-100': {},
		},
		'&-bar-fill': {
			'@apply h-2 bg-neutral-800': {},
			'@apply transition-all duration-500': {},
		},
	}
}

function progressThemed() {
	return {
		'&-success': {
			'& .progress-bar-fill,.progress-bar-indeterminate': {
				'@apply bg-blue-500': {},
			},
		},
		'&-warning': {
			'& .progress-bar-fill,.progress-bar-indeterminate': {
				'@apply bg-yellow-500': {},
			},
		},
		'&-error': {
			'& .progress-bar-fill,.progress-bar-indeterminate': {
				'@apply bg-red-500': {},
			},
		},
		'&-secondary': {
			'& .progress-bar-fill,.progress-bar-indeterminate': {
				'@apply bg-neutral-500': {},
			},
		},
	}
}

function progressIndeterminate() {
	return {
		'&-bar-indeterminate': {
			'@apply h-2 bg-neutral-800': {},
			'@apply absolute animate-ltr': {},
			'@apply opacity-70': {},
		},
	}
}

module.exports = Progress = (colors) => ({
	'.progress': {
		...progress(),
		...progressIndeterminate(),
		...progressThemed(),
	},
})
