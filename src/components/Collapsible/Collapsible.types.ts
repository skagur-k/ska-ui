import React from 'react'

interface CollapsibleProps
	extends DefaultProps,
		React.HTMLAttributes<HTMLDivElement> {
	open?: boolean
	title: string
	onToggle?: () => void
}

export { CollapsibleProps }
