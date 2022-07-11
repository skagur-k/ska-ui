import { useTooltipTriggerState } from '@react-stately/tooltip'
import classNames from 'classnames'
import React from 'react'
import { mergeProps, useTooltip, useTooltipTrigger } from 'react-aria'
import { AriaToolTipProps, Tooltip, ToolTipProps } from './Tooltip.types'
import { getValidChildren } from '../../utils'

const _Tooltip = (props: AriaToolTipProps): Tooltip => {
	const { message, state, ...rest } = props

	const { tooltipProps } = useTooltip(props, state)

	return (
		<span
			{...rest}
			className={classNames('tooltip')}
			{...mergeProps(props, tooltipProps)}>
			{message && <p className='tooltip-text'>{message}</p>}
		</span>
	)
}

const Tooltip = (props: ToolTipProps) => {
	const { message, delay, children, className } = props
	const state = useTooltipTriggerState(props)
	const ref = React.useRef(null)
	const { triggerProps, tooltipProps } = useTooltipTrigger(
		{ ...props, delay },
		state,
		ref
	)

	const validChildren = getValidChildren(children)
	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			...triggerProps,
		})
	})

	return (
		<span className={classNames('relative inline-block', className)}>
			{copies}
			{state.isOpen && (
				<_Tooltip state={state} {...tooltipProps} message={message} />
			)}
		</span>
	)
}

export default Tooltip
