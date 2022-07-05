import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckboxGroup, { CheckboxGroupItem } from './CheckboxGroup'
export default {
	title: 'ska-ui/Checkbox',
	component: CheckboxGroup,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex gap-5'>
			<CheckboxGroup setValue={['one']} label='Choose one:'>
				<CheckboxGroupItem label='Checkbox One' value='one'>
					One
				</CheckboxGroupItem>
				<CheckboxGroupItem rounded selected color='red' value='two'>
					Two
				</CheckboxGroupItem>
				<CheckboxGroupItem disabled value='three'>
					Three
				</CheckboxGroupItem>
				<CheckboxGroupItem value='four'>Four</CheckboxGroupItem>
			</CheckboxGroup>
			<CheckboxGroup color='red' label='Choose one:'>
				<CheckboxGroupItem label='Checkbox One' value='one'>
					One
				</CheckboxGroupItem>
				<CheckboxGroupItem rounded selected color='red' value='two'>
					Two
				</CheckboxGroupItem>
				<CheckboxGroupItem disabled value='three'>
					Three
				</CheckboxGroupItem>
				<CheckboxGroupItem value='four'>Four</CheckboxGroupItem>
			</CheckboxGroup>
			<CheckboxGroup rounded label='Choose one:'>
				<CheckboxGroupItem label='Checkbox One' value='one'>
					One
				</CheckboxGroupItem>
				<CheckboxGroupItem rounded selected color='red' value='two'>
					Two
				</CheckboxGroupItem>
				<CheckboxGroupItem disabled value='three'>
					Three
				</CheckboxGroupItem>
				<CheckboxGroupItem value='four'>Four</CheckboxGroupItem>
			</CheckboxGroup>
		</div>
	)
}

export const Group = Template.bind({})
