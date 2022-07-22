import classNames from 'classnames'
import React from 'react'
import type { IAccordionItem, AccordionProps } from './Accordion.types'
import AccordionItem from './AccordionItem'

const Accordian = (props: AccordionProps): JSX.Element => {
	const { items: _items, children } = props
	const [selected, setSelected] = React.useState<number | null>(null)

	const handleToggle = (index: number) => {
		console.log('selected: ' + selected + ' index: ' + index)

		if (index === selected) {
			return setSelected(null)
		}

		setSelected(index)
	}

	const [items] = React.useState<IAccordionItem[]>(_items)

	return (
		<div className={classNames('accordion')}>
			{items.map((item, i) => {
				return (
					<AccordionItem
						key={i}
						onToggle={() => handleToggle(i)}
						title={item.title}
						open={selected === i}>
						{item.content}
					</AccordionItem>
				)
			})}
		</div>
	)
}

export default Accordian
