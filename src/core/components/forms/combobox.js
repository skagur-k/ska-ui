function combobox() {
	return {
		'@apply inline-flex flex-col relative min-w-[300px] w-fit': {},

		// Label for the ComboBox
		'&-label': {
			'@apply block text-sm text-left text-neutral-700': {},
		},

		'&-label': {
			'@apply block text-sm text-left text-neutral-700': {},
		},
	}
}

function comboboxButton() {
	return {
		// Wrapper for combobox Button
		'&-button': {
			'@apply inline-flex relative items-center grow-0': {},
			'@apply rounded-md overflow-hidden': {},
			'@apply border-2 border-neutral-200': {},
			'@apply transition-all duration-300': {},

			// Combobox Input
			'&-input': {
				'@apply px-2 py-1 outline-none w-full': {},
				'@apply text-sm': {},

				'&::placeholder': {
					'@apply text-neutral-200': {},
				},
			},

			// Combobx Button Icon on the right
			'&-icon': {
				'@apply p-1 border-l-2 border-l-neutral-200': {},
				'@apply bg-neutral-50 text-neutral-500': {},
				'@apply transition-all duration-300': {},
			},

			'&-hovered': {
				'@apply border-neutral-500': {},

				'& .combobox-button-icon': {
					'@apply border-l-neutral-500': {},
				},
			},
			'&-focused': {
				'@apply border-neutral-500': {},

				'& .combobox-button-icon': {
					'@apply border-l-neutral-500': {},
				},
			},
		},
	}
}
function comboboxPopover() {
	return {
		'&-popover': {},
	}
}

function comboboxListBox() {
	return {
		'&-listbox': {},
	}
}

module.exports = ComboBox = (colors) => ({
	'.combobox': {
		...combobox(),
		...comboboxButton(),
		...comboboxPopover(),
		...comboboxListBox(),
	},
})
