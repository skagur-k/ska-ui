import { AriaSelectProps } from '@react-types/select'
import { ItemProps } from '@react-types/shared'

export interface SelectProps<T> extends AriaSelectProps<T> {
	placeholder?: string
	disabled?: boolean
}

export interface SelectItemProps<T> extends ItemProps<T> {
	avatar?: string
}
