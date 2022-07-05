import React from 'react'
import InternalButton from './Button'
import { ButtonProps } from './Button.types'
import ButtonGroup from './ButtonGroup'

interface Button extends React.ForwardRefExoticComponent<ButtonProps> {
	Group: typeof ButtonGroup
}

const Button = InternalButton as Button

Button.Group = ButtonGroup

export { Button, ButtonGroup }
