function accordion() {
	return {
		'@apply border-y border-neutral-200 flex flex-col gap-3': {},

		'& > .accordion-item:not(:last-child)': {
			'@apply border-b border-neutral-200': {},
		},
	}
}
function accordionItem() {
	return {
		'@apply px-2 py-4 overflow-hidden': {},

		'&-title': {
			'@apply items-center cursor-pointer text-lg font-bold flex justify-between':
				{},
		},
		'&-content-wrapper': {
			'@apply block transition-all duration-300 ease-in-out overflow-hidden':
				{},
		},
		'&-content-content': {
			'@apply mt-8 h-auto box-content': {},
		},
	}
}

module.exports = Accorion = (colors) => ({
	'.accordion': {
		...accordion(),
	},
	'.accordion-item': {
		...accordionItem(),
	},
})
