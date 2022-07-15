import classNames from 'classnames'
import React from 'react'
import { DismissButton, FocusScope, useOverlay } from 'react-aria'
import { Popover, PopoverProps } from './Popover.types'

const Popover = (props: PopoverProps): Popover => {
	const ref = React.useRef<HTMLDivElement>(null)
	const { popoverRef = ref, isOpen, onClose, children, className } = props

	const { overlayProps } = useOverlay(
		{
			isOpen,
			onClose,
			shouldCloseOnBlur: true,
			isDismissable: false,
		},
		popoverRef
	)

	const popoverClasses = classNames(
		'shadow-lg bg-white outline-none rounded-md ring-2 ring-inset ring-neutral-200',
		'p-2  mt-2',
		'absolute z-10 w-full top-full',
		'animate-fadeIn',
		className
	)

	return (
		<FocusScope restoreFocus>
			<div {...overlayProps} ref={popoverRef} className={popoverClasses}>
				{children}
				{/* Hidden DismissButton to allow ScreenReader users to dismiss the popover */}
				<DismissButton onDismiss={onClose} />
			</div>
		</FocusScope>
	)
}

export default Popover
