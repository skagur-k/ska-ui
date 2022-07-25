import classNames from 'classnames'
import { useMemo } from 'react'
import { ToastProps } from './Toast.types'
interface ToastClassProps extends Partial<ToastProps> {}

function useToastClass(props: ToastClassProps) {
	const { type } = props

	const types = {
		info: 'toast-info',
		success: 'toast-success',
		warning: 'toast-warning',
		error: 'toast-error',
	}

	const classes = useMemo(
		() => classNames('toast', [type && types[type]]),
		[type]
	)
	return classes
}

export { useToastClass }
