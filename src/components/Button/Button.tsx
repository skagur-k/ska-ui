import React from 'react'

interface ButtonProps {
	label: string
}

const Button = (props: ButtonProps) => {
	return <button className='text-sky-500 font-bold w-40 h-20'>{props.label}</button>
}

export default Button
