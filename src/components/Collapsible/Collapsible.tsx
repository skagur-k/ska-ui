import classNames from 'classnames'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { CollapsibleProps } from './Collapsible.types'

const Collapsible = (props: CollapsibleProps): JSX.Element => {
	const { children, open: _open = false, title } = props
	const [open, setOpen] = React.useState<boolean>(_open)
	const [height, setHeight] = React.useState<number | undefined>(
		open ? undefined : 0
	)
	function handleClick() {
		setOpen(!open)
	}

	const ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (!height || !open || !ref.current) return undefined
		const resizeObserver = new ResizeObserver((el) => {
			setHeight(el[0].contentRect.height)
			console.log(el[0].contentRect.height)
		})

		resizeObserver.observe(ref.current)
		return () => {
			resizeObserver.disconnect()
		}
	}, [height, open])

	React.useEffect(() => {
		if (open) {
			setHeight(ref.current?.getBoundingClientRect().height)
		} else setHeight(0)
	}, [open])

	return (
		<div className='collapsible px-2 py-6 border-t border-b border-neutral-100 overflow-hidden'>
			<div
				onClick={handleClick}
				className='collapsible-title cursor-pointer text-lg font-bold flex justify-between items-center'>
				<span>{open ? 'Opened' : 'Closed'}</span>
				<span>
					<FiChevronDown
						className={classNames(
							'w-5 h-5 transition-transform duration-300',
							[open && 'rotate-180']
						)}
					/>
				</span>
			</div>
			<div
				ref={ref}
				className={classNames(
					'collapsible-content p-2 animate-fadeIn mt-4 transition-all duration-500 overflow-hidden',
					[open ? 'h-100' : 'h-0']
				)}>
				{children}
			</div>
		</div>
	)
}

export default Collapsible
