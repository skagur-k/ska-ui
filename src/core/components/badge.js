function badge(colors) {
	return {
		'@apply relative rounded-md box-content truncate max-w-[20ch]': {},
		'@apply inline-flex shrink-0 items-center justify-start': {},
		'@apply bg-neutral-800 text-neutral-100 shadow-sm': {},
		'@apply cursor-pointer': {},
		'@apply font-medium': {},
		'@apply ring-1 ring-white': {},

		'&-contrast': {
			'@apply bg-neutral-300 ring-1 ring-neutral-800 text-neutral-800':
				{},
		},
		'&-outline': {
			'@apply bg-transparent ring-1 ring-neutral-800 text-neutral-800':
				{},
		},

		...colors.reduce(
			(styles, color) => ({
				...styles,
				[`&[data-color="${color}"]`]: {
					[`@apply bg-${color}-500`]: {},
				},
				[`&[data-color="${color}"].badge-contrast`]: {
					[`@apply bg-${color}-200 ring-1 ring-${color}-800 text-${color}-800`]:
						{},
				},
				[`&[data-color="${color}"].badge-outline`]: {
					[`@apply bg-transparent ring-1 ring-${color}-500 text-${color}-500`]:
						{},
				},
			}),
			{}
		),
		...badgeSizes(),
	}
}

function badgeSizes() {
	return {
		'&-sm': {
			'@apply text-tiny leading-4 px-1 py-0 rounded-sm': {},
		},
		'&-md': {
			'@apply text-xs leading-4 px-2 py-[2px] rounded-md': {},
		},
		'&-lg': {
			'@apply text-sm leading-4 px-2 py-[2px] rounded-md': {},
		},
	}
}

module.exports = Badge = (colors) => ({
	'.badge': {
		...badge(colors),
	},
})
