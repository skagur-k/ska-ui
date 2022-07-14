function container() {
	return {
		'@apply flex': {},
	}
}

function containerResponsive() {
	return {
		'&--sm': {
			'&-row': {
				'@apply flex-row': {},
			},
			'&-col': {
				'@apply flex-col': {},
			},
		},
		'&--md': {
			'&-row': {
				'@apply md:flex-row': {},
			},
			'&-col': {
				'@apply md:flex-col': {},
			},
		},
		'&--lg': {
			'&-row': {
				'@apply lg:flex-row': {},
			},
			'&-col': {
				'@apply lg:flex-col': {},
			},
		},
	}
}

module.exports = Container = (colors) => ({
	'.container': {
		...container(),
		...containerResponsive(),
	},
})
