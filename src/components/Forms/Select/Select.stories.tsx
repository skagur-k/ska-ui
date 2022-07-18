import { Item, Section } from '../../Shared'
import { Description, Label } from '../ListBox/ListBox'
import Select from './Select'
export default {
	title: 'ska-ui/Select',
	component: Select,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
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
			<Select placeholder='Choose One!' label='Favorite Animal'>
				<Section title='Category 1'>
					<Item avatar='x' key='option1'>
						<Label>Option 1</Label>
					</Item>
					<Item avatar='x' key='option2'>
						<Label>Option 2</Label>
					</Item>
				</Section>
				<Section title='Category 2'>
					<Item avatar='x' key='option3'>
						<Label>Option 3</Label>
						<Description>Description</Description>
					</Item>
					<Item avatar='x' key='option4'>
						<Label>Option 4</Label>
						<Description>Description</Description>
					</Item>
				</Section>
			</Select>
			<Select placeholder='Choose One!' label='Favorite Animal'>
				<Item key='option1'>
					<Label>Option 1</Label>
				</Item>
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
			</Select>
		</div>
	)
}

export const FormExample = Template.bind({})
