import React from 'react'

interface TreeViewProps {}

export interface BaseProps {
	name: string
}

export interface FolderProps extends BaseProps {
	children?: React.ReactNode
	open?: boolean
	defaultOpen?: boolean
	onToggle?: () => void
}

export interface FileProps extends BaseProps {
	active?: boolean
	type?: 'lambda'
}

export { TreeViewProps }
