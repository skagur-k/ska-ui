import { Button } from '../Button'
import React from 'react'
import Progress from './Progress'
import { Input } from '../Forms'
export default {
	title: 'ska-ui/Progress',
	component: Progress,
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
			<Progress
				label='Label'
				value={value}
				width='400px'
				colors={colors}
			/>
			<Progress label='Label' value={value} width='400px' />
			<Progress label='Label' width='400px' type='success' />
			<Progress label='Label' value={value} width='400px' type='error' />
			<Progress
				label='Label'
				value={value}
				width='400px'
				type='warning'
				isIndeterminate
			/>
			<Progress
				label='Label'
				value={value}
				width='400px'
				type='secondary'
				isIndeterminate
			/>
			<Progress label='Indeterminate' value={value} isIndeterminate />
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
			<Input onChange={(e) => setValue(Number(e.valueOf()))} />
		</div>
	)
}

export const FormExample = Template.bind({})
