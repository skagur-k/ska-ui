import classNames from 'classnames'
import { TextAreaProps } from './TextArea.types'

interface TextAreaClassProps extends TextAreaProps {}

function useTextAreaClass(props: TextAreaClassProps) {
	const { disabled, error, resize } = props

	const resizes = {
		none: 'resize-none',
		x: 'resize-x',
		y: 'resize-y',
		both: 'resize',
	}

	const classes = classNames('text-area', [resize && resizes[resize]], disabled && 'text-area-disabled', error && 'text-area-error')

	return classes
}

export { useTextAreaClass }
