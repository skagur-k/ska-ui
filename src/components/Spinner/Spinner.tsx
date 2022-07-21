import classNames from 'classnames'
import React from 'react'
import { useProgressBar } from 'react-aria'
import { clamp } from 'utils'
import { SpinnerProps } from './Spinner.types'

const Spinner = (props: SpinnerProps, ref: React.Ref<HTMLDivElement>) => {
	let {
		value = 0,
		minValue = 0,
		maxValue = 100,
		isIndeterminate = false,
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledBy,
		...rest
	} = props

	const domRef = React.useRef<React.Ref<HTMLDivElement>>(ref)

	value = clamp(value, minValue, maxValue)
	const { progressBarProps } = useProgressBar({
		...props,
		value,
	})

	let subMask1Style: React.CSSProperties = {}
	let subMask2Style: React.CSSProperties = {}
	if (!isIndeterminate) {
		let percentage = ((value - minValue) / (maxValue - minValue)) * 100
		let angle
		if (percentage > 0 && percentage <= 50) {
			angle = -180 + (percentage / 50) * 100
			subMask1Style.transform = `rotate(${angle}deg)`
			subMask2Style.transform = `rotate(-180deg)`
		} else if (percentage > 50) {
			angle = -180 + ((percentage - 50) / 50) * 180
			subMask1Style.transform = `rotate(0deg)`
			subMask2Style.transform = `rotate(${angle}deg)`
		}
	}

	return <div {...progressBarProps}></div>
}

export default Spinner
