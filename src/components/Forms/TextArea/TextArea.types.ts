import React from 'react'

interface TextAreaNativeProps
	extends React.HTMLAttributes<HTMLTextAreaElement> {}

interface ITextAreaProps extends DefaultProps {
	placeholder?: string
	defaultText?: string
	error?: boolean
	disabled?: boolean
	resize?: 'none' | 'x' | 'y' | 'both'
	rows?: number
}

interface TextAreaProps extends ITextAreaProps, TextAreaNativeProps {}

type TextArea = JSX.Element

export { TextArea, TextAreaProps }
