import React, { PropsWithChildren } from 'react'
import { forwardRef, useState, useRef, useContext } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { DisabledContext } from '../../contexts/DisabledContext'
import { ButtonProps } from './Button.types'
import classNames from 'classnames'
import { mergeRefs } from 'react-merge-refs'
import { BeatLoader } from 'react-spinners'
import { useButtonClass } from './styles'

const Button: React.ComponentType<ButtonProps> = forwardRef<
	HTMLButtonElement,
	PropsWithChildren<ButtonProps>
>((btnProps: ButtonProps, extRef: React.Ref<HTMLButtonElement | null>) => {
	const {
		size,
		rounded,
		variant = 'solid',
		type,
		block,
		color,
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

	const classes = useButtonClass({
		variant,
		size,
		type,
		disabled,
		loading,
		rounded,
	})

	return (
		<button
			{...buttonProps}
			{...hoverProps}
			data-focus={isFocused ? '' : null}
			data-active={isPressed ? '' : null}
			data-hover={isHovered ? '' : null}
			data-loading={loading ? '' : null}
			data-color={color}
			className={classNames(
				[classes, !!icon ? (!!children ? '' : 'icononly') : ''],
				className
			)}
			{...rest}
			ref={mergeRefs([buttonRef, extRef])}>
			{loading && (
				<span>
					{
						<div
							className={`btn-spinner ${
								loading ? 'opacity-100' : 'opacity-0'
							}`}></div>
					}
				</span>
			)}
			<span
				className={`btn-content ${
					loading ? 'opacity-0' : 'opacity-100'
				}`}>
				{icon && <span className={classNames('btn-icon')}>{icon}</span>}
				{children}
			</span>
			{notification && <div className='btn-notification' />}
		</button>
	)
})

Button.displayName = 'Button'
export default Button
