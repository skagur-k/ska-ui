import React from 'react'
import { DefaultProps } from '../../types'

interface CollapsibleProps
	extends DefaultProps,
		React.HTMLAttributes<HTMLDivElement> {
	open?: boolean
	title: string
	onToggle?: () => void
}

export { CollapsibleProps }
