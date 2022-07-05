import classNames from 'classnames'
import { CheckboxGroupProps } from './Checkbox.types'
import React, { forwardRef } from 'react'
import getValidChildren from '../../utils/getValidChildren'

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
	(props, ref) => {
		const { size, color, disabled, children, className, ...rest } = props

		const validChildren = getValidChildren(children)
		const copies = validChildren.map((child) => {
			return React.cloneElement(child, {
				size: size || child.props.size,
				color: child.props.color || color,
				disabled: child.props.disabled || disabled,
				focusafterclick: true,
			})
		})

		return (
			<div
				ref={ref}
				role='group'
				className={classNames('checkbox-group', className)}
				{...rest}>
				{copies}
			</div>
		)
	}
)
CheckboxGroup.displayName = 'CheckboxGroup'

export default CheckboxGroup
