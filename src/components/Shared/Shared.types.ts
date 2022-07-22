import {
	ItemProps as _ItemProps,
	SectionProps as _SectionProps,
} from '@react-types/shared'

export interface ItemProps<T>
	extends _ItemProps<T>,
		Omit<DefaultProps, 'children'> {
	avatar?: string
	label?: string
}
export interface SectionProps<T>
	extends _SectionProps<T>,
		Omit<DefaultProps, 'children'> {}
