import classNames from 'classnames'
import { useImage } from '../../hooks/'
import React from 'react'
import {
	AvatarNameProps,
	AvatarPlaceholderProps,
	AvatarProps,
} from './Avatar.types'
import { Image } from '../Image'
import { useAvatarClass, useAvatarNameClass } from './styles'
import type { Badge } from 'components/Badge/Badge.types'

const getInitials = (name: string) => {
	const [firstName, lastName] = name.split(' ')

	if (firstName && lastName) {
		return `${firstName.charAt(0)}${lastName.charAt(0)}`
	} else return firstName.charAt(0)
}

const AvatarPlaceholder = ({
	className,
	children,
	...props
}: AvatarPlaceholderProps) => {
	return (
		<div
			className={classNames(
				'w-full h-full fill-neutral-600 relative',
				className
			)}
			{...props}>
			<svg viewBox='0 0 128 128' role='img'>
				<g>
					<path d='M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z' />
					<path d='M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24' />
				</g>
			</svg>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				{children}
			</div>
		</div>
	)
}

AvatarPlaceholder.displayName = 'AvatarPlaceholder'

const AvatarName = (props: AvatarNameProps) => {
	const { name, isFullName, size, className, ...rest } = props
	const avatarNameClasses = useAvatarNameClass({ size })
	return (
		<div
			className={classNames(avatarNameClasses, className)}
			aria-label={name}
			{...rest}>
			{name ? getInitials(name) : null}
		</div>
	)
}

AvatarName.displayName = 'AvatarName'

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	(props: AvatarProps, ref) => {
		const {
			size = 'md',
			bordered = false,
			name,
			icon,
			badge,
			src,
			srcSet,
			onError,
			loading,
			getInitials,
			children,
			isFullName,
			className,
			...rest
		} = props

		const status = useImage({ src, onError })
		const hasLoaded = status === 'loaded'
		const Icon = icon

		const avatarClasses = useAvatarClass({ size, bordered })

		const renderChildren = () => {
			if (src && hasLoaded) {
				return (
					<Image
						className='object-cover aspect-square rounded-full'
						src={src}
						alt={name}
					/>
				)
			}

			if (src && !hasLoaded) {
				if (name) {
					return (
						<AvatarName
							size={size}
							name={name}
							isFullName={isFullName}
						/>
					)
				} else {
					return <AvatarPlaceholder aria-label={name} />
				}
			}

			if (!src && name) {
				return (
					<AvatarPlaceholder>
						<AvatarName
							size={size}
							name={name}
							isFullName={isFullName}
						/>
					</AvatarPlaceholder>
				)
			}
			if (!src && !name) {
				return <AvatarPlaceholder />
			}
		}

		return (
			<div className='inline-flex'>
				<div className='relative'>
					<div
						ref={ref}
						className={classNames(avatarClasses, className)}
						{...rest}>
						{renderChildren()}
					</div>
					{icon && <Icon className='avatar-icon' />}
					{badge && <div className='avatar-badge'>{badge}</div>}
				</div>
			</div>
		)
	}
)

export default Avatar
