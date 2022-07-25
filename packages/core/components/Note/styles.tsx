import classNames from 'classnames'
import { NoteProps } from './Note.types'

interface NoteClassProps extends Partial<NoteProps> {}

export function useNoteClass(props: NoteClassProps) {
	const { size, type, filled, contrast } = props

	const sizes = {
		sm: 'note-sm',
		md: 'note-md',
		lg: 'note-lg',
	}

	const types = {
		success: 'note-success',
		warning: 'note-warning',
		error: 'note-error',
		secondary: 'note-secondary',
	}

	const classes = classNames('note', [
		size && sizes[size],
		type && types[type],
		filled && 'note-filled',
		contrast && 'note-contrast',
	])
	return classes
}
