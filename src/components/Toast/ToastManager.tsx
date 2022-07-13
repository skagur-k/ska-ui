import { useToast } from '../../hooks'
import ReactDOM from 'react-dom'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Toast } from './Toast'
import { nanoid } from '../../utils'

export const ToastManager = forwardRef<ToastManagerHandle, ToastManager>(
	(
		{ autoClose, autoCloseTime, position = 'TOP_RIGHT' }: ToastManager,
		ref
	) => {
		const [toasts, setToasts] = useState<Toast[]>([
			{
				id: nanoid(8),
				mode: 'success',
				message: 'Success Message',
			},
			{
				id: nanoid(8),
				mode: 'info',
				message: 'Info Message',
			},
			{
				id: nanoid(8),
				mode: 'warning',
				message: 'Warning Message',
			},
			{
				id: nanoid(8),
				mode: 'error',
				message: 'Error Message',
			},
		])
		const { loaded, portalId } = useToast({ position })
		const portal = document.getElementById(portalId) as HTMLElement
		console.log(portalId)

		const removeToast = (id: Toast['id']) => {
			setToasts(toasts.filter((t) => t.id !== id))
		}

		const addMessage = (toast: Toast) => {
			setToasts([...toasts, { ...toast, id: `toast-${nanoid(8)}` }])
		}

		useImperativeHandle(ref, () => ({
			addMessage,
		}))

		return loaded ? (
			ReactDOM.createPortal(
				<div className='toast-container'>
					{toasts.map((toast) => (
						<Toast
							onClose={() => removeToast(toast.id)}
							key={toast.id}
							id={toast.id}
							mode={toast.mode}
							message={toast.message}
						/>
					))}
				</div>,
				portal
			)
		) : (
			<></>
		)
	}
)
