import { useTooltipTriggerState } from '@react-stately/tooltip'
import classNames from 'classnames'
import React from 'react'
import { mergeProps, useTooltip, useTooltipTrigger } from 'react-aria'
import { AriaToolTipProps, ToolTipProps } from './Tooltip.types'
import { getValidChildren } from '../../utils'
import { useTooltipClass } from './styles'

const _Tooltip = (props: AriaToolTipProps) => {
	const { message, state, className, ...rest } = props

	const { tooltipProps } = useTooltip(props, state)

	return (
		<span
			{...rest}
			className={classNames(className)}
			{...mergeProps(props, tooltipProps)}>
			{message && <p className='tooltip-text'>{message}</p>}
		</span>
	)
}

const Tooltip = (props: ToolTipProps) => {
	const {
		message,
		delay,
		children,
		arrow,
		position = 'bottom',
		invert,
		className,
	} = props
	const state = useTooltipTriggerState(props)
	const ref = React.useRef(null)
	const { triggerProps, tooltipProps } = useTooltipTrigger(
		{ ...props, delay },
		state,
		ref
	)
	const isOpen = state.isOpen

	const tooltipClasses = useTooltipClass({ arrow, position, isOpen, invert })

	const validChildren = getValidChildren(children)
	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			...triggerProps,
			ref: { ref },
		})
	})

	return (
		<span className={classNames('relative', className)}>
			{copies}
			<_Tooltip
				state={state}
				{...tooltipProps}
				message={message}
				className={tooltipClasses}
			/>
		</span>
	)
}

export default Tooltip
