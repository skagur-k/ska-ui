import { mergeRefs } from 'react-merge-refs'
import React, { forwardRef, PropsWithChildren, useEffect, useRef } from 'react'
import { CheckboxProps } from './Checkbox.types'
import { useCheckbox, useFocusRing } from 'react-aria'
import { useToggleState } from '@react-stately/toggle'
import { useCheckboxClass, useCheckboxLabelClass } from './styles'
import classNames from 'classnames'

const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
	(props, extRef: React.Ref<HTMLInputElement>) => {
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

		const ref = useRef<HTMLInputElement>(null)
		const state = useToggleState({
			name,
			value,
			isReadOnly: readOnly,
			isRequired: required,
			isSelected: selected,
			defaultSelected,
			children,
			onChange,
			...rest,
		})
		const { inputProps } = useCheckbox(props, state, ref)
		const { focusProps, isFocused } = useFocusRing()

		const checkboxClasses = useCheckboxClass({
			isSelected: state.isSelected,
			disabled,
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
	}
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
