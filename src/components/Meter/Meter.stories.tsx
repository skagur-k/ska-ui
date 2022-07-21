import { Button } from '../Button'
import React from 'react'
import Meter from './Meter'
export default {
	title: 'ska-ui/Meter',
	component: Meter,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	const [value, setValue] = React.useState(50)

	const colors = {
		0: '#2596be',
		25: '#e28743',
		50: '#873e23',
		75: '#063970',
		100: '##eeeee4',
	}
	return (
		<div className='flex flex-col gap-5'>
			<Meter label='Label' value={value} width='400px' colors={colors} />
			<Meter label='Label' value={value} width='400px' />
			<Button
				onClick={() => {
					if (value < 100) setValue(value + 10)
				}}>
				Increase
			</Button>
			<Button
				onClick={() => {
					if (value > 0) setValue(value - 10)
				}}>
				Decrease
			</Button>
		</div>
	)
}

export const FormExample = Template.bind({})
