function toastManager() {
	return {
		'@apply fixed z-50': {},

		'&.toast-manager--top-right': {
			'@apply top-5 right-5': {},
		},
		'&.toast-manager--top-left': {
			'@apply top-5 left-5': {},
		},
		'&.toast-manager--bottom-right': {
			'@apply bottom-5 right-5': {},
		},
		'&.toast-manager--bottom-left': {
			'@apply bottom-5 left-5': {},
		},
	}
}

function toastContainer() {
	return {
		'@apply flex flex-col gap-3 justify-end overflow-hidden': {},
		'@apply min-w-[500px] max-w-2xl': {},
	}
}

function toast() {
	return {
		'@apply relative px-6 py-4 shadow-md': {},
		'@apply ring-1 ring-inset': {},
		'@apply rounded-md': {},
		'@apply w-[500px]': {},
		'@apply flex justify-between items-center gap-3': {},

		'@apply animate-fadeIn': {},
		'@apply transition-all duration-500': {},

		'&-x': {
			'@apply absolute top-1/2 -translate-y-1/2 right-4': {},
			'@apply w-4 h-4 text-neutral-100': {},
			'@apply transition-all duration-500': {},
			'@apply opacity-0 cursor-pointer': {},
		},
		'&:hover &-x': {
			'@apply opacity-100': {},
		},
	}
}

function toastText() {
	return {
		'&-text': {
			'@apply text-base font-light': {},
			'@apply select-none': {},
		},
	}
}

function toastMode() {
	return {
		'&.toast-info': {
			'@apply bg-white': {},
			'@apply ring-neutral-200': {},
			'& .toast-x': {
				'@apply text-neutral-800': {},
			},
		},
		'&.toast-success': {
			'@apply bg-blue-600': {},
			'@apply ring-blue-600': {},
			'& .toast-x': {
				'@apply text-blue-100': {},
			},
			'& .toast-text': {
				'@apply text-white': {},
			},
		},
		'&.toast-warning': {
			'@apply bg-amber-400': {},
			'@apply ring-amber-400': {},
			'& .toast-x': {
				'@apply text-amber-800': {},
			},
			'& .toast-text': {},
		},
		'&.toast-error': {
			'@apply bg-red-600': {},
			'@apply ring-red-600': {},
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
