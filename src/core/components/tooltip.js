function tooltip() {
	return {
		'@apply inline-block box-border absolute bg-neutral-100/100 text-neutral-800':
			{},
		'@apply px-4 py-2 shadow-sm z-50': {},
		'@apply w-max max-w-sm rounded-md': {},
		'@apply border': {},

		'&-invert': {
			'@apply bg-neutral-800/80 text-neutral-100': {},
		},

		'&-text': {
			'@apply text-sm overflow-hidden': {},
		},
	}
}

function tooltipPosition() {
	return {
		'&--bottom': {
			'@apply top-[140%] left-1/2 -translate-x-1/2': {},
		},
		'&--top': {
			'@apply bottom-[140%] left-1/2 -translate-x-1/2': {},
		},
		'&--left': {
			'@apply top-1/2 -translate-y-1/2 right-[120%]': {},
		},
		'&--right': {
			'@apply top-1/2 -translate-y-1/2 left-[120%]': {},
		},
	}
}
function tooltipAnimation() {
	return {
		'@apply transition-all duration-300': {},
		'&-open': {
			'@apply visible opacity-100': {},
		},
		'&-close': {
			'@apply invisible opacity-0': {},
		},
	}
}

module.exports = Tooltip = () => ({
	'.tooltip': {
		...tooltip(),
		...tooltipPosition(),
		...tooltipAnimation(),
	},
})
