import React from 'react'
export interface ButtonOwnProps {
	size?: 'sm' | 'md' | 'lg'
	type?: 'submit' | 'reset' | 'button'
	shape?: 'rounded' | 'square'
	icon?: JSX.Element | string
	iconRight?: boolean
	variant?: 'solid' | 'outline' | 'ghost'
	disabled?: boolean
	loading?: boolean
}

export interface NativeAttrs extends Omit<React.ButtonHTMLAttributes<any>, keyof ButtonOwnProps> {}

export interface ButtonProps extends NativeAttrs, ButtonOwnProps {}
