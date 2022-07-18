import { Item, Section } from '../../Shared'
import { Label, Description } from '../ListBox/ListBox'
import { Select } from '../Select'
import ComboBox from './ComboBox'
export default {
	title: 'ska-ui/ComboBox',
	component: ComboBox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<ComboBox placeholder='Placeholder' label='Combobox'>
				<Item key='option1'>
					<Label>Option 1</Label>
				</Item>
				<Section title='Category 2'>
					<Item key='option2'>
						<Label>Option 2</Label>
						<Description>Description</Description>
					</Item>
					<Item key='option3'>
						<Label>Option 3</Label>
						<Description>Description</Description>
					</Item>
					<Item key='option4'>
						<Label>Option 4</Label>
						<Description>Description</Description>
					</Item>
				</Section>
			</ComboBox>
			<Select placeholder='Choose One!' label='Favorite Animal'>
				<Item key='option1'>
					<Label>Option 1</Label>
				</Item>
				<Section title='Category 2'>
					<Item key='option2'>
						<Label>Option 2</Label>
						<Description>Description</Description>
					</Item>
					<Item key='option3'>
						<Label>Option 3</Label>
						<Description>Description</Description>
					</Item>
					<Item key='option4'>
						<Label>Option 4</Label>
						<Description>Description</Description>
					</Item>
				</Section>
			</Select>
		</div>
	)
}

export const FormExample = Template.bind({})
