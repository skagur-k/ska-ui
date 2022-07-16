import { AriaSelectProps } from '@react-types/select'
import Select, { SelectItem } from './Select'
import { ItemProps } from '@react-types/shared'

export interface SelectProps<T> extends AriaSelectProps<T> {
	placeholder?: string
	width?: string
	disabled?: boolean
}

export interface SelectItemProps<T> extends ItemProps<T> {
	avatar?: string
}
