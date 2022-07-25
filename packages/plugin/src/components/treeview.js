function treeview() {
	return {
		'@apply flex flex-col': {},
		'@apply list-none gap-0': {},
		'@apply text-sm': {},
		'@apply transition-all': {},
		'@apply min-w-[250px] w-fit min-h-[400px]': {},

		'&-title': {
			'@apply text-center': {},
			'@apply pb-1 mb-4 border-b border-neutral-400': {},
			'@apply select-none': {},
		},

		'&-icons': {
			'@apply w-4 h-4': {},
			'@apply align-middle': {},
		},

		'&-indent': {
			'@apply inline-block': {},
			'@apply w-[24px] h-full': {},

			'&-folder': {},
			'&-file': {
				'@apply bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:1px_100%] bg-no-repeat bg-center':
					{},
			},
			'&-file:not(:last-child)': {
				'@apply bg-none': {},
			},
		},
	}
}
function treeviewFolder() {
	return {
		'@apply flex flex-col': {},
		'@apply cursor-pointer outline-none': {},
		'@apply list-none gap-0': {},
		'@apply overflow-hidden transition-all': {},

		'&-focused': {
			'@apply bg-neutral-100': {},
		},

		'&-label': {
			'@apply flex relative items-center hover:text-blue-700': {},
			'&-icon': {
				'@apply mr-3': {},
			},
			'&-name': {
				'@apply py-[4px]': {},
			},
			'&-status': {
				'@apply flex justify-center items-center h-full': {},
				'@apply mr-3': {},
				'@apply bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:2px_100%] bg-no-repeat bg-center':
					{},
				'&-disabled': {
					'@apply cursor-not-allowed': {},
				},
			},
		},
		'&-children': {
			'@apply flex flex-col gap-0': {},
			'@apply ml-6': {},

			'& .treeview-file': {
				'@apply ml-0': {},
			},
			'& .treeview-folder': {
				'@apply -ml-5': {},
			},
		},
	}
}
function treeviewFile() {
	return {
		'@apply flex ml-5': {},
		'@apply cursor-default outline-none': {},
		'@apply overflow-hidden transition-all': {},

		'&-focused .treeview-file-label': {
			'@apply bg-neutral-100': {},
		},

		'&-selected .treeview-file-label': {
			'@apply bg-neutral-800/60 text-white': {},
		},

		'&-label': {
			'@apply flex relative items-center pl-1 py-[2px] flex-1': {},
			'@apply ml-1': {},
			'@apply rounded-md': {},

			'&-icon': {
				'@apply mr-3': {},
			},
			'&-name': {
				'@apply py-[2px] flex flex-1 select-none': {},
			},
		},
	}
}

module.exports = TreeView = (colors) => ({
	'.treeview': {
		...treeview(),
	},
	'.treeview-folder': {
		...treeviewFolder(),
	},
	'.treeview-file': {
		...treeviewFile(),
	},
})
