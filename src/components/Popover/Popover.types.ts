import React from 'react'

interface PopoverProps extends DefaultProps {
	popoverRef?: React.RefObject<HTMLDivElement>
	isOpen?: boolean
	onClose: () => void
}

type Popover = JSX.Element

export { Popover, PopoverProps }
