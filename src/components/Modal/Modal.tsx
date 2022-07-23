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
import { ModalProps } from './Modal.types'
import { CSSTransition } from 'react-transition-group'

const Modal = (props: ModalProps): JSX.Element => {
	const {
		children,
		onClose,
		title,
		confirmLabel,
		onConfirm,
		isDismissable = true,
		isKeyboardDismissDisabled = false,
	} = props
	const ref = React.useRef(null)
	const { overlayProps, underlayProps } = useOverlay(
		{
			isKeyboardDismissDisabled: isKeyboardDismissDisabled,
			isDismissable: isDismissable,
			...props,
		},
		ref
	)

	function handleConfirm(onConfirm: () => void) {
		onConfirm()
		onClose!()
	}

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
				enter: 'opacity-0',
				enterDone: 'opacity-1 transition ease-in',
				exit: 'opacity-1',
				exitActive: 'opacity-0 transition ease-out',
			}}>
			<div
				className='fixed inset-0 flex items-center justify-center z-100 bg-neutral-300/40'
				{...underlayProps}>
				<FocusScope contain restoreFocus>
					<CSSTransition
						in={props.isOpen}
						appear
						nodeRef={ref}
						timeout={{ enter: 0, exit: 250 }}
						classNames={{
							enter: 'translate-y-4 opacity-0',
							enterActive: 'translate-y-0 opacity-1',
							exit: 'translate-y-0 opacity-1',
							exitActive:
								'-translate-y-4 opacity-0 transition ease-out',
						}}>
						<div
							{...mergeProps(
								overlayProps,
								dialogProps,
								modalProps
							)}
							ref={ref}
							className='min-w-[420px] max-w-md bg-white shadow-xl rounded-md z-1 h-fit max-h-[80vh] relative outline-none'>
							<div className='modal-wrapper p-8 '>
								<div className='modal-content'>
									<div className='modal-header flex flex-col p-4 items-center justify-center'>
										<h3
											{...titleProps}
											className='modal-title text-xl font-medium text-center pb-2'>
											{title}
										</h3>
										<p className='modal-subtitle text-base font-light text-neutral-400'>
											This is where the subtitle goes.
										</p>
									</div>
									<p className='modal-description text-base text-neutral-800 pt-2'>
										{children}
									</p>
								</div>
							</div>
							<div className='modal-buttons flex border-t'>
								<button
									onClick={onClose}
									className='flex-1 py-4 border-r hover:bg-neutral-50 outline-none focus:bg-neutral-50'>
									Cancel
								</button>
								<button
									onClick={() => handleConfirm(onConfirm!)}
									className='flex-1 py-4 hover:bg-neutral-50 outline-none focus:bg-neutral-50'>
									{confirmLabel}
								</button>
							</div>
						</div>
					</CSSTransition>
				</FocusScope>
			</div>
		</CSSTransition>
	)
}

export default Modal
