import { useContext } from 'react'
import { ToastContext } from './ToastProvider'

export default function useToast() {
	return useContext(ToastContext)
}
