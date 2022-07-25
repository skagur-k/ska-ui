import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckboxGroup, { CheckboxGroupItem } from './CheckboxGroup'
export default {
	title: 'ska-ui/Checkbox',
	component: CheckboxGroup,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<CheckboxGroup setValue={['one']} label='Choose one:'>
				<CheckboxGroupItem value='one'>One</CheckboxGroupItem>
				<CheckboxGroupItem rounded selected color='red' value='two'>
					Two
				</CheckboxGroupItem>
				<CheckboxGroupItem disabled value='three'>
					Three
				</CheckboxGroupItem>
				<CheckboxGroupItem value='four'>Four</CheckboxGroupItem>
			</CheckboxGroup>
			<CheckboxGroup color='red' label='Choose one:'>
				<CheckboxGroupItem value='one'>One</CheckboxGroupItem>
				<CheckboxGroupItem rounded selected color='red' value='two'>
					Two
				</CheckboxGroupItem>
				<CheckboxGroupItem
					caption='This is a caption for three'
					name='cb-three'
					value='three'>
					Three
				</CheckboxGroupItem>
				<CheckboxGroupItem
					caption='This is a caption for four'
					value='four'>
					Four
				</CheckboxGroupItem>
			</CheckboxGroup>
			<CheckboxGroup
				column
				labelLeft
				caption='This is caption 1 Please choose your number. Width is limited to xs'
				rounded
				label='Choose your favorite number'>
				<CheckboxGroupItem caption='Select one' value='one'>
					One
				</CheckboxGroupItem>
				<CheckboxGroupItem
					caption='Select two'
					rounded
					selected
					color='red'
					value='two'>
					Two
				</CheckboxGroupItem>
				<CheckboxGroupItem
					caption='Select three'
					disabled
					value='three'>
					Three
				</CheckboxGroupItem>
				<CheckboxGroupItem caption='Select four' value='four'>
					Four
				</CheckboxGroupItem>
			</CheckboxGroup>
			<p id='result'></p>
		</div>
	)
}

export const Group = Template.bind({})
