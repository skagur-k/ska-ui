import { mergeRefs } from 'react-merge-refs'
import React, { forwardRef, PropsWithChildren, useRef } from 'react'
import { CheckboxProps } from './Checkbox.types'
import { useCheckbox } from 'react-aria'
import { useToggleState } from '@react-stately/toggle'
import { useCheckboxClass, useCheckboxLabelClass } from './styles'
import classNames from 'classnames'

const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
	(props, extRef: React.Ref<HTMLInputElement | null>) => {
		const {
			size,
			color,
			value,
			invalid,
			readOnly,
			required,
			disabled,
			defaultChecked,
			checked,
			onChange,
			className,
			children,
			...rest
		} = props

		const ref = useRef<HTMLInputElement>(null)
		const state = useToggleState(props)
		const { inputProps } = useCheckbox(props, state, ref)

		const checkboxClasses = useCheckboxClass({
			size,
			disabled,
		})

		const checkboxLabelClasses = useCheckboxLabelClass({ size })

		return (
			<label
				className={classNames(
					'checkbox-wrapper',
					'inline-flex items-center',
					disabled && 'cursor-not-allowed',
					readOnly || disabled ? 'opacity-60' : 'opacity-100'
				)}>
				<input
					{...inputProps}
					data-color={color ? color : undefined}
					readOnly={readOnly}
					type='checkbox'
					value={value}
					disabled={disabled}
					onChange={readOnly ? undefined : onChange}
					defaultChecked={readOnly ? undefined : defaultChecked}
					checked={
						readOnly
							? checked
							: defaultChecked
							? undefined
							: checked
					}
					className={classNames(checkboxClasses, className)}
					ref={mergeRefs([ref, extRef])}
					{...rest}
				/>
				{children && (
					<span className={classNames(checkboxLabelClasses)}>
						{children}
					</span>
				)}
			</label>
		)
	}
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
