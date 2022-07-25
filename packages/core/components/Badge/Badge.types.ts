import React, { ReactText } from 'react'

interface BadgeProps {
	value?: string
	children?: React.ReactNode
	outline?: boolean
	contrast?: boolean
	size?: 'sm' | 'md' | 'lg'
	color?: string
	className?: string
}

type Badge = JSX.Element

export { Badge, BadgeProps }
