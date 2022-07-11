import classNames from 'classnames'
import { InputProps } from './Input.types'

interface InputClassProps extends InputProps {}

function useInputClass({
	size,
	disabled,
	required,
	outline,
	readOnly,
	invalid,
	unstyled,
}: InputClassProps) {
	const sizes = {
		sm: 'form-input-sm',
		md: 'form-input-md',
		lg: 'form-input-lg',
	}

	const classes = classNames(
		'form-input',
		size && sizes[size],
		disabled && 'form-input-disabled',
		required && 'form-input-required',
		readOnly && 'form-input-readOnly',
		outline && 'form-input-outline',
		unstyled && 'form-input-unstyled',
		invalid && 'form-input-invalid'
	)

	return classes
}

export { useInputClass }
