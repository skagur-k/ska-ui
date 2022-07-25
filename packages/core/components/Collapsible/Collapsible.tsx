import classNames from 'classnames'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { CollapsibleProps } from './Collapsible.types'

const Collapsible = (props: CollapsibleProps): JSX.Element => {
	const { className, children, open: _open = false, title, ...rest } = props
	const [open, setOpen] = React.useState<boolean>(_open)
	const [height, setHeight] = React.useState<number | undefined>(
		open ? undefined : 0
	)
	function handleToggle() {
		setOpen(!open)
	}

	const ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (!height || !open || !ref.current) return undefined
		const resizeObserver = new ResizeObserver((el) => {
			setHeight(el[0].contentRect.height + 32)
		})

		resizeObserver.observe(ref.current)
		return () => {
			resizeObserver.disconnect()
		}
	}, [height, open])

	React.useEffect(() => {
		if (open) {
			setHeight(ref.current?.getBoundingClientRect().height!)
		} else setHeight(0)
	}, [open])

	return (
		<div className={classNames('collapsible', className)} {...rest}>
			<div onClick={handleToggle} className='collapsible-title'>
				<span>{title}</span>
				<span>
					<FiChevronDown
						className={classNames(
							'w-5 h-5 transition-transform duration-300',
							[open && '-rotate-180']
						)}
					/>
				</span>
			</div>
			<div
				className={classNames('collapsible-content-wrapper')}
				style={{ height }}>
				<div ref={ref} className='collapsible-content-content'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Collapsible
