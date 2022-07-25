import classNames from 'classnames'
import { BadgeProps } from './Badge.types'

interface BadgeClassProps {
	size?: BadgeProps['size']
	contrast?: BadgeProps['contrast']
	outline?: BadgeProps['outline']
}

export const useBadgeClass = ({ size, contrast, outline }: BadgeClassProps) => {
	const sizes = {
		sm: 'badge-sm',
		md: 'badge-md',
		lg: 'badge-lg',
	}

	const classes = classNames(
		'badge',
		size && [sizes[size]],
		contrast && 'badge-contrast',
		outline && 'badge-outline'
	)

	return classes
}
