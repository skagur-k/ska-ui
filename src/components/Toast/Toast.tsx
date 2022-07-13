import classNames from 'classnames'
import { useToastClass } from './styles'
import { BsXLg } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
export const Toast = ({
	mode = 'info',
	onClose,
	message,
	show,
	duration,
	...rest
}: Toast) => {
	const [showToast, setShowToast] = useState(show)
	const [hideToast, setHideToast] = useState(!show)
	const timeoutRef: { current: NodeJS.Timeout | undefined } =
		useRef(undefined)

	useEffect(() => {
		if (show) {
			setShowToast(true)
			setHideToast(false)
			if (timeoutRef != null) clearTimeout(timeoutRef.current)
		} else {
			setShowToast(false)
			timeoutRef.current = setTimeout(
				() => setHideToast(true),
				duration || 1000
			)
		}
	}, [show])

	useEffect(() => () => clearTimeout(timeoutRef.current), [])

	const toastClasses = useToastClass({ mode })

	return (
		<div className={classNames(toastClasses)} {...rest}>
			<div className='toast-text'>{message}</div>
			<BsXLg onClick={onClose} className='toast-x' />
		</div>
	)
}
