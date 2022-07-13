function toastManager() {
	return {
		'@apply fixed z-50': {},

		'&--top-right': {
			'@apply top-5 right-5': {},
		},
		'&--top-left': {
			'@apply top-5 left-5': {},
		},
		'&--bottom-right': {
			'@apply bottom-5 right-5': {},
		},
		'&--bottom-left': {
			'@apply bottom-5 left-5': {},
		},
	}
}

function toastContainer() {
	return {
		'@apply flex flex-col gap-3': {},
		'@apply min-w-[400px] max-w-2xl': {},
		'@apply transition-all duration-300': {},
	}
}

function toast() {
	return {
		'@apply relative p-6 shadow-md': {},
		'@apply ring-1 ring-inset': {},
		'@apply rounded-sm hover:rounded-md': {},
		'@apply transition-all duration-200': {},
		'&-x': {
			'@apply absolute top-1/2 -translate-y-1/2 right-4': {},
			'@apply w-4 h-4 text-neutral-100': {},
			'@apply transition-all duration-300': {},
			'@apply opacity-0 cursor-pointer': {},
		},
		'&:hover &-x': {
			'@apply opacity-100': {},
		},
		'&-no-show': {
			'@apply opacity-0': {},
		},
		'&-show': {
			'@apply opacity-100': {},
		},
	}
}

function toastText() {
	return {
		'&-text': {
			'@apply text-base font-light': {},
		},
	}
}

function toastMode() {
	return {
		'&-info': {
			'@apply bg-neutral-50': {},
			'@apply ring-neutral-200 hover:ring-neutral-500': {},
			'& .toast-x': {
				'@apply text-neutral-800': {},
			},
		},
		'&-success': {
			'@apply bg-blue-600': {},
			'@apply ring-blue-600 hover:ring-blue-800': {},
			'& .toast-x': {
				'@apply text-blue-100': {},
			},
			'& .toast-text': {
				'@apply text-white': {},
			},
		},
		'&-warning': {
			'@apply bg-amber-400': {},
			'@apply ring-amber-400 hover:ring-amber-800': {},
			'& .toast-x': {
				'@apply text-amber-800': {},
			},
			'& .toast-text': {},
		},
		'&-error': {
			'@apply bg-red-600': {},
			'@apply ring-red-600 hover:ring-red-800': {},
			'& .toast-x': {
				'@apply text-red-100': {},
			},
			'& .toast-text': {
				'@apply text-white': {},
			},
		},
	}
}

module.exports = Toast = (colors) => ({
	'.toast-manager': {
		...toastManager(),
	},
	'.toast-container': {
		...toastContainer(),
	},
	'.toast': {
		...toast(),
		...toastText(),
		...toastMode(),
	},
})
