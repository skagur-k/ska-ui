import type { AriaDialogProps } from '@react-types/dialog'
import type { OverlayProps } from '@react-types/overlays'
import React from 'react'

export interface DialogProps extends AriaDialogProps, OverlayProps {
	children: React.ReactNode
	title: string
	confirmLabel: string
}
