import cx from 'classnames'
import { AvatarProps } from './Avatar.types'
interface AvatarNameClassProps {
	size?: AvatarProps['size']
}
interface AvatarClassProps {
	size?: AvatarProps['size']
	bordered?: AvatarProps['bordered']
}

export { AvatarClassProps, AvatarNameClassProps }

export const useAvatarNameClass = ({ size }: AvatarNameClassProps) => {
	const sizes = {
		xs: 'avatar-name-xs',
		sm: 'avatar-name-sm',
		md: 'avatar-name-md',
		lg: 'avatar-name-lg',
		xl: 'avatar-name-xl',
		'2xl': 'avatar-name-2xl',
	}

	const classes = cx(['avatar-name', size && sizes[size]])

	return classes
}

export const useAvatarClass = ({ size, bordered }: AvatarClassProps) => {
	const sizes = {
		xs: 'avatar-xs',
		sm: 'avatar-sm',
		md: 'avatar-md',
		lg: 'avatar-lg',
		xl: 'avatar-xl',
		'2xl': 'avatar-2xl',
	}

	const classes = cx(
		['avatar', size && sizes[size]],
		bordered && 'avatar-bordered'
	)

	return classes
}
