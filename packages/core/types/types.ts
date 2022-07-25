export interface DefaultProps {
	className?: string
	children?: React.ReactNode
}

export type tTOAST_POSITION = {
	[key: string]: string
}

export type TOAST_POSITION =
	| 'TOP_RIGHT'
	| 'TOP_LEFT'
	| 'BOTTOM_RIGHT'
	| 'BOTTOM_LEFT'
