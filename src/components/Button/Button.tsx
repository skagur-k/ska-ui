import React, { PropsWithChildren } from 'react'
import { forwardRef, useState, useRef, useContext } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { DisabledContext } from '../../contexts/DisabledContext'
import { ButtonProps } from './Button.types'
import classNames from 'classnames'
import { mergeRefs } from 'react-merge-refs'
import StyledButton from './Button.styled'

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
	(btnProps: ButtonProps, extRef: React.Ref<HTMLButtonElement | null>) => {
		const {
			size,
			icon,
			iconRight,
			type,
			shape,
			variant,
			className,
			children,
			disabled,
			loading,
			onClick,
			...rest
		} = btnProps
		const buttonRef = useRef<HTMLButtonElement>(null)
		const ctxDisabled = useContext(DisabledContext)
		const isDisabled = disabled ?? ctxDisabled

		const [isFocused, setFocused] = useState(false)
		const { hoverProps, isHovered } = useHover({ isDisabled: false })
		const { buttonProps, isPressed } = useButton(
			{
				type: 'submit',
				isDisabled: isDisabled || loading,
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
					return e
				},
				onPressStart: (e) => {
					if (e.pointerType === 'mouse') {
						setFocused(false)
						onClick?.(e as any)
					}
					return e
				},
			},
			buttonRef
		)

		return (
			<StyledButton
				ref={mergeRefs([buttonRef, extRef])}
				{...buttonProps}
				{...hoverProps}
				disabled={disabled}
				data-focus={isFocused ? '' : null}
				data-active={isPressed ? '' : null}
				data-hover={isHovered ? '' : null}
				className={classNames([])}
				{...rest}>
				<div>{children}</div>
			</StyledButton>
		)
	}
)

Button.displayName = 'Button'
export default Button
