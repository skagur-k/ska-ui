import cx from 'classnames'
import { CheckboxProps } from './Checkbox.types'

interface checboxClassProps {
	size: CheckboxProps['size']
	disabled: CheckboxProps['disabled']
}
interface checboxLabelClassProps {
	size: CheckboxProps['size']
}

export const useCheckboxClass = ({ size, disabled }: checboxClassProps) => {
	const sizes = {
		sm: 'checkbox-sm',
		md: 'checbox-md',
		lg: 'checkbox-lg',
	}

	const classes = cx([
		'checkbox',
		size && sizes[size],
		disabled && 'checkbox-disabled',
	])

	return classes
}
export const useCheckboxLabelClass = ({ size }: checboxLabelClassProps) => {
	const sizes = {
		sm: 'checkbox-label-sm',
		md: 'checbox-label-md',
		lg: 'checkbox-label-lg',
	}

	const classes = cx(['checkbox-label', size && sizes[size]])

	return classes
}
