import React from 'react'

interface TextProps extends DefaultProps {
	size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
	weight?: 'thin' | 'light' | 'normal' | 'semibold' | 'bold' | 'black'
	transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'normal'
	align?: 'left' | 'center' | 'right'
	truncate?: number | boolean
	wrap?: boolean
	color?: string
	as?: React.ElementType
}

interface InlineCodeProps extends DefaultProps {}
interface CodeBlockProps extends DefaultProps {}

type Text = JSX.Element

export { Text, TextProps, InlineCodeProps, CodeBlockProps }
