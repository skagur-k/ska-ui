import { ToolTipProps } from 'components/Tooltip/Tooltip.types'
import React from 'react'

interface DescriptionProps {
	title?: string
	tooltip?: string
	tooltipPosition?: ToolTipProps['position']
	children?: React.ReactNode
	className?: string
}

export { DescriptionProps }
