function tabs() {
	return {
		'@apply relative rounded-md box-content': {},
		'@apply w-full': {},
	}
}

function tabsList() {
	return {
		'&-list': {
			'@apply flex mb-2 py-2': {},
		},
	}
}

function tabsListTab() {
	return {
		'&-list-tab': {
			'@apply text-sm truncate box-border': {},
			'@apply outline-none cursor-pointer': {},
			'@apply px-2 py-1': {},
			'@apply transition-all duration-300': {},
			'@apply border-2 border-transparent border-b-neutral-300': {},
		},
		'&-list-tab-selected': {
			'@apply mx-2 px-4 border-b-2 border-b-neutral-500': {},
			'@apply flex-nowrap overflow-visible': {},
			'text-shadow': '0px 0px 1px black;',
			'&.tabs-list-tab-focused': {
				'@apply border-2 border-neutral-500': {},
			},
		},
		'&-list-tab-disabled': {
			'@apply border-b-0 text-neutral-300': {},
			'@apply cursor-not-allowed': {},
		},
	}
}

function tabsPanel() {
	return {
		'&-panel': {
			'@apply px-2 py-2': {},
			'@apply transition-all duration-300': {},
			'@apply animate-fadeIn': {},
			'@apply outline-none': {},
			'&-focused': {
				'@apply ring-2 ring-neutral-500 ring-inset': {},
			},
		},
	}
}

module.exports = Tabs = (colors) => ({
	'.tabs': {
		...tabs(),
		...tabsList(),
		...tabsListTab(),
		...tabsPanel(),
	},
})
