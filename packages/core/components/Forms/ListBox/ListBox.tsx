import type {
	ListBoxOptionType,
	ListBoxSectionType,
	ListBoxProps,
	OptionProps,
	SectionProps,
	OptionContextValue,
} from './ListBox.types'
import { useListBox, useListBoxSection, useOption } from '@react-aria/listbox'
import React from 'react'
import { useListBoxOptionClass } from './styles'
import { FaCheck } from 'react-icons/fa'
import classNames from 'classnames'

const ListBox = (props: ListBoxProps) => {
	const ref = React.useRef<HTMLUListElement>(null)
	const { listBoxRef = ref, state, className } = props
	const { listBoxProps } = useListBox(props, state, listBoxRef)

	return (
		<ul
			{...listBoxProps}
			ref={listBoxRef}
			className={classNames('listbox', className)}>
			<div className='listbox-items'>
				{[...state.collection].map((item) =>
					item.type === 'section' ? (
						<ListBoxSection
							key={item.key}
							section={item}
							state={state}
						/>
					) : (
						<ListBoxOption
							key={item.key}
							item={item}
							state={state}
						/>
					)
				)}
			</div>
		</ul>
	)
}

const ListBoxSection = ({
	section,
	state,
}: SectionProps): ListBoxSectionType => {
	const { itemProps, headingProps, groupProps } = useListBoxSection({
		heading: section.rendered,
		'aria-label': section['aria-label'],
	})

	return (
		<>
			<li {...itemProps} className='listbox-section'>
				{section.rendered && (
					<div {...headingProps} className='listbox-section-heading'>
						{section.rendered}
					</div>
				)}
				<ul {...groupProps} className='listbox-items'>
					{[...section.childNodes].map((node) => {
						return (
							<ListBoxOption
								key={node.key}
								item={node}
								state={state}
							/>
						)
					})}
				</ul>
			</li>
		</>
	)
}

const OptionContext = React.createContext<OptionContextValue>({
	labelProps: {},
	descriptionProps: {},
})

const ListBoxOption = ({ item, state }: OptionProps): ListBoxOptionType => {
	const ref = React.useRef<HTMLLIElement>(null)
	const {
		optionProps,
		isDisabled,
		isSelected,
		isFocused,
		labelProps,
		descriptionProps,
	} = useOption(
		{
			key: item.key,
		},
		state,
		ref
	)

	const optionClasses = useListBoxOptionClass({
		isDisabled,
		isSelected,
		isFocused,
	})
	return (
		<li {...optionProps} ref={ref} className={optionClasses}>
			<div className='listbox-content'>
				<OptionContext.Provider
					value={{ labelProps, descriptionProps }}>
					{item.rendered}
				</OptionContext.Provider>
			</div>
			{isSelected && (
				<FaCheck
					aria-hidden='true'
					className='w-3 h-3 text-neutral-500'
				/>
			)}
		</li>
	)
}

export const ListBoxLabel = ({ children }: { children: React.ReactNode }) => {
	let { labelProps } = React.useContext(OptionContext)
	return (
		<div {...labelProps} className='listbox-option-label'>
			{children}
		</div>
	)
}

export const ListBoxDescription = ({
	children,
}: {
	children: React.ReactNode
}) => {
	let { descriptionProps } = React.useContext(OptionContext)

	return (
		<div {...descriptionProps} className='listbox-option-description'>
			{children}
		</div>
	)
}

export default ListBox
