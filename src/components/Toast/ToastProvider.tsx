import React, { createContext, useState } from 'react'
import { nanoid } from 'utils'
import { IToast, IToastsContext, ToastProviderProps } from './Toast.types'

const throwerFn = () => {
	throw new Error('Missing a ToastProvider')
}

export const ToastContext = createContext<IToastsContext>({
	current: {
		messages: [],
		message: throwerFn,
		error: throwerFn,
		success: throwerFn,
		removeToast: throwerFn,
	},
})

const ToastProvider = ({ children }: ToastProviderProps) => {
	const [messages, setMessages] = useState<IToast[]>([])

	const message = (toast: Partial<IToast> | string) => {
		let text: IToast['text'],
			action: IToast['action'],
			cancelAction: IToast['cancelAction']

		if (typeof toast === 'string') {
			text = toast
		} else {
			text = toast.text!
			action = toast.action
			cancelAction = toast.cancelAction
		}

		setMessages((prev) => [
			...prev,
			{
				text,
				height: action || cancelAction ? 72 : 64,
				key: nanoid(8),
				action,
				cancelAction,
			},
		])
	}

	const removeToast = (key: string) => {
		setMessages((prev) => prev.filter((p) => p.key !== key))
	}

	return (
		<ToastContext.Provider
			value={{ current: { messages, message, removeToast } }}>
			{children}
		</ToastContext.Provider>
	)
}

export default ToastProvider
