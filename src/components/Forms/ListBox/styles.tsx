import classNames from 'classnames'
import { ListBoxProps } from './ListBox.types'

interface ListBoxOptionClassProps extends Partial<ListBoxProps> {
	isDisabled?: boolean
	isSelected?: boolean
	isFocused?: boolean
}

function useListBoxOptionClass(props: ListBoxOptionClassProps) {
	const { isDisabled, isSelected, isFocused } = props

	const classes = classNames('listbox-option', [
		isDisabled && 'listbox-option-disabled',
		isSelected && 'listbox-option-selected',
		isFocused && 'listbox-option-focused',
	])

	return classes
}

export { useListBoxOptionClass }
