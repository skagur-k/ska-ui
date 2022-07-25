import classNames from 'classnames'
import { SnippetProps } from './Snippet.types'

interface snippetClassProps {
	width?: string
	dark?: boolean
}

function useSnippetClass(props: snippetClassProps) {
	const { width, dark } = props
	const classes = classNames('snippet', [
		dark && 'snippet-dark',
		width && `min-w-[${width}]`,
	])

	return classes
}

export { useSnippetClass }
