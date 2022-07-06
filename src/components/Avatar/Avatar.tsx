import classNames from 'classnames'
import { useImage } from '../../hooks/'
import React from 'react'
import {
	AvatarNameProps,
	AvatarPlaceholderProps,
	AvatarProps,
} from './Avatar.types'

const getInitials = (name: string) => {
	const [firstName, lastName] = name.split(' ')

	if (firstName && lastName) {
		return `${firstName.charAt(0)}${lastName.charAt(0)}`
	} else return firstName.charAt(0)
}

const AvatarPlaceholder = ({ className, ...props }: AvatarPlaceholderProps) => {
	return (
		<div className={classNames('w-full h-full', className)} {...props}>
			<svg fill='#000' viewBox='0 0 128 128' role='img'>
				<g>
					<path d='M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z' />
					<path d='M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24' />
				</g>
			</svg>
		</div>
	)
}

const AvatarName = (props: AvatarNameProps) => {
	const { name, isFullName, size, className, ...rest } = props
	return (
		<div className={classNames(className)} aria-label={name} {...rest}>
			{name ? (isFullName ? name : getInitials(name)) : null}
		</div>
	)
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	(props: AvatarProps, ref) => {
		const {
			name,
			src = 'md',
			srcSet,
			bordered,
			onError,
			loading,
			size,
			getInitials,
			children,
			className,
			...rest
		} = props

		const status = useImage({ src, onError })
		const hasLoaded = status === 'loaded'

		console.log(status)
		console.log(hasLoaded)
 
		const renderChildren = () => {
			if (src && hasLoaded) {
				return (
					<img
						className='object-cover w-full h-full rounded-full'
						src={src}
						alt={name}
					/>
				)
			}

			if (src && !hasLoaded) {
				if (name) {
					return <AvatarName size={size} name={name} />
				} else {
					return <AvatarPlaceholder aria-label={name} />
				}
			}

			if (!src && name) {
				return <AvatarName size={size} name={name} />
			}
		}

		return (
			<div ref={ref} className={classNames(className)} {...rest}>
				{renderChildren()}
				{children}
			</div>
		)
	}
)

export default Avatar
