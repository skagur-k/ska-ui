import classNames from 'classnames'

const toastTypes = {
	success: 'bg-green-500',
	error: 'bg-red-500',
	warning: 'bg-yellow-500',
}

const positions = {
	topCenter: 'top-0 mx-auto',
	topRight: 'top-0 right-0',
	bottomCenter: 'bottom-0 mx-auto',
	bottomRight: 'bottom-0 right-0',
}

const variants = {
	fadeLeft: {
		initial: {
			opacity: 0,
			x: '100%',
		},

		animate: {
			opacity: 1,
			x: 0,
		},
		exit: {
			opacity: 0,
			x: '100%',
		},
	},
	fadeUp: {
		initial: {
			opacity: 0,
			y: 12,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		exit: {
			opacity: 0,
			y: '-100%',
		},
	},
}

