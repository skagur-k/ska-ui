import React, { PropsWithChildren } from 'react'
import { forwardRef, useState, useRef, useContext } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { DisabledContext } from '../../contexts/DisabledContext'
import { ButtonProps } from './Button.types'
import classNames from 'classnames'
import { mergeRefs } from 'react-merge-refs'
import styles from './Button.module.css'
import { BeatLoader } from 'react-spinners'

const Button: React.ComponentType<ButtonProps> = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
	(btnProps: ButtonProps, extRef: React.Ref<HTMLButtonElement | null>) => {
		const {
			size = 'md',
			shape = 'square',
			variant = 'shadow',
			type = 'primary',
			block,
			focusafterclick = true,
			icon,
			notification,
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

		const loaderColor: any = {
			ghost: {
				primary: '#000000',
				secondary: '#000000',
				success: '#0761d1',
				warning: '#eab308',
				error: '#c50000',
			},
			shadow: {
				primary: '#ffffff',
				secondary: '#ffffff',
				success: '#d3e5ff',
				warning: '#000000',
				error: '#ffffff',
			},
		}

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
					if (e.pointerType === 'mouse') {
						focusafterclick ? '' : e.target.blur()
					}
					return e
				},
				onPressStart: (e) => {
					if (e.pointerType === 'mouse') {
						setFocused(true)
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
				data-loading={loading ? '' : null}
				className={classNames(
					[
						styles.base,
						{ [styles.button]: variant !== 'unstyled' },
						{ [styles.block]: block },
						size && !block && [styles[size]],
						{
							[styles.ghost]: variant === 'ghost',
							[styles.shadow]: variant === 'shadow',
						},
						{
							[styles.rounded]: shape === 'rounded',
							[styles.square]: shape === 'square',
						},
						type === 'primary' && [styles.primary, 'geist-themed', 'geist-primary'],
						type === 'secondary' && ['geist-themed', 'geist-secondary'],
						type === 'success' && ['geist-themed', 'geist-success'],
						type === 'warning' && ['geist-themed', 'geist-warning'],
						type === 'alert' && ['geist-themed', 'geist-alert'],
						type === 'error' && ['geist-themed', 'geist-error'],
						!!icon ? (!!children ? 'icon' : [styles.icononly]) : '',
						,
					],
					className
				)}
				{...rest}
				ref={mergeRefs([buttonRef, extRef])}>
				{loading && children && (
					<span>
						<BeatLoader
							size={5}
							speedMultiplier={0.6}
							color={variant === 'ghost' ? loaderColor['ghost'][type] : loaderColor['shadow'][type]}
							className={classNames(`${loading ? styles.show : styles.hide}`, styles.loader)}
						/>
					</span>
				)}
				{
					<div className={styles.contentwrapper}>
						{icon && <span className={classNames(styles.icon)}>{icon}</span>}
						{children && (
							<span className={classNames(`${loading ? styles.hide : styles.show}`, styles.content)}>
								{children}
							</span>
						)}
					</div>
				}
				{notification && !isFocused && <span className={styles.notification} />}
			</button>
		)
	}
)

Button.displayName = 'Button'
export default Button
