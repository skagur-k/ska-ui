import { TooltipTriggerState } from '@react-stately/tooltip'
import classNames from 'classnames'
import { ToolTipProps } from './Tooltip.types'

interface tooltipClassProps {
	arrow?: ToolTipProps['arrow']
	position?: ToolTipProps['position']
	isOpen?: ToolTipProps['isOpen']
	invert?: ToolTipProps['invert']
}

function useTooltipClass(props: tooltipClassProps) {
	const { arrow, position, isOpen, invert } = props

	const positions = {
		bottom: 'tooltip--bottom',
		top: 'tooltip--top',
		right: 'tooltip--right',
		left: 'tooltip--left',
	}

	const animation = {
		fade: 'tooltip-animate-fade',
		scale: 'tooltip-animate-scale',
	}

	const classes = classNames(
		'tooltip',
		[
			arrow && 'tooltip-arrow',
			position && positions[position],
			invert && 'tooltip-invert',
		],
		isOpen ? 'tooltip-open' : 'tooltip-close'
	)

	return classes
}

export { useTooltipClass }
