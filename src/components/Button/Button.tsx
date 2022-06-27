import React from 'react'
import { forwardRef, useState, useRef, useContext } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { DisabledContext } from '../../contexts/DisabledContext'
import { ButtonOwnProps } from './Button.types'
import classNames from 'classnames'
import StyledButton from './Button.styled'

const Button = forwardRef(
	({ size, suffix, prefix, align, type, shape, variant, className, children, disabled, loading, onClick, ...props }: ButtonOwnProps, extRef) => {
		const ref = useRef<HTMLButtonElement>(null)
		const ctxDisabled = useContext(DisabledContext)
		const isDisabled = disabled ?? ctxDisabled
		const [isFocused, setFocused] = useState(false)

		const { buttonProps, isPressed } = useButton(
			{
				type: 'submit',
				onFocusChange: setFocused,
				onKeyDown: (e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						onClick?.(e as any)
						setFocused(true)
					}
					return e
				},
				onPressEnd: (e) => {
					if (e.pointerType === 'touch') {
						onClick?.(e as any)
					}
				},
			},
			ref
		)
		const { hoverProps, isHovered } = useHover({ isDisabled: false })

		return (
			<StyledButton
				$isHovered={isHovered}
				$isPressed={isPressed}
				$isDisabled={isDisabled}
				$isFocused={isFocused}
				ref={ref}
				{...buttonProps}
				{...hoverProps}
				{...props}
				size={size}
				variant={variant}
				type={type}
				shape={shape}
				disabled={disabled}
				prefix={prefix}
				onClick={onClick}
				className={classNames(className)}>
				{prefix && <div>{loading ? <span>Loading</span> : prefix}</div>}
				<div>{children}</div>
			</StyledButton>
		)
	}
)

Button.displayName = 'Button'
export default Button
