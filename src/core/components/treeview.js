function treeview() {
	return {
		'@apply flex flex-col': {},
		'@apply list-none gap-0': {},
		'@apply text-sm': {},

		'&-icons': {
			'@apply w-4 h-4': {},
			'@apply align-middle': {},
		},

		'&-indent': {
			'@apply inline-block': {},
			'@apply w-[24px] h-full': {},

			'&-folder': {},
			'&-file': {
				'@apply bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:2px_100%] bg-no-repeat bg-center':
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
		'@apply cursor-pointer': {},
		'@apply list-none gap-0': {},
		'&-label': {
			'@apply flex relative items-center py-[2px]': {},
			'&-icon': {
				'@apply mr-3': {},
			},
			'&-name': {},
			'&-status': {
				'@apply flex justify-center items-center': {},
				'@apply mr-3': {},
				'@apply bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:2px_100%] bg-no-repeat bg-center':
					{},
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
		'@apply cursor-default': {},
		'&-label': {
			'@apply flex relative items-center py-[2px]': {},
			'@apply ml-2': {},

			'&-icon': {
				'@apply mr-3': {},
			},
			'&-name': {},
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
