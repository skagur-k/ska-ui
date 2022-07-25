import React from 'react'
import InternalCheckbox from './Checkbox'
import { CheckboxProps } from './Checkbox.types'
import CheckboxGroup from './CheckboxGroup'

interface Checkbox extends React.ForwardRefExoticComponent<CheckboxProps> {
	Group: typeof CheckboxGroup
}

const Checkbox = InternalCheckbox as Checkbox

Checkbox.Group = CheckboxGroup

export { Checkbox, CheckboxGroup }
