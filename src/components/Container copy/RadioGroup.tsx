import classNames from 'classnames'
import { RadioGroup, RadioGroupProps } from './Radio.types'
import { useRadioGroupClass } from './style'

import { useRadioGroup } from 'react-aria'
import { useRadioGroupState } from '@react-stately/radio'
import React from 'react'

import { RadioGroupState } from '@react-stately/radio'

const RadioContext = React.createContext<RadioGroupState>({} as RadioGroupState)

const RadioGroup = (props: RadioGroupProps): RadioGroup => {
	const { label, row, className, children, ...rest } = props
	const state = useRadioGroupState(props)
	const { radioGroupProps, labelProps } = useRadioGroup(props, state)

	const radioGroupClasses = classNames(useRadioGroupClass({ row }), className)

	return (
		<div {...radioGroupProps} className={radioGroupClasses} {...rest}>
			<span className='radio-group-label' {...labelProps}>
				{label}
			</span>
			<RadioContext.Provider value={state}>
				<div className='radio-group-radios'>{children}</div>
			</RadioContext.Provider>
		</div>
	)
}

export { RadioGroup, RadioContext }
