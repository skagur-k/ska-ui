import { HoverProps, PressProps } from '@react-aria/interactions'
import { TooltipTriggerState } from '@react-stately/tooltip'
import {
	AriaTooltipProps,
	TooltipProps,
	TooltipTriggerProps,
} from '@react-types/tooltip'
import React, { FocusEvent, HTMLAttributes, ReactNode } from 'react'

// interface FocusEvents {
// 	onFocus?: (e: FocusEvent) => void
// 	onBlur?: (e: FocusEvent) => void
// 	onFocusChange?: (isFocused: boolean) => void
// }

// interface _TriggerProps
// 	extends Omit<HTMLAttributes<HTMLElement>, 'onBlur' | 'onFocus'>,
// 		PressProps,
// 		HoverProps,
// 		FocusEvents {
// 	isOpen: boolean
// 	open: (immediate?: boolean) => void
// 	close: (immediate?: boolean) => void
// }

// interface TriggerProps extends TooltipTriggerProps {}

export interface AriaToolTipProps extends AriaTooltipProps {
	isOpen?: boolean
	id?: string
	'aria-label'?: string
	'aria-labelledby'?: string
	'aria-describedby'?: string
	'aria-details'?: string
	message?: ReactNode
	state?: TooltipTriggerState
}

export interface ToolTipProps
	extends DefaultProps,
		TooltipProps,
		TooltipTriggerProps {
	delay?: number
	message?: ReactNode
}

// interface TooltipAria extends HTMLAttributes<HTMLElement> {}

export type Tooltip = JSX.Element

// export { Tooltip, TooltipProps, TooltipAria, AriaTooltipProps }
