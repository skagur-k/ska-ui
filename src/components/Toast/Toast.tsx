import classNames from 'classnames'
import { useToastClass } from './styles'
import { BsXLg } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import useMountTransition from '../../hooks/useMountTransition'
import { Button } from '../Button'
export const Toast = ({
	type = 'info',
	onClose,
	message,
	action,
	cancelAction,
	...rest
}: Toast) => {
	const toastClasses = useToastClass({ type })

	return (
		<div>
			<div className={classNames(toastClasses)} {...rest}>
				<div className='toast-text'>{message}</div>
				<div className='flex gap-2'>
					{cancelAction && (
						<Button onClick={onClose}>{cancelAction}</Button>
					)}
					{action && (
						<Button onClick={onClose} type='secondary'>
							{action}
						</Button>
					)}
				</div>
				{!action && !cancelAction && (
					<BsXLg onClick={onClose} className='toast-x' />
				)}
			</div>
		</div>
	)
}