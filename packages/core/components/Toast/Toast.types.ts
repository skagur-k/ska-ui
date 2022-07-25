type ToastTypes = 'info' | 'success' | 'warning' | 'error'
import { DefaultProps, TOAST_POSITION } from '../../types'

export interface ToastProps extends DefaultProps {
	id?: string
	type?: ToastTypes
	onClose?: () => void
	message?: string
	action?: string
	cancelAction?: string
}

export interface ToastManagerProps {
	autoClose?: boolean
	autoCloseTime?: number
	position?: TOAST_POSITION
	maxToasts?: number
}

export interface ToastManagerHandle {
	addMessage: (toast: ToastProps) => void
}
