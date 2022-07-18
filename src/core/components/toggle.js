function toggle() {
	return {
		'@apply relative inline-flex cursor-pointer gap-3 w-fit': {},
		...toggleSizes(),
	}
}

function toggleLabel() {
	return {
		'&-label--top': {
			'@apply flex flex-col': {},
		},
		'&-label--bottom': {
			'@apply flex flex-col-reverse': {},
		},
		'&-label--left': {
			'@apply flex items-center': {},
		},
		'&-label--right': {
			'@apply flex flex-row-reverse justify-end items-center': {},
		},

		'&-label': {
			'@apply text-sm': {},

			'&-selected.toggle-label-focused': {
				'@apply text-blue-500': {},
			},
		},
	}
}

function toggleComponents() {
	return {
		'&-switch': {
			'@apply relative': {},
			'@apply bg-neutral-200 shadow-md': {},
			'@apply transition-all duration-200': {},

			'&.toggle-switch-selected': {
				'@apply bg-blue-500': {},
			},
			'&.toggle-switch-focused': {
				'@apply ring-[2px] ring-neutral-400 ring-offset-2': {},
			},
			'&.toggle-switch-selected.toggle-switch-focused': {
				'@apply ring-blue-500': {},
			},
		},

		'&-switch-switch': {
			'@apply absolute bg-white': {},
			'@apply flex justify-center items-center': {},
			'@apply text-neutral-800': {},
			'@apply right-1/2 top-1/2 -translate-y-1/2': {},
			'@apply transition-all duration-200': {},
		},
		'&-switch-selected': {
			'& .toggle-switch-switch': {
				'@apply translate-x-full': {},
			},
		},
		'&-switch.toggle-switch-rounded': {
			'@apply rounded-full': {},
			'& .toggle-switch-switch': {
				'@apply rounded-full': {},
			},
		},
		'&-switch-disabled': {
			'@apply cursor-not-allowed': {},
			'& .toggle-switch-switch': {
				'@apply bg-neutral-300': {},
			},
		},
	}
}

function toggleSizes() {
	return {
		'&-xs': {
			'& .toggle-switch': {
				'@apply min-w-[36px] min-h-[18px]': {},
				'&-switch': {
					'@apply min-w-[12px] min-h-[12px]': {},
				},
			},
		},
		'&-md': {
			'& .toggle-switch': {
				'@apply min-w-[42px] min-h-[20px]': {},
				'&-switch': {
					'@apply min-w-[14px] min-h-[14px]': {},
				},
			},
		},
		'&-lg': {
			'& .toggle-switch': {
				'@apply min-w-[48px] min-h-[22px]': {},
				'&-switch': {
					'@apply min-w-[16px] min-h-[16px]': {},
				},
			},
		},
	}
}

module.exports = Toggle = (colors) => ({
	'.toggle': {
		...toggle(),
		...toggleLabel(),
		...toggleComponents(),
	},
})
