import React from 'react'
import style from './Button.module.css'
import classNames from 'classnames'

export interface ButtonProps {
	label: string
	children: React.ReactNode
}

const Button = (props: ButtonProps) => {
	return <button className={classNames(style.red)}>{props.children}</button>
}

export default Button
