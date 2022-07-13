import React, { useRef, useState } from 'react'
import {} from 'react'
import classNames from 'classnames'

import type { IToast } from './ToastProvider'
import { useEffect } from '@storybook/addons'

interface ToastProps extends IToast {
	height: number
	heights?: number[]
	hovering: boolean
	onMount?: () => void
	position?: number
	preserve?: boolean
	remove?: () => void
	text: string
	id: string
}
type ToastContainerType = React.ComponentType<ToastProps>

const ToastContainer: ToastContainerType = ({
	text,
	position,
	height,
	heights,
	onMount,
	remove,
	preserve,
	type,
	action,
	cancelAction,
	hovering,
	...props
}: ToastProps) => {
	const [hiding] = useState(false)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		setTimeout(() => setVisible(true), 0)
	}, [])

	useEffect(() => {
		setTimeout(() => onMount?.(), 0)
	}, [onMount])

	useEffect(() => {
		let id: NodeJS.Timeout

		if (!preserve && !hovering) {
			id = setTimeout(() => remove, 4000)
		}

		return () => {
			clearTimeout(id)
		}
	}, [hovering, preserve])

	const heightRef= useRef(height)

	useEffect(()=> {
		if(heights && position) {
			heights?[position] = heightRef.current 
			}
	})

	return <div></div>
}
