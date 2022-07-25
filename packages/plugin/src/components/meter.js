function meter() {
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
			'@apply overflow-hidden rounded-md': {},
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

function meterThemed() {
	return {
		'&-success': {
			'& .meter-bar-fill': {
				'@apply bg-blue-500': {},
			},
		},
		'&-warning': {
			'& .meter-bar-fill': {
				'@apply bg-yellow-500': {},
			},
		},
		'&-error': {
			'& .meter-bar-fill': {
				'@apply bg-red-500': {},
			},
		},
		'&-secondary': {
			'& .meter-bar-fill': {
				'@apply bg-neutral-500': {},
			},
		},
	}
}

module.exports = Meter = (colors) => ({
	'.meter': {
		...meter(),
		...meterThemed(),
	},
})
