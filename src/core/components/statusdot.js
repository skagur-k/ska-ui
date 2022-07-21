function statusdot() {
	return {
		'@apply flex gap-2 p-1 items-center': {},

		'&-dot': {
			'@apply w-[6px] h-[6px] rounded-full': {},
		},
		'&-label': {
			'@apply text-sm font-light': {},
		},
	}
}

function statusdotTypes() {
	return {
		'&-positive &-dot': {
			'@apply bg-blue-500': {},
		},
		'&-negative &-dot': {
			'@apply bg-red-500': {},
		},
		'&-neutral &-dot': {
			'@apply bg-neutral-300': {},
		},
		'&-info &-dot': {
			'@apply bg-cyan-500': {},
		},
		'&-notice &-dot': {
			'@apply bg-amber-500': {},
		},
	}
}

module.exports = StatusDot = (colors) => ({
	'.statusdot': {
		...statusdot(),
		...statusdotTypes(),
	},
})
