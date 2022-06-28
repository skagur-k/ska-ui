import React from 'react'
export interface ButtonOwnProps {
	size?: 'sm' | 'md' | 'lg'
	block?: boolean
	type?: 'secondary' | 'success' | 'error' | 'warning' | 'alert'
	shape?: 'rounded' | 'square'
	icon?: JSX.Element | string
	iconRight?: boolean
	variant?: 'shadow' | 'ghost' | 'unstyled'
	disabled?: boolean
	loading?: boolean
}

export interface NativeAttrs extends Omit<React.ButtonHTMLAttributes<any>, keyof ButtonOwnProps> {}

export interface ButtonProps extends NativeAttrs, ButtonOwnProps {}
