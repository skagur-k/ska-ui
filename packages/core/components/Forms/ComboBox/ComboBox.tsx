import classNames from 'classnames'
import { useComboBoxState } from 'react-stately'
import { Popover } from '../../Popover'
import { ListBox } from '../ListBox'

import React from 'react'
import { useButton, useComboBox, useFilter, useHover } from 'react-aria'
import { FiChevronDown } from 'react-icons/fi'
import { ComboBoxProps } from './ComboBox.types'

const ComboBox = <T extends object>(props: ComboBoxProps<T>) => {
	const { label } = props
	const { contains } = useFilter({ sensitivity: 'base' })
	const state = useComboBoxState({
		...props,
		defaultFilter: contains,
		menuTrigger: 'focus',
	})

	const buttonRef = React.useRef<HTMLButtonElement>(null)
	const inputRef = React.useRef<HTMLInputElement>(null)
	const listBoxRef = React.useRef<HTMLUListElement>(null)
	const popoverRef = React.useRef<HTMLDivElement>(null)

	const {
		buttonProps: triggerProps,
		inputProps,
		listBoxProps,
		labelProps,
	} = useComboBox(
		{
			...props,
			inputRef,
			buttonRef,
			listBoxRef,
			popoverRef,
		},
		state
	)

	const { buttonProps } = useButton(triggerProps, buttonRef)
	const { hoverProps, isHovered } = useHover(props)

	return (
		<div className='combobox'>
			<label {...labelProps} className='combobox-label'>
				{label}
			</label>
			<div
				{...hoverProps}
				className={classNames('combobox-button', [
					isHovered && 'combobox-button-hovered',
					state.isFocused && 'combobox-button-focused',
				])}>
				<input
					{...inputProps}
					ref={inputRef}
					className='combobox-button-input'
				/>
				<button
					{...buttonProps}
					ref={buttonRef}
					className='combobox-button-icon'>
					<FiChevronDown
						className={classNames(
							'w-5 h-5 transition-transform duration-300',
							[state.isOpen && '-rotate-180']
						)}
					/>
				</button>
			</div>
			{state.isOpen && (
				<Popover
					popoverRef={popoverRef}
					isOpen={state.isOpen}
					onClose={state.close}
					className='combobox-popover'>
					<ListBox
						{...listBoxProps}
						listBoxRef={listBoxRef}
						state={state}
						className='combobox-listbox'
					/>
				</Popover>
			)}
		</div>
	)
}
// ComboBox.displayName = 'SKA-UI ComboBox'

export default ComboBox
