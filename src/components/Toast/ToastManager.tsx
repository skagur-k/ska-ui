import { useToast } from '../../hooks'
import ReactDOM from 'react-dom'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { Toast } from './Toast'
import { nanoid } from '../../utils'
import { Badge } from '../Badge'

export const ToastManager = forwardRef<ToastManagerHandle, ToastManager>(
	(
		{
			autoClose = false,
			autoCloseTime = 4000,
			position = 'TOP_RIGHT',
			maxToasts = 3,
		}: ToastManager,
		ref
	) => {
		const [toasts, setToasts] = useState<Toast[]>([])
		const { loaded, portalId } = useToast({ position })
		const portal = document.getElementById(portalId) as HTMLElement
		const removeToast = (id: Toast['id']) => {
			setToasts(toasts.filter((t) => t.id !== id))
		}

		const addMessage = (toast: Toast) => {
			setToasts([...toasts, { ...toast, id: `toast-${nanoid(8)}` }])
		}

		useImperativeHandle(ref, () => ({
			addMessage,
		}))

		return loaded && toasts.length !== 0 ? (
			ReactDOM.createPortal(
				<div className='flex flex-col items-end'>
					{toasts.length > maxToasts + 1 && (
						<Badge className='mb-2'>
							+{toasts.length - maxToasts - 1}
						</Badge>
					)}
					<div className='toast-container'>
						{toasts.slice(-4).map((toast) => (
							<Toast
								key={toast.id}
								id={toast.id}
								type={toast.type}
								message={toast.message}
								action={toast.action}
								cancelAction={toast.cancelAction}
								onClose={() => removeToast(toast.id)}
							/>
						))}
					</div>
				</div>,
				portal
			)
		) : (
			<></>
		)
	}
)
