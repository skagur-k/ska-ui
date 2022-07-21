import classNames from 'classnames'
import React from 'react'
import { useMeter } from 'react-aria'
import { MeterProps } from './Meter.types'

const Meter = (props: MeterProps) => {
	const {
		label,
		showValueLabel = !!label,
		value = 50,
		minValue = 0,
		maxValue = 100,
		width = '300px',
		colors,
	} = props

	const { meterProps, labelProps } = useMeter(props)
	let percentage = (value - minValue) / (maxValue - minValue)
	let barWidth = `${Math.round(percentage * 100)}%`

	function getColor(value: number) {
		let color: string = ''
		if (colors) {
			Object.keys(colors).map((key) => {
				if (value > Number(key)) color = colors[Number(key)]
			})
		}
		return color
	}

	const barColor = React.useMemo(() => getColor(value), [value])

	return (
		<div
			{...meterProps}
			className={classNames('meter')}
			style={{ width: width }}>
			<div className='meter-labels'>
				{label && (
					<span {...labelProps} className='meter-labels-label'>
						{label}
					</span>
				)}
				{showValueLabel && (
					<span className='meter-labels-value'>
						{meterProps['aria-valuetext']}
					</span>
				)}
			</div>
			<div className='meter-bar'>
				<div className='meter-bar-track'>
					<div
						className={classNames(`meter-bar-fill`)}
						style={{ width: barWidth, background: barColor }}
					/>
				</div>
			</div>
		</div>
	)
}

export default Meter
