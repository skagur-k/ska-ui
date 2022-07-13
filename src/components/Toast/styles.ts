import classNames from 'classnames'
import { useMemo } from 'react'
interface ToastClassProps extends Partial<Toast> {}

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
