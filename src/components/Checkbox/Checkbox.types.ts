import React from 'react'

interface ICheckboxProps {
	value: string
	caption?: string
	name?: string
	color?: string
	size?: 'sm' | 'md' | 'lg'
	rounded?: boolean
	required?: boolean
	readonly?: boolean
	invalid?: boolean
	defaultSelected?: boolean
	indeterminate?: boolean
	disabled?: boolean
	selected?: boolean
	ref?: React.RefObject<HTMLInputElement>
	onChange?: () => {}
}

interface ICheckboxGroupProps {
	color?: string
	value?: string[]
	size?: 'sm' | 'md' | 'lg'
	column?: boolean
	labelLeft?: boolean
	caption?: string
	disabled?: boolean
	rounded?: boolean
	label?: string
	defaultValue?: string[]
	onChange?: (value: string[]) => void
	isSelected?: string
	setValue?: string[]
	addValue?: string
	removeValue?: string
	toggleValue?: string
}

interface CheckboxNativeAttrs
	extends Omit<React.InputHTMLAttributes<any>, keyof ICheckboxProps> {}

interface CheckboxGroupNativeAttrs
	extends Omit<React.InputHTMLAttributes<any>, keyof ICheckboxGroupProps> {}

export type { ICheckboxProps, CheckboxNativeAttrs }

export interface CheckboxProps extends CheckboxNativeAttrs, ICheckboxProps {}
export interface CheckboxGroupProps
	extends CheckboxGroupNativeAttrs,
		ICheckboxGroupProps {}
