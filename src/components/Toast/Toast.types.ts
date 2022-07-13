type ToastTypes = 'info' | 'success' | 'warning' | 'error'
interface Toast extends DefaultProps {
	id?: string
	type?: ToastTypes
	onClose?: () => void
	message?: string
	action?: string
	cancelAction?: string
}

interface ToastManager {
	autoClose?: boolean
	autoCloseTime?: number
	position?: TOAST_POSITION
	maxToasts?: number
}

interface ToastManagerHandle {
	addMessage: (toast: Toast) => void
}
