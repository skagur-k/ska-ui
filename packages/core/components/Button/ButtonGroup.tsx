import classNames from 'classnames'
import { ButtonGroupProps } from './Button.types'
import React, { forwardRef } from 'react'
import getValidChildren from '../../utils/getValidChildren'

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	(props, ref) => {
		const {
			size,
			color,
			variant,
			attached,
			rounded,
			disabled,
			children,
			className,
			...rest
		} = props

		const validChildren = getValidChildren(children)
		const copies = validChildren.map((child) => {
			return React.cloneElement(child, {
				size: size || child.props.size,
				color: child.props.color || color,
				variant: child.props.variant || variant,
				disabled: child.props.disabled || disabled,
				rounded: child.props.rounded || rounded,
				focusafterclick: true,
			})
		})

		return (
			<div
				ref={ref}
				role='group'
				className={classNames(
					'btn-group',
					attached && 'btn-group-attached',
					rounded && 'btn-group-rounded',
					className
				)}
				{...rest}>
				{copies}
			</div>
		)
	}
)
ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
