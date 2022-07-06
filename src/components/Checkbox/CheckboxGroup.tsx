import React, { forwardRef, useEffect } from 'react'
import { useCheckboxGroup, useCheckboxGroupItem } from '@react-aria/checkbox'
import { useCheckboxGroupState } from '@react-stately/checkbox'
import classNames from 'classnames'
import { useFocusRing } from 'react-aria'
import { mergeRefs } from 'react-merge-refs'
import { useCheckboxClass, useCheckboxLabelClass } from './styles'
import { CheckboxGroupProps, CheckboxProps } from './Checkbox.types'
import { getValidChildren } from '../../utils'

const CheckboxGroupContext = React.createContext<any>(null)

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const { children, label, color, disabled, rounded } = props
	const state = useCheckboxGroupState(props)
	const { groupProps, labelProps } = useCheckboxGroup(props, state)

	const validChildren = getValidChildren(children)
	const copies = validChildren.map((child) => {
		return React.cloneElement(child, {
			color: child.props.color || color,
			disabled: child.props.disabled || disabled,
			rounded: child.props.rounded || rounded,
		})
	})

	useEffect(() => {
		state.setValue(['one', 'four'])
	}, [])

	return (
		<div data-color={color} className='checkbox-group' {...groupProps}>
			<span {...labelProps} className={'checkbox-group-label'}>
				{label}
			</span>
			<CheckboxGroupContext.Provider value={state}>
				<div className='checkbox-group-items'>{copies}</div>
			</CheckboxGroupContext.Provider>
		</div>
	)
}

export const CheckboxGroupItem = forwardRef((props: CheckboxProps, extRef) => {
	const {
		name,
		value,
		defaultSelected,
		selected,
		size,
		color,
		rounded,
		invalid,
		readOnly,
		required,
		disabled,
		indeterminate,
		className,
		children,
		onChange,

		...rest
	} = props

	const state = React.useContext(CheckboxGroupContext)
	const ref = React.useRef(null)
	const { inputProps } = useCheckboxGroupItem(props, state, ref)
	const { focusProps, isFocused } = useFocusRing()

	const isDisabled = state.isDisabled || disabled
	const isSelected = state.isSelected(value)

	const checkboxClasses = useCheckboxClass({
		isSelected,
		disabled: isDisabled,
		isFocused,
		size,
		rounded,
	})

	const checkboxLabelClasses = useCheckboxLabelClass({ size })

	return (
		<label
			className={classNames(
				'group inline-flex items-center',
				disabled && 'cursor-not-allowed',
				readOnly || disabled ? 'opacity-60' : 'opacity-100'
			)}>
			<input
				{...inputProps}
				{...focusProps}
				type='checkbox'
				readOnly={readOnly}
				disabled={disabled}
				aria-readonly={readOnly}
				aria-disabled={disabled}
				className={classNames('sr-only')}
				ref={mergeRefs([ref, extRef])}
				{...rest}
			/>
			<div
				className={checkboxClasses}
				data-color={color ? color : undefined}
				aria-hidden='true'>
				<svg
					className='stroke-current checkbox-check'
					viewBox='0 0 18 18'>
					<polyline
						points='1 9 7 14 15 4'
						fill='none'
						strokeWidth={4}
						strokeDasharray={22}
						strokeDashoffset={state.isSelected ? 44 : 66}
						style={{
							transition: 'all 400ms',
						}}
					/>
				</svg>
			</div>
			<span className={classNames(checkboxLabelClasses, className)}>
				{children}
			</span>
		</label>
	)
})

export default CheckboxGroup
