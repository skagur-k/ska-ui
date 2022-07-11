import classNames from 'classnames'
import { useTextAreaClass } from './styles'
import { TextArea, TextAreaProps } from './TextArea.types'

const TextArea = (props: TextAreaProps): TextArea => {
	const {
		placeholder,
		defaultText,
		disabled = false,
		rows = 5,
		resize = 'none',
		error = false,
		className,
		...rest
	} = props

	const textAreaClasses = useTextAreaClass({ disabled, error, resize })

	return (
		<textarea
			className={classNames(textAreaClasses, className)}
			placeholder={placeholder}
			defaultValue={defaultText}
			disabled={disabled}
			rows={rows}
			{...rest}
		/>
	)
}

export default TextArea
