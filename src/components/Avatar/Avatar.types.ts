import { Badge } from 'components/Badge/Badge.types'
import React from 'react'
import { IconType } from 'react-icons/lib'

interface IAvatarProps {
	name?: string
	src?: string
	srcSet?: string
	icon?: any
	badge?: Badge
	bordered?: boolean
	onError?: () => void
	loading?: 'eager' | 'lazy'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
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

interface IAvatarGroupProps {
	children: React.ReactNode
	max?: number
	size?: AvatarProps['size']
}

interface AvatarGroupProps
	extends IAvatarGroupProps,
		Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

export {
	AvatarNameProps,
	AvatarProps,
	AvatarPlaceholderProps,
	AvatarGroupProps,
}
