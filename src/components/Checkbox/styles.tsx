import cx from 'classnames'
import { CheckboxGroupProps, CheckboxProps } from './Checkbox.types'

interface checkboxClassProps {
	isSelected?: boolean
	disabled?: boolean
	isFocused?: boolean
	size?: CheckboxProps['size']
	rounded?: CheckboxProps['rounded']
}
interface checkboxLabelClassProps {
	size: CheckboxProps['size']
}

interface checkboxGroupClassProps {
	labelLeft: CheckboxGroupProps['labelLeft']
}

export const useCheckboxClass = ({
	isSelected,
	disabled,
	isFocused,
	size,
	rounded,
}: checkboxClassProps) => {
	const sizes = {
		sm: 'checkbox-sm',
		md: 'checbox-md',
		lg: 'checkbox-lg',
	}

	const classes = cx([
		'checkbox',
		size && sizes[size],
		disabled && 'checkbox-disabled',
		isFocused && 'checkbox-focused',
		isSelected && 'checkbox-selected',
		rounded && 'checkbox-rounded',
	])

	return classes
}
export const useCheckboxLabelClass = ({ size }: checkboxLabelClassProps) => {
	const sizes = {
		sm: 'checkbox-label-sm',
		md: 'checbox-label-md',
		lg: 'checkbox-label-lg',
	}

	const classes = cx(['checkbox-label', size && sizes[size]])

	return classes
}

export const useCheckboxGroupClass = ({
	labelLeft,
}: checkboxGroupClassProps) => {
	const classes = cx('checkbox-group', [
		labelLeft && 'checkbox-group-label-left',
	])

	return classes
}
