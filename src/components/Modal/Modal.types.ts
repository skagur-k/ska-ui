import { AriaDialogProps } from '@react-types/dialog'
import { OverlayProps } from '@react-aria/overlays'
import React from 'react'

interface ModalProps extends AriaDialogProps, OverlayProps {
	children: React.ReactNode
	title: string
	subtitle?: string
	confirmLabel: string
	onConfirm?: () => void
}

export { ModalProps }
