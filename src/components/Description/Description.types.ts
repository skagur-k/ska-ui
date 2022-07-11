import { ToolTipProps } from 'components/Tooltip/Tooltip.types'
import React, { ReactText } from 'react'

interface DescriptionProps {
	title?: string
	tooltip?: string
	tooltipPosition?: ToolTipProps['position']
	children?: React.ReactNode
	className?: string
}

type Description = JSX.Element

export { Description, DescriptionProps }
