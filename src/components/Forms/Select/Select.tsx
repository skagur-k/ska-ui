import React from 'react'
import { Item, useSelectState } from 'react-stately'
import {
	HiddenSelect,
	mergeProps,
	useButton,
	useFocusRing,
	useHover,
	useSelect,
} from 'react-aria'
import { Popover } from '../../Popover'
import { ListBox } from '../ListBox'
import classNames from 'classnames'
import { HiSelector } from 'react-icons/hi'
import type { SelectItemProps, SelectProps } from './Select.types'
import type { ItemElement } from '@react-types/shared'
import { Avatar } from '../../Avatar'

const Select = <T extends object>(props: SelectProps<T>): JSX.Element => {
	const { placeholder, disabled, ...rest } = props
	const state = useSelectState(props)
	const ref = React.useRef(null)
	const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
		{ isDisabled: disabled, ...rest },
		state,
		ref
	)

	const { buttonProps } = useButton(triggerProps, ref)
	const { focusProps, isFocusVisible, isFocused } = useFocusRing()
	const { hoverProps, isHovered } = useHover(props)

	return (
		<div className='select'>
			<div
				{...labelProps}
				className={classNames('select-label', [
					disabled && 'select-label-disabled',
				])}>
				{props.label}
			</div>
			<HiddenSelect
				state={state}
				triggerRef={ref}
				label={props.label}
				name={props.name}
			/>
			<button
				ref={ref}
				disabled={disabled}
				className={classNames('select-button', [
					isFocusVisible && 'select-button-focusvisible',
					isFocused && 'select-button-focused',
					isHovered && 'select-button-hovered',
					disabled && 'select-button-disabled',
					state.isOpen && 'select-opened-button',
				])}
				{...mergeProps(buttonProps, focusProps, hoverProps)}>
				<div {...valueProps} className='select-button-content'>
					{state.selectedItem
						? state.selectedItem.rendered
						: placeholder
						? placeholder
						: 'Select an Option'}
				</div>
				<HiSelector />
			</button>

			{state.isOpen && (
				<Popover
					isOpen={state.isOpen}
					onClose={state.close}
					className='select-popover absolute'>
					<ListBox {...menuProps} state={state} />
				</Popover>
			)}
		</div>
	)
}

export default Select
