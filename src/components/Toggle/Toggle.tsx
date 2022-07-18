import classNames from 'classnames'
import React from 'react'
import { useFocusRing, useLabel, useSwitch, VisuallyHidden } from 'react-aria'
import { useToggleState } from 'react-stately'
import { ToggleProps } from './Toggle.types'

const Toggle = (props: ToggleProps): JSX.Element => {
	const {
		size = 'md',
		labelPosition = 'right',
		rounded = true,
		disabled,
		children,
	} = props
	const state = useToggleState(props)
	const ref = React.useRef(null)
	const { inputProps } = useSwitch(props, state, ref)
	const { labelProps } = useLabel(props)
	const { isFocusVisible, focusProps } = useFocusRing()

	const labelPositions = {
		top: 'toggle-label--top',
		bottom: 'toggle-label--bottom',
		left: 'toggle-label--left',
		right: 'toggle-label--right',
	}

	const toggleSizes = {
		sm: 'toggle-xs',
		md: 'toggle-md',
		lg: 'toggle-lg',
	}

	return (
		<label
			{...labelProps}
			className={classNames('toggle', [
				labelPosition && labelPositions[labelPosition],
				size && toggleSizes[size],
			])}>
			<VisuallyHidden>
				<input
					{...inputProps}
					{...focusProps}
					disabled={disabled}
					ref={ref}
				/>
			</VisuallyHidden>

			{children && (
				<div
					className={classNames('toggle-label', [
						isFocusVisible && 'toggle-label-focused',
						state.isSelected && 'toggle-label-selected',
						disabled && 'toggle-label-disabled',
					])}>
					{children}
				</div>
			)}

			<div
				className={classNames('toggle-switch', [
					state.isSelected && 'toggle-switch-selected',
					isFocusVisible && 'toggle-switch-focused',
					rounded && 'toggle-switch-rounded',
					disabled && 'toggle-switch-disabled',
					size && toggleSizes[size],
				])}>
				{/* <div className={classNames('toggle-switch-label')}>Label</div> */}
				<div className={classNames('toggle-switch-switch')}></div>
				<div />
			</div>
		</label>
	)
}

export default Toggle
