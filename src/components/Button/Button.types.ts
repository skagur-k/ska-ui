import React from 'react'
export interface ButtonOwnProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'block'
	color?: string
	block?: boolean
	type?: 'secondary' | 'success' | 'error' | 'warning' | 'alert'
	rounded?: boolean
	icon?: JSX.Element | string
	notification?: boolean
	focusafterclick?: boolean
	iconRight?: boolean
	variant?: 'solid' | 'ghost'
	disabled?: boolean
	loading?: boolean
}

export interface NativeAttrs
	extends Omit<React.ButtonHTMLAttributes<any>, keyof ButtonOwnProps> {}

export interface ButtonProps extends NativeAttrs, ButtonOwnProps {}
