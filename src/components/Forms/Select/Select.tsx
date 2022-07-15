import React from 'react'
import { AriaSelectProps } from '@react-types/select'
import { useSelectState } from 'react-stately'
import {
	HiddenSelect,
	mergeProps,
	useButton,
	useFocusRing,
	useSelect,
} from 'react-aria'
import { Popover } from '../../Popover'
import { ListBox } from '../ListBox'
import classNames from 'classnames'
import { HiSelector } from 'react-icons/hi'

const Select = <T extends object>(props: AriaSelectProps<T>) => {
	const state = useSelectState(props)
	const ref = React.useRef(null)
	const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
		props,
		state,
		ref
	)

	const { buttonProps } = useButton(triggerProps, ref)
	const { focusProps, isFocusVisible, isFocused } = useFocusRing()

	return (
		<div className='select'>
			<div {...labelProps} className='select-label'>
				{props.label}
			</div>
			<HiddenSelect
				state={state}
				triggerRef={ref}
				label={props.label}
				name={props.name}
			/>
			<button
				{...mergeProps(buttonProps, focusProps)}
				ref={ref}
				className={classNames('select-button', [
					isFocusVisible && 'select-button-focusvisible',
					isFocused && 'select-button-focused',
					state.isOpen && 'select-opened-button',
				])}>
				<span {...valueProps} className='select-button-text'>
					{state.selectedItem
						? state.selectedItem.rendered
						: 'Select an Option'}
				</span>
				<HiSelector />
			</button>
			{state.isOpen && (
				<Popover
					isOpen={state.isOpen}
					onClose={state.close}
					className='select-popover'>
					<ListBox {...menuProps} state={state} />
				</Popover>
			)}
		</div>
	)
}

export default Select
