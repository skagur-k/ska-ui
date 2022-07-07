import classNames from 'classnames'
import { Badge } from '../Badge'
import React from 'react'
import { getValidChildren } from '../../utils'
import Avatar from './Avatar'
import { AvatarGroupProps } from './Avatar.types'

export const AvatarGroup = ({
	size,
	children,
	max,
	className,
	...rest
}: AvatarGroupProps) => {
	const validChildren = getValidChildren(children)
	const displayChildren = max ? validChildren.slice(0, max) : validChildren

	const excess = max != null && validChildren.length - max

	const clones = displayChildren.map((child, index) => {
		return React.cloneElement(child, {
			size,
			className: classNames(
				child.props.className,
				'-mr-3 border-[1px] border-white'
			),
			bordered: true,
		})
	})

	return (
		<div role='group' className={classNames('avatar-group', className)}>
			{clones}
			{excess > 0 && (
				<Badge className='avatar-group-excess'>+{excess}</Badge>
			)}
		</div>
	)
}

AvatarGroup.displayName = 'AvatarGroup'
