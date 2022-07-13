import React, { forwardRef, useState } from 'react'
import { InputProps } from './Input.types'
import classNames from 'classnames'
import { useFocusRing, useTextField } from 'react-aria'
import { mergeRefs } from 'react-merge-refs'
import { useInputClass } from './styles'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const Input = forwardRef<HTMLElement, InputProps>((props: InputProps, ref) => {
	const {
		size,
		description,
		errorMessage,
		label,
		disabled,
		readOnly,
		outline,
		color,
		onChange,
		invalid,
		value,
		required,
		as: Comp = 'input',
		'aria-label': ariaLabel = label,
		type = 'text',
		className,
		prefix,
		suffix,
		unstyled,
		...rest
	} = props

	const ariaInputProps = {
		'aria-label': label,
		'aria-disabled': disabled,
		'aria-invalid': invalid,
		'aria-required': required,
		'aria-placeholder': rest.placeholder,
	}
	const _ref = React.useRef(null)
	const { labelProps, inputProps, descriptionProps, errorMessageProps } =
		useTextField(props, _ref)

	const inputClasses = useInputClass({
		size,
		disabled,
		required,
		outline,
		readOnly,
		unstyled,
		invalid,
	})

	const { focusProps, isFocused } = useFocusRing()

	return (
		<div className={classNames(inputClasses, className)}>
			<label {...labelProps} className='form-input-label'>
				{label}
			</label>
			<div
				className={classNames('form-input-wrapper', [
					isFocused && 'form-input-focused',
				])}>
				{prefix && <div className='form-input-prefix'>{prefix}</div>}
				<Comp
					{...inputProps}
					{...ariaInputProps}
					{...focusProps}
					readOnly={readOnly}
					invalid={invalid}
					disabled={disabled}
					required={required}
					data-color={color}
					type={type}
					value={value}
					className={classNames('form-input-field', [
						prefix && 'form-input-field-with-prefix',
						suffix && 'form-input-field-with-suffix',
					])}
					{...rest}
					ref={mergeRefs([ref, _ref])}
				/>
				{suffix && <div className='form-input-suffix'>{suffix}</div>}
			</div>
			{errorMessage && (
				<div
					{...errorMessageProps}
					className='form-input-errormessage flex items-center'>
					<AiOutlineExclamationCircle className='fill-red-500 mr-1 w-4 h-4' />
					{errorMessage}
				</div>
			)}
			{description && !errorMessage && (
				<div {...descriptionProps} className='form-input-description'>
					{description}
				</div>
			)}
		</div>
	)
})

Input.displayName = 'Input'

export default Input
