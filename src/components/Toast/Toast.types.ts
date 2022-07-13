interface Toast extends DefaultProps {
	id: string
	mode?: 'info' | 'success' | 'warning' | 'error'
	onClose?: () => void
	message?: string
	show?: boolean
	duration?: number
}

interface ToastManager {
	autoClose?: boolean
	autoCloseTime?: number
	position?: TOAST_POSITION
}

interface ToastManagerHandle {
	addMessage: (toast: Toast) => void
}
