import React, { PropsWithChildren } from 'react'
import { forwardRef, useState, useRef, useContext } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { DisabledContext } from '../../contexts/DisabledContext'
import { ButtonProps } from './Button.types'
import classNames from 'classnames'
import { mergeRefs } from 'react-merge-refs'
import { BeatLoader } from 'react-spinners'

const Button = ({ color, children, className }: any) => {
	return (
		<div className='flex flex-col gap-4'>
			<button data-color={color} className={className}>
				{children}
				{/* <span className='btn-notification' /> */}
			</button>
		</div>
	)
}

const _Button: React.ComponentType<ButtonProps> = forwardRef<
	HTMLButtonElement,
	PropsWithChildren<ButtonProps>
>((btnProps: ButtonProps, extRef: React.Ref<HTMLButtonElement | null>) => {
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
			warning: '#ab570a',
			error: '#c50000',
		},
		shadow: {
			primary: '#ffffff',
			secondary: '#ffffff',
			success: '#d3e5ff',
			warning: '#ab570d',
			error: '#ffffff',
		},
	}

	const [isFocused, setFocused] = useState(false)
	const { hoverProps, isHovered } = useHover({
		isDisabled: isDisabled || loading,
	})
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
					'button_base',
					{ button: variant !== 'unstyled' },
					{ block: block },
					size && !block && 'size',
					{
						ghost: variant === 'ghost',
						shadow: variant === 'shadow',
					},
					{
						rounded: shape === 'rounded',
						square: shape === 'square',
					},
					type === 'primary' && [
						'primary',
						'geist-themed',
						'geist-primary',
					],
					type === 'secondary' && ['geist-themed', 'geist-secondary'],
					type === 'success' && ['geist-themed', 'geist-success'],
					type === 'warning' && ['geist-themed', 'geist-warning'],
					type === 'alert' && ['geist-themed', 'geist-alert'],
					type === 'error' && ['geist-themed', 'geist-error'],
					!!icon ? (!!children ? 'icon' : 'icononly') : '',
					'btn-solid',
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
						color={
							variant === 'ghost'
								? loaderColor['ghost'][type]
								: loaderColor['shadow'][type]
						}
						className={classNames(
							`${
								loading
									? 'opacity-100 translate-y-0'
									: 'opacity-0 -translate-y-10'
							}`,
							'loader'
						)}
					/>
				</span>
			)}
			{
				<div className={'contentwrapper'}>
					{icon && <span className={classNames('icon')}>{icon}</span>}
					{children && (
						<span
							className={classNames(
								`${
									loading
										? 'opacity-0 translate-y-10'
										: 'opacity-100 translate-y-0'
								}`,
								'content'
							)}>
							{children}
						</span>
					)}
				</div>
			}
			{notification && !isFocused && <span className={'notification'} />}
		</button>
	)
})

Button.displayName = 'Button'
export default Button
