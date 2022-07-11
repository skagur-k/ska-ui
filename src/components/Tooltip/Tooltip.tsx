import classNames from 'classnames'
import { useTooltip } from 'react-aria'
import { FaInfo } from 'react-icons/fa'
import { Tooltip, TooltipProps } from './Tooltip.types'

const Tooltip = (props: TooltipProps): Tooltip => {
	const { className, state } = props
	const { tooltipProps } = useTooltip(props, state)

	return <div {...rest} className={classNames('tooltip', className)}></div>
}

export default Tooltip
