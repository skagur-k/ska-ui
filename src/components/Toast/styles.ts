import classNames from 'classnames'
import { useMemo } from 'react'
interface ToastClassProps extends Omit<Toast, 'id'> {}

function useToastClass(props: ToastClassProps) {
	const { mode } = props

	const modes = {
		info: 'toast-info',
		success: 'toast-success',
		warning: 'toast-warning',
		error: 'toast-error',
	}

	const classes = useMemo(
		() => classNames('toast', [mode && modes[mode]]),
		[mode]
	)
	return classes
}

export { useToastClass }
