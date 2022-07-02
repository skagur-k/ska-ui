import cx from 'classnames'
import { ButtonProps } from './Button.types'

interface btnClassProps {
	variant: ButtonProps['variant']
	type: ButtonProps['type']
	size: ButtonProps['size']
	disabled: ButtonProps['disabled']
	loading: ButtonProps['loading']
}

export const useButtonClass = ({
	variant,
	type,
	size,
	disabled,
	loading,
}: btnClassProps) => {
	const variants = {
		solid: 'btn-solid',
		ghost: 'btn-ghost',
	}

	const types = {
		success: 'btn-success',
		secondary: 'btn-secondary',
		warning: 'btn-warning',
		error: 'btn-error',
		alert: 'btn-alert',
	}

	const sizes = {
		block: 'btn-block',
		xs: 'btn-xs',
		sm: 'btn-sm',
		md: 'btn-md',
		lg: 'btn-lg',
	}

	const classes = cx([
		'btn',
		variant && variants[variant],
		type && types[type],
		size && sizes[size],
		disabled && 'btn-disabled',
		loading && 'btn-loading',
	])

	return classes
}
