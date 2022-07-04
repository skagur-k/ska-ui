function buttonGroup() {
	return {
		'.btn-group': {
			'@apply inline-block whitespace-nowrap': {},

			'& > .btn': {
				'@apply mr-4': {},
			},

			'&.btn-group-attached': {
				'> .btn, .btn[data-color], .btn-solid': {
					'@apply ring-0': {},
				},
				'> .btn': {
					'@apply rounded-none mr-0': {},
				},

				'> .btn:not(:last-child)': {
					'@apply border-r-0': {},
				},
			},
			'&.btn-grou-rounded': {
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
