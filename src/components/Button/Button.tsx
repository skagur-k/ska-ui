import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
	label: string
}

const Button = (props: ButtonProps) => {
	return <button className={styles.red}>{props.label}</button>
}

export default Button
