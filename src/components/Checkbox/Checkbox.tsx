import { mergeRefs } from 'react-merge-refs'
import React, { forwardRef, PropsWithChildren, useRef } from 'react'
import { CheckboxProps } from './Checkbox.types'
import { useCheckbox, useFocusRing } from 'react-aria'
import { useToggleState } from '@react-stately/toggle'
import { useCheckboxClass, useCheckboxLabelClass } from './styles'
import classNames from 'classnames'

const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
	(props, extRef: React.Ref<HTMLInputElement | null>) => {
		const {
			size,
			color,
			value,
			rounded,
			invalid,
			readOnly,
			required,
			disabled,
			defaultChecked,
			isIndeterminate,
			checked,
			onChange,
			className,
			children,
			...rest
		} = props

		const ref = useRef<HTMLInputElement>(null)
		const state = useToggleState(props)
		const { inputProps } = useCheckbox(props, state, ref)
		const { focusProps, isFocusVisible } = useFocusRing()

		const checkboxClasses = useCheckboxClass({
			isSelected: state.isSelected,
			disabled,
			isFocusVisible,
			size,
			rounded,
		})

		const checkboxLabelClasses = useCheckboxLabelClass({ size })
		return (
			<label
				className={classNames(
					'checkbox-wrapper group',
					'inline-flex items-center',
					disabled && 'cursor-not-allowed',
					readOnly || disabled ? 'opacity-60' : 'opacity-100'
				)}>
				<input
					{...inputProps}
					{...focusProps}
					type='checkbox'
					value={value}
					data-isSelected={state.isSelected ? state.isSelected : null}
					readOnly={readOnly}
					aria-readonly={readOnly}
					disabled={disabled}
					aria-disabled={disabled}
					data-disabled={disabled}
					defaultChecked={readOnly ? undefined : defaultChecked}
					checked={
						readOnly
							? checked
							: defaultChecked
							? undefined
							: checked
					}
					aria-checked={isIndeterminate ? 'mixed' : checked}
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
				<span className={classNames(checkboxLabelClasses)}>
					{children}
				</span>
			</label>
		)
	}
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
