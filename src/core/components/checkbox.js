function checkbox() {
	return {
		'@apply cursor-pointer relative select-none': {},
		'@apply mr-4': {},
	}
}

function checkboxSizes() {
	return {
		'&-sm': {
			'@apply w-4 h-4': {},
		},
		'&-md': {
			'@apply w-5 h-5': {},
		},
		'&-lg': {
			'@apply w-6 h-6': {},
		},
	}
}

function checkboxLabelSizes() {
	return {
		'&-sm': {
			'@apply text-sm': {},
		},
		'&-md': {
			'@apply text-base': {},
		},
		'&-lg': {
			'@apply text-lg': {},
		},
	}
}

module.exports = Checkbox = () => ({
	'.checkbox': {
		...checkbox(),
		...checkboxSizes(),
	},
	'.checkbox-label': {
		...checkboxLabelSizes(),
	},
})
