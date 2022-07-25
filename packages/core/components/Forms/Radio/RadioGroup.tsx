import classNames from 'classnames'
import { RadioGroupProps } from './Radio.types'
import { useRadioGroupClass } from './style'

import { useRadioGroup } from 'react-aria'
import { useRadioGroupState } from '@react-stately/radio'
import React from 'react'

import { RadioGroupState } from '@react-stately/radio'
import { getValidChildren } from '../../../utils'

const RadioContext = React.createContext<RadioGroupState>({} as RadioGroupState)

const RadioGroup = (props: RadioGroupProps) => {
	const {
		label,
		disabled,
		description,
		rounded,
		row,
		className,
		children,
		...rest
	} = props
	const state = useRadioGroupState(props)
	const { radioGroupProps, labelProps } = useRadioGroup(props, state)

	const radioGroupClasses = classNames(useRadioGroupClass({ row }), className)

	const validChildren = getValidChildren(children)

	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			disabled: child.props.disabled || disabled,
			rounded: child.props.rounded || rounded,
		})
	})

	return (
		<div {...radioGroupProps} className={radioGroupClasses} {...rest}>
			{label && (
				<div className='radio-group-label' {...labelProps}>
					{label}
				</div>
			)}

			<RadioContext.Provider value={state}>
				<div className='radio-group-radios'>{copies}</div>
			</RadioContext.Provider>
		</div>
	)
}

export { RadioGroup, RadioContext }
