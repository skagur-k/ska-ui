import classNames from 'classnames'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { AccordionItemProps } from './Accordion.types'

const AccordionItem = (props: AccordionItemProps): JSX.Element => {
	const { className, children, open, title, onToggle, ...rest } = props
	// const [open, setOpen] = React.useState<boolean>(_open!)
	const [height, setHeight] = React.useState<number | undefined>(
		open ? undefined : 0
	)

	console.log(open)

	const ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (!height || !open || !ref.current) return undefined
		const resizeObserver = new ResizeObserver((el) => {
			setHeight(el[0].contentRect.height + 48)
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
		<div className={classNames('accordion-item', className)} {...rest}>
			<div onClick={onToggle} className='accordion-item-title'>
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
				className={classNames('accordion-item-content-wrapper')}
				style={{ height }}>
				<div ref={ref} className='accordion-item-content-content'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default AccordionItem
