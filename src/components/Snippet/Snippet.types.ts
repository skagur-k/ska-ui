interface SnippetProps extends DefaultProps {
	width?: string
	prompt?: boolean
	text?: string[]
	dark?: boolean
}

type Snippet = JSX.Element

export { Snippet, SnippetProps }
