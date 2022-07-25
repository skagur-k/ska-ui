function input(colors) {
	return {
		'@apply relative w-full': {},
		'@apply flex flex-col justify-center items-start': {},

		'&-unstyled': {
			'& .form-input-field': {
				'@apply focus:ring-0': {},
				'&-with-prefix': {
					'@apply border-l-0': {},
				},
				'&-with-suffix': {
					'@apply border-r-0': {},
				},
			},
			'& .form-input-prefix': {
				'@apply bg-white text-neutral-400 pr-1': {},
			},
			'& .form-input-suffix': {
				'@apply bg-white text-neutral-400': {},
			},
			'& .form-input-wrapper.form-input-focused': {
				'@apply ring-1 ring-neutral-500 rounded-md': {},
			},
			'&.form-input-disabled': {
				'@apply cursor-not-allowed': {},
				'& .form-input-prefix, .form-input-suffix': {
					'@apply bg-neutral-50': {},
				},
			},
		},

		'&-focused': {
			'& .form-input-prefix, .form-input-suffix': {},
		},
	}
}

function label(colors) {
	return {
		'&-label': {
			'@apply block mb-2': {},
			'@apply text-sm font-medium text-neutral-700': {},
		},
		'&-sm &-label': {
			'@apply text-sm': {},
		},
		'&-md &-label': {
			'@apply text-base': {},
		},
		'&-lg &-label': {
			'@apply text-base': {},
		},
	}
}

function wrapper(colors) {
	return {
		'&-wrapper': {
			'@apply transition-all duration-300': {},
			'@apply table justify-center mb-2': {},
		},
		'&-prefix, &-suffix': {
			'@apply transition-all duration-300': {},
			'@apply text-sm bg-neutral-50 text-neutral-500 fill-neutral-500':
				{},
			'@apply table-cell px-4 align-middle': {},
			'@apply table-cell px-4 align-middle': {},
			'@apply border px-4': {},
		},
		'&-prefix': {
			'@apply border-r-0 rounded-l-lg focus:bg-red-500': {},
		},
		'&-suffix': {
			'@apply border-l-0 rounded-r-lg': {},
		},
	}
}

function field(colors) {
	return {
		'&-field': {
			'@apply w-full px-3 py-1 z-50': {},
			'@apply rounded-md border appearance-none align-middle': {},
			'@apply text-neutral-800 bg-white': {},
			'@apply outline-none focus:ring-1 focus:ring-neutral-500 ring-inset':
				{},
			'@apply autofill:!bg-yellow-200': {},
			'@apply transition-all duration-300': {},

			'@apply disabled:bg-neutral-50 disabled:cursor-not-allowed': {},

			'&::placeholder': {
				'@apply text-neutral-300 font-light': {},
			},

			'&:invalid': {
				'@apply ring-1 ring-red-500 text-red-500': {},
			},

			'&-with-prefix': {
				'@apply rounded-l-none': {},
			},
			'&-with-suffix': {
				'@apply rounded-r-none': {},
			},
		},
		'&-sm &-field': {
			'@apply text-sm px-3 py-2': {},
		},
		'&-md &-field': {
			'@apply text-base px-3 py-2': {},
		},
		'&-lg &-field': {
			'@apply text-lg px-3 py-3': {},
		},
	}
}

function description(colors) {
	return {
		'&-description': {
			'@apply ml-1 text-sm text-neutral-400 font-light': {},
		},
	}
}

function errorMessage(colors) {
	return {
		'&-errormessage': {
			'@apply ml-1 text-sm text-red-500 font-light': {},
		},
	}
}

function invalid() {
	return {
		'&-invalid': {
			'& .form-input-field': {
				'@apply ring-1 ring-red-300 text-red-300 focus:ring-red-500 focus:text-red-500':
					{},
				'&::placeholder': {
					'@apply text-red-100': {},
				},
			},
			'& .form-input-prefix, .form-input-suffix': {},
		},
		'&-unstyled&-invalid': {
			'& .form-input-wrapper': {
				'@apply ring-1 ring-red-300 text-red-300 focus:ring-red-500 focus:text-red-500':
					{},
				'@apply rounded-md': {},
			},
			'& .form-input-field': {
				'@apply ring-0': {},
			},
			'& .form-input-prefix, .form-input-suffix': {
				'@apply text-red-300 fill-red-300': {},
			},
			'.form-input-focused': {
				'@apply ring-red-500 text-red-300': {},
				'& .form-input-prefix, .form-input-suffix': {
					'@apply text-red-500 fill-red-500': {},
				},
			},
		},
	}
}

module.exports = Input = (colors) => ({
	'.form-input': {
		...input(colors),
		...wrapper(colors),
		...label(colors),
		...field(colors),
		...description(colors),
		...errorMessage(colors),
		...invalid(),
	},
})
