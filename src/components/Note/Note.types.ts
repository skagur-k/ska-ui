interface NoteProps extends DefaultProps {
	label?: boolean | string
	action?: string
	type?: 'success' | 'warning' | 'error' | 'secondary'
	size?: 'sm' | 'md' | 'lg'
	filled?: boolean
	contrast?: boolean
}

type Note = JSX.Element

export { Note, NoteProps }
