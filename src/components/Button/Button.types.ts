import React from 'react'

type IntrinsicProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export interface ButtonOwnProps extends Omit<IntrinsicProps, 'prefix' | 'type'> {
	size?: 'sm' | 'md' | 'lg'
	prefix?: string
	suffix?: JSX.Element | string
	align?: 'start' | 'grow'
	type?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'alert'
	shape?: 'rounded' | 'square'
	variant?: 'shadow' | 'unstyled' | 'ghost'
	disabled?: boolean
	loading?: boolean
}
