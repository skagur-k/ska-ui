import classNames from 'classnames'
import { BiCopy } from 'react-icons/bi'
import { Snippet, SnippetProps } from './Snippet.types'
import { useSnippetClass } from './styles'

const Snippet = ({
	prompt = true,
	width = '100%',
	text,
	dark,
	className,
}: SnippetProps): Snippet => {
	const copyText = text.reduce((current, t) => current + '\n' + t)
	function copyToClipboard() {
		navigator.clipboard.writeText(copyText)
	}

	const snippetClasses = useSnippetClass({ width, dark })
	return (
		<div className={classNames(snippetClasses, className)}>
			{text?.map((text, index) => (
				<pre key={index}>
					{prompt && <span className='snippet-prompt'>$</span>}
					<span className='snippet-text'>{text}</span>
				</pre>
			))}
			<BiCopy className='snippet-copy' onClick={copyToClipboard} />
		</div>
	)
}

export default Snippet
