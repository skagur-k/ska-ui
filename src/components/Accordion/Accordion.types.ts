import React from 'react'
import { DefaultProps } from '../../types'

export type IAccordionItem = {
	title: string
	content: React.ReactNode
}

export interface AccordionProps {
	items: IAccordionItem[]
	children?: React.ReactNode
	defaultExpanded?: number
}

export interface AccordionItemProps
	extends DefaultProps,
		React.HTMLAttributes<HTMLDivElement> {
	open?: boolean
	title: string
	onToggle?: () => void
}
