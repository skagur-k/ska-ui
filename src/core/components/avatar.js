function avatar() {
	return {
		'@apply relative box-border rounded-full overflow-hidden': {},
		'@apply flex items-center justify-center': {},
		'@apply bg-neutral-800 text-neutral-100 shadow-sm': {},
		'@apply cursor-default': {},

		'&-bordered': {
			'@apply border-[1px] border-neutral-500': {},
		},

		'&-icon': {
			'@apply absolute bg-neutral-800 text-white': {},
			'@apply ring-1 ring-white': {},
			'@apply flex justify-center items-center': {},
			'@apply bottom-1 -right-2 p-[5px]': {},
			'@apply rounded-full': {},
		},
		...avatarSizes(),
	}
}

function avatarSizes() {
	return {
		'&-xs': {
			[`@apply w-8 h-8`]: {},
			'& + .avatar-icon': {
				'@apply invisible': {},
			},
		},
		'&-sm': {
			[`@apply w-10 h-10`]: {},
			'& + .avatar-icon': {
				'@apply invisible': {},
			},
		},
		'&-md': {
			[`@apply w-12 h-12`]: {},
			'& + .avatar-icon': {
				'@apply w-7 h-7': {},
				'@apply -bottom-2 -right-4': {},
			},
		},
		'&-lg': {
			[`@apply w-16 h-16`]: {},
			'& + .avatar-icon': {
				'@apply w-7 h-7': {},
				'@apply -bottom-1 -right-3': {},
			},
		},
		'&-xl': {
			[`@apply w-20 h-20`]: {},
			'& + .avatar-icon': {
				'@apply w-8 h-8': {},
				'@apply bottom-0 -right-3': {},
			},
		},
		'&-2xl': {
			[`@apply w-24 h-24`]: {},
			'& + .avatar-icon': {
				'@apply w-9 h-9': {},
				'@apply -bottom-0 -right-3': {},
			},
		},
	}
}

function avatarName() {
	return {
		'@apply font-bold text-neutral-200 drop-shadow-lg shadow-neutral-100':
			{},
		...avatarNameSizes(),
	}
}

function avatarNameSizes() {
	return {
		'&-xs': {
			[`@apply text-sm`]: {},
		},
		'&-sm': {
			[`@apply text-base`]: {},
		},
		'&-md': {
			[`@apply text-lg`]: {},
		},
		'&-lg': {
			[`@apply text-xl`]: {},
		},
		'&-xl': {
			[`@apply text-2xl`]: {},
		},
		'&-2xl': {
			[`@apply text-4xl`]: {},
		},
	}
}

function avatarGroup() {
	return {
		'@apply flex items-center': {},
		'&-excess': {
			'@apply ml-4 font-semibold text-neutral-800': {},
		},
	}
}

module.exports = Avatar = (colors) => ({
	'.avatar': {
		...avatar(),
	},

	'.avatar-name': {
		...avatarName(),
	},

	'.avatar-group': {
		...avatarGroup(),
	},
})
