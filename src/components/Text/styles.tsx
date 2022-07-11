import classNames from 'classnames'
import cx from 'classnames'
import { TextProps } from './Text.types'

interface TextClassProps extends TextProps {}

export enum ElementTypes {
	'div',
	'span',
	'main',
	'article',
	'section',
	'form',
	'figure',
	'label',
	'header',
	'li',
	'a',
	'footer',
	'ul',
}

function useTextClass(props: TextClassProps) {
	const { size, weight, transform, align } = props

	const sizes = {
		xs: 'text-xs',
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
		'4xl': 'text-4xl',
		'5xl': 'text-5xl',
	}

	const weights = {
		thin: 'font-thin',
		light: 'font-light',
		normal: 'font-normal',
		semibold: 'font-semibold',
		bold: 'font-bold',
		black: 'font-black',
	}

	const transformations = {
		uppercase: 'uppercase',
		lowercase: 'lowercase',
		capitalize: 'capitalize',
		normal: 'normal-case',
	}

	const alignments = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	const classes = classNames(
		[
			size && sizes[size],
			weight && weights[weight],
			transform && transformations[transform],
			align && alignments[align],
		],
		'inline-block'
	)

	return classes
}

export { useTextClass }
