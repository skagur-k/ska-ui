import classNames from 'classnames'
import { SnippetProps } from './Snippet.types'

interface snippetClassProps extends SnippetProps {}

function useSnippetClass(props: snippetClassProps) {
	const { width, dark } = props
	const classes = classNames('snippet', [
		dark && 'snippet-dark',
		width && `w-[${width}]`,
	])

	return classes
}

export { useSnippetClass }
