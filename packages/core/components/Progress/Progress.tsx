import classNames from 'classnames'
import React from 'react'
import { useMeter, useProgressBar } from 'react-aria'
import { MeterProps } from './Progress.types'

const Meter = (props: MeterProps) => {
	const {
		label,
		showValueLabel = !!label,
		value,
		minValue = 0,
		maxValue = 100,
		width = '300px',
		type,
		colors,
		isIndeterminate = !!!value,
	} = props

	const { progressBarProps, labelProps } = useProgressBar({
		'aria-label': `${isIndeterminate ? 'Loading...' : label}`,
		...props,
	})
	let percentage = (value! - minValue) / (maxValue - minValue)
	let barWidth = `${Math.round(percentage * 100)}%`

	const types = {
		success: 'progress-success',
		warning: 'progress-warning',
		error: 'progress-error',
		secondary: 'progress-secondary',
	}

	function getColor(value: number) {
		let color: string = ''
		if (colors) {
			Object.keys(colors).map((key) => {
				if (value > Number(key)) color = colors[Number(key)]
			})
		}
		return color
	}

	const barColor = React.useMemo(() => getColor(value!), [value])

	return (
		<div
			{...progressBarProps}
			className={classNames('progress', [type && types[type]])}
			style={{ width: width }}>
			<div className='progress-labels'>
				{label && (
					<span {...labelProps} className='progress-labels-label'>
						{label}
					</span>
				)}
				{showValueLabel && (
					<span className='progress-labels-value'>
						{isIndeterminate
							? 'Loading'
							: progressBarProps['aria-valuetext']}
					</span>
				)}
			</div>
			<div className='progress-bar'>
				<div className='progress-bar-track'>
					{isIndeterminate ? (
						<div
							className={classNames(`progress-bar-indeterminate`)}
							style={{ background: barColor }}
						/>
					) : (
						<div
							className={classNames(`progress-bar-fill`)}
							style={{ width: barWidth, background: barColor }}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Meter
