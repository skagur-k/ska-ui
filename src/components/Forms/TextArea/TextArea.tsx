import classNames from 'classnames'
import { useFocusRing } from 'react-aria'
import { useTextAreaClass } from './styles'
import { TextAreaProps } from './TextArea.types'

const TextArea = (props: TextAreaProps) => {
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

	const { focusProps, isFocused } = useFocusRing()
	const textAreaClasses = useTextAreaClass({
		disabled,
		error,
		resize,
		isFocused,
	})
	return (
		<textarea
			className={classNames(textAreaClasses, className)}
			placeholder={placeholder}
			defaultValue={defaultText}
			disabled={disabled}
			rows={rows}
			{...rest}
			{...focusProps}
		/>
	)
}

export default TextArea
