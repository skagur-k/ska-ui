import React from 'react'
import { forwardRef, useState, useRef, useContext } from 'react'

import style from './Button.module.css'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { DisabledContext } from '../../contexts/DisabledContext'
import { ButtonOwnProps } from './Button.types'
import { mergeRefs } from '@react-aria/utils'
import classNames from 'classnames'

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
			<button
				{...buttonProps}
				{...hoverProps}
				{...props}
				ref={ref}
				className={classNames(`px-4 ${isHovered ? 'bg-sky-500' : 'bg-amber-200'} ${isPressed ? 'bg-red-500' : ''}`, className)}>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'
export default Button
