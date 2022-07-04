function buttonGroup() {
	return {
		'.btn-group': {
			'@apply inline-flex whitespace-nowrap items-center': {},

			'& > .btn': {
				'@apply mr-4': {},
			},

			'&.btn-group-attached': {
				'> .btn': {
					'@apply rounded-none mr-0 focus:z-50 focus:ring-2': {},
				},

				'> .btn:not(:last-child)': {
					'@apply border-r-0': {},
				},
			},
			'&.btn-group-rounded': {
				'> .btn:first-child': {
					'@apply rounded-l-3xl': {},
				},
				'> .btn:not(:first-child):not(:last-child)': {
					'@apply rounded-none': {},
				},
				'> .btn:last-child': {
					'@apply rounded-r-3xl': {},
				},
			},
		},
	}
}

module.exports = ButtonGroup = () => ({
	...buttonGroup(),
})
