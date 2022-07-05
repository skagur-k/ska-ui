import React, { AriaRole } from 'react'

interface ICheckboxProps {
	color?: string
	size?: 'sm' | 'md' | 'lg'
	rounded?: boolean
	value?: string
	required?: boolean
	invalid?: boolean
	defaultChecked?: boolean
	isIndeterminate?: boolean
	disabled?: boolean
	checked?: boolean
	onChange?: () => {}
}

interface ICheckboxGroupProps {
	color?: string
	size?: 'sm' | 'md' | 'lg'
	disabled?: boolean
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
