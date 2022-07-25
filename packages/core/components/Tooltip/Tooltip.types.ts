import { DefaultProps } from '../../types'

import { TooltipTriggerState } from '@react-stately/tooltip'
import {
	AriaTooltipProps,
	TooltipProps,
	TooltipTriggerProps,
} from '@react-types/tooltip'
import { ReactNode } from 'react'

export interface AriaToolTipProps extends AriaTooltipProps, DefaultProps {
	message?: ReactNode
	state?: TooltipTriggerState
}

export interface ToolTipProps
	extends DefaultProps,
		TooltipProps,
		TooltipTriggerProps {
	delay?: number
	message?: ReactNode
	arrow?: boolean
	position?: 'bottom' | 'top' | 'left' | 'right'
	invert?: boolean
}

// interface TooltipAria extends HTMLAttributes<HTMLElement> {}

export type Tooltip = JSX.Element

// export { Tooltip, TooltipProps, TooltipAria, AriaTooltipProps }
