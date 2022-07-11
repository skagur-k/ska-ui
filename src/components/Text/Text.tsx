import classNames from 'classnames'
import { useTextClass } from './styles'
import { CodeBlockProps, InlineCodeProps, Text, TextProps } from './Text.types'

const Text = ({
	size,
	weight,
	transform,
	truncate,
	align,
	as: Comp = 'p',
	children,
	className,
	...rest
}: TextProps): Text => {
	const textClasses = useTextClass({
		size,
		weight,
		transform,
		truncate,
		align,
	})
	return (
		<Comp className={classNames(textClasses, className)} {...rest}>
			{children}
		</Comp>
	)
}

export const InlineCode = (props: InlineCodeProps) => {
	const { children, className, ...rest } = props

	const inlineCodeClasses = classNames(
		'bg-neutral-600 text-neutral-100 px-1',
		className
	)
	return (
		<code {...rest} className={inlineCodeClasses}>
			{children}
		</code>
	)
}

export const CodeBlock = (props: CodeBlockProps) => {
	const { children, className, ...rest } = props

	const codeBlockClasses = classNames('block whitespace-pre-wrap', className)
	return (
		<pre {...rest} className={codeBlockClasses}>
			{children}
		</pre>
	)
}

export default Text
