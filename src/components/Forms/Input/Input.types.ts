import React from 'react'

interface IInputProps<T = HTMLInputElement> {
	disabled?: React.InputHTMLAttributes<T>['disabled']
	required?: React.InputHTMLAttributes<T>['required']
	readOnly?: React.InputHTMLAttributes<T>['readOnly']
	color?: string
	value?: string
	label?: string
	prefix?: React.ReactNode
	suffix?: React.ReactNode
	description?: string
	errorMessage?: string
	size?: 'sm' | 'md' | 'lg'
	outline?: boolean
	onChange?: (value: string) => void
	as?: React.ElementType
	'aria-label'?: string
	'aria-describedby'?: string
	type?: string
	invalid?: boolean
	unstyled?: boolean
}

type InputNativeProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	| 'size'
	| 'type'
	| 'aria-label'
	| 'onFocus'
	| 'onBlur'
	| 'value'
	| 'defaultValue'
	| 'onChange'
	| keyof IInputProps
>

interface InputProps<T = HTMLElement>
	extends IInputProps,
		InputNativeProps,
		React.RefAttributes<T> {}

export { InputProps }
