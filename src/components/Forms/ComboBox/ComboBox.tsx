import classNames from 'classnames'
import { Item, Section, useComboBoxState } from 'react-stately'
import { ListBox } from '../ListBox'
import { Popover } from '../../Popover'

import { ComboBox, ComboBoxProps } from './ComboBox.types'
import {
	useButton,
	useComboBox,
	useFilter,
	useFocus,
	useFocusRing,
	useHover,
} from 'react-aria'
import React, { useEffect } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'

const ComboBox = <T extends object>(props: ComboBoxProps<T>): ComboBox => {
	const { label } = props
	const { contains } = useFilter({ sensitivity: 'base' })
	const state = useComboBoxState({ ...props, defaultFilter: contains })

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
					<FiChevronDown className='w-5 h-5' />
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

export default ComboBox
