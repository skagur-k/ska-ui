import React, { PropsWithChildren } from 'react'
import { forwardRef, useState, useRef, useContext } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { DisabledContext } from '../../contexts/DisabledContext'
import { ButtonProps } from './Button.types'
import classNames from 'classnames'
import { mergeRefs } from 'react-merge-refs'
import styles from './Button.module.css'

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
	(btnProps: ButtonProps, extRef: React.Ref<HTMLButtonElement | null>) => {
		const {
			size,
			shape,
			variant,
			type,
			icon,
			iconRight,
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
		const { hoverProps, isHovered } = useHover({ isDisabled: isDisabled || loading })
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
			<button
				{...buttonProps}
				{...hoverProps}
				data-focus={isFocused ? '' : null}
				data-active={isPressed ? '' : null}
				data-hover={isHovered ? '' : null}
				className={classNames([
					styles.base,
					{ [styles.button]: variant !== 'unstyled' },
					{
						[styles.solid]: variant === 'solid',
						[styles.ghost]: variant === 'ghost',
						[styles.shadow]: variant === 'shadow',
					},
					{
						[styles.shape]: !!shape,
						[styles.rounded]: shape === 'rounded',
						[styles.square]: shape === 'square',
					},
					{
						[styles.secondary]: type === 'secondary',
					},
					size && [styles[size]],
					type === 'success' && ['geist-themed', 'geist-success', 'geist-success-fill'],
					type === 'warning' && ['geist-themed', 'geist-warning', 'geist-warning-fill'],
					type === 'alert' && ['geist-themed', 'geist-alert', 'geist-alert-fill'],
					type === 'error' && ['geist-themed', 'geist-error', 'geist-error-fill'],
					className,
				])}
				ref={mergeRefs([buttonRef, extRef])}
				{...rest}>
				<span className={classNames([styles.content])}>{children}</span>
			</button>
		)
	}
)

Button.displayName = 'Button'
export default Button
