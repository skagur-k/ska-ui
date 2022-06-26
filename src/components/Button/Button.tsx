import React from 'react'
import style from './Button.module.css'
import clx from 'classnames'

export interface ButtonProps {
	label: string
	children: React.ReactNode
}

const Button = (props: ButtonProps) => {
	return <button className={clx(style.red)}>{props.children}</button>
}

export default Button
