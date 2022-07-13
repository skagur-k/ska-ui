import React, { createContext, useState } from 'react'
import { nanoid } from 'utils'

type ToastType = 'success' | 'error' | 'warning'

export interface IToast {
	height: number
	key: string
	text: string
	preserve?: boolean
	type?: ToastType
	action?: string
	cancelAction?: string
}

export interface IToastContext {
	current?: {
		messages: IToast[]
		message: (message: Partial<IToast> | string) => void
		success: (message: Partial<IToast> | string) => void
		error: (message: Partial<IToast> | string) => void
		removeToast: (key: string) => void
	}
}

const throwerFn = () => {
	throw new Error('Missing a ToastProvider')
}

export const ToastContext = createContext<IToastContext>({
	current: {
		messages: [],
		message: throwerFn,
		success: throwerFn,
		error: throwerFn,
		removeToast: throwerFn,
	},
})

const ToastProvider = ({ children }: any) => {
	const [messages, setMessages] = useState<IToast[]>([])

	const message = (toast: Partial<IToast> | string) => {
		let text: IToast['text'],
			preserve: IToast['preserve'],
			action: IToast['action'],
			cancelAction: IToast['cancelAction']

		if (typeof toast === 'string') {
			text = toast
		} else {
			text = toast.text!
			preserve = toast.preserve
			action = toast.action
			cancelAction = toast.action
		}
		setMessages((prev) => [
			...prev,
			{
				text,
				preserve,
				height: action || cancelAction ? 72 : 64,
				key: nanoid(8),
				action,
				cancelAction,
			},
		])
	}

	const success = (toast: Partial<IToast> | string) => {
		let text: IToast['text'],
			preserve: IToast['preserve'],
			action: IToast['action'],
			cancelAction: IToast['cancelAction']

		if (typeof toast === 'string') {
			text = toast
		} else {
			text = toast.text!
			preserve = toast.preserve
			action = toast.action
			cancelAction = toast.action
		}
		setMessages((prev) => [
			...prev,
			{
				text,
				preserve,
				height: action || cancelAction ? 72 : 64,
				key: nanoid(8),
				action,
				cancelAction,
				type: 'success',
			},
		])
	}

	const error = (toast: Partial<IToast> | string) => {
		let text: IToast['text'],
			preserve: IToast['preserve'],
			action: IToast['action'],
			cancelAction: IToast['cancelAction']

		if (typeof toast === 'string') {
			text = toast
		} else {
			text = toast.text!
			preserve = toast.preserve
			action = toast.action
			cancelAction = toast.action
		}
		setMessages((prev) => [
			...prev,
			{
				text,
				preserve,
				height: action || cancelAction ? 72 : 64,
				key: nanoid(8),
				action,
				cancelAction,
				type: 'error',
			},
		])
	}

	const removeToast = (key: string) => {
		setMessages((prev) => prev.filter((p) => p.key !== key))
	}
	return (
		<ToastContext.Provider
			value={{
				current: {
					messages,
					message,
					success,
					error,
					removeToast,
				},
			}}>
			{children}
		</ToastContext.Provider>
	)
}

export default ToastProvider
