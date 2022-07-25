import classNames from 'classnames'
import { Button } from '../Button'
import { NoteProps } from './Note.types'
import { useNoteClass } from './styles'

const Note = (props: NoteProps) => {
	const {
		label = 'Note',
		size = 'md',
		action,
		type,
		filled,
		contrast,
		children,
		className,
		...rest
	} = props

	const noteClasses = useNoteClass({ size, type, filled, contrast })
	return (
		<div className={classNames(noteClasses, className)} {...rest}>
			<div className='note-text'>
				{label != false && typeof label === 'string' && (
					<span className='note-label py-3'>{label}:</span>
				)}
				{children}
			</div>
			{action && <Button size='sm'>Action</Button>}
		</div>
	)
}

export default Note
