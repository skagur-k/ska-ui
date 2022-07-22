import classNames from 'classnames'
import React from 'react'
import {
	FocusScope,
	mergeProps,
	useDialog,
	useModal,
	useOverlay,
	usePreventScroll,
} from 'react-aria'
import { DialogProps } from './Dialog.types'

const Dialog = (props: DialogProps) => {
	const { children, confirmLabel } = props

	const ref = React.useRef(null)
	const { overlayProps, underlayProps } = useOverlay(props, ref)
	usePreventScroll()
	const { modalProps } = useModal()
	const { dialogProps, titleProps } = useDialog(
		{
			...props,
			role: 'dialog',
		},
		ref
	)

	return (
		<CSSTransition
			in={props.isOpen}
			unmountOnExit
			timeout={{ enter: 0, exit: 250 }}
			classNames={{
				enter: '',
				enterDone: '',
				exit: '',
			}}>
			<div {...underlayProps} className={classNames('')}>
				<FocusScope contain restoreFocus autoFocus>
					<CSSTransition
						in={props.isOpen}
						appear
						nodeRef={ref}
						timeout={{ enter: 0, exit: 250 }}
						classNames={{
							enter: '',
							enterDone: '',
							exit: '',
						}}>
						<div
							{...mergeProps(
								overlayProps,
								dialogProps,
								modalProps
							)}
							ref={ref}
							className={classNames()}>
							Hello World!
						</div>
					</CSSTransition>
				</FocusScope>
			</div>
		</CSSTransition>
	)
}

export default Dialog
