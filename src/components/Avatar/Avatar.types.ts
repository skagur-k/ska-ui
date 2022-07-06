import React from 'react'

interface IAvatarProps {
	name?: string
	src?: string
	srcSet?: string
	bordered?: boolean
	onError?: () => void
	loading?: 'eager' | 'lazy'
	size?: number
	getInitials?: (name: string) => string
	children?: React.ReactNode
	isFullName?: boolean
	className?: string
}

interface AvatarNameProps
	extends React.HTMLAttributes<HTMLDivElement>,
		Pick<
			IAvatarProps,
			'name' | 'getInitials' | 'size' | 'isFullName' | 'className'
		> {}

interface AvatarPlaceholderProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	'aria-label'?: string
}

interface AvatarProps
	extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onError'>,
		IAvatarProps {
	iconLabel?: string
}

export { AvatarNameProps, AvatarProps, AvatarPlaceholderProps }
