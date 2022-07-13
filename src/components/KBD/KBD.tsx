import classNames from 'classnames'
import { BiCommand } from 'react-icons/bi'
import { BsAlt, BsArrowReturnLeft, BsOption, BsShift } from 'react-icons/bs'
import { FiDelete } from 'react-icons/fi'
import { ImCtrl, ImWindows } from 'react-icons/im'
import { KBD, KBDProps } from './KBD.types'

const kbdIcons = {
	windows: <ImWindows className='w-3 h-3' />,
	command: <BiCommand className='w-3 h-3' />,
	control: <ImCtrl className='w-3 h-3' />,
	option: <BsOption className='w-3 h-3' />,
	shift: <BsShift className='w-3 h-3' />,
	returnkey: <BsArrowReturnLeft className='w-3 h-3' />,
	deletekey: <FiDelete className='w-3 h-3' />,
}

const KBD = (props: KBDProps): KBD => {
	const {
		mac = false,
		meta,
		shift,
		ctrl,
		alt,
		enter,
		deletekey,
		children,
		className,
		...rest
	} = props

	const noModifiers = !meta && !shift && !ctrl && !alt && !enter && !deletekey

	return (
		<kbd className={classNames('kbd', className)} {...rest}>
			{meta &&
				(mac ? (
					<kbd>{kbdIcons['command']}</kbd>
				) : (
					<kbd>
						<kbd>{kbdIcons['windows']}</kbd>
					</kbd>
				))}
			{ctrl && (mac ? <kbd>{kbdIcons['control']}</kbd> : <kbd>CTRL</kbd>)}
			{shift && (mac ? <kbd>{kbdIcons['shift']}</kbd> : <kbd>SHIFT</kbd>)}
			{alt && (mac ? <kbd>{kbdIcons['option']}</kbd> : <kbd>ALT</kbd>)}
			{enter && kbdIcons['returnkey']}
			{deletekey && kbdIcons['deletekey']}
			{/* {children && !noModifiers && <span>+</span>} */}
			{children && <span className=''>{children}</span>}
		</kbd>
	)
}

export default KBD
