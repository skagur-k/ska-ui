import { ToggleState } from '@react-stately/toggle'
import cx from 'classnames'
import { CheckboxProps } from './Checkbox.types'

interface checboxClassProps {
	isSelected?: boolean
	disabled?: boolean
	isFocusVisible?: boolean
	size?: CheckboxProps['size']
	rounded?: CheckboxProps['rounded']
}
interface checboxLabelClassProps {
	size: CheckboxProps['size']
}

export const useCheckboxClass = ({
	isSelected,
	disabled,
	isFocusVisible,
	size,
	rounded,
}: checboxClassProps) => {
	const sizes = {
		sm: 'checkbox-sm',
		md: 'checbox-md',
		lg: 'checkbox-lg',
	}

	const classes = cx([
		'checkbox',
		size && sizes[size],
		disabled && 'checkbox-disabled',
		isFocusVisible && 'checkbox-focused',
		isSelected && 'checkbox-selected',
		rounded && 'checkbox-rounded',
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
