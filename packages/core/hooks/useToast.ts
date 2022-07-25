import { useEffect, useState } from 'react'
import { TOAST_POSITION, tTOAST_POSITION } from '../types'
import { nanoid } from '../utils'
import { UseToastProps } from './types'

const useToast = ({ position = 'TOP_RIGHT' }: UseToastProps) => {
	const [loaded, setLoaded] = useState(false)
	const [portalId] = useState(`toast-portal-${nanoid(8)}`)

	const positions: tTOAST_POSITION = {
		TOP_RIGHT: 'toast-manager--top-right',
		TOP_LEFT: 'toast-manager--top-left',
		BOTTOM_RIGHT: 'toast-manager--bottom-right',
		BOTTOM_LEFT: 'toast-manager--right-right',
	}

	useEffect(() => {
		const toastPortal = document.createElement('div') as HTMLElement
		toastPortal.id = portalId
		toastPortal.className = `toast-manager ${
			position && positions[position]
		}`

		document.getElementsByTagName('body')[0].prepend(toastPortal)
		setLoaded(true)

		return () => {
			document.getElementsByTagName('body')[0].removeChild(toastPortal)
		}
	}, [portalId])

	return { loaded, portalId }
}

export default useToast
