import { Item, Section } from '../../Shared'
import { ListBoxLabel, ListBoxDescription } from '../ListBox/'
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
				<Item key='option1' label='Option 1'>
					Hello
				</Item>
				<Section title='Category 2'>
					<Item key='option2' label='Option 2'>
						<ListBoxLabel>Option 2</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item label='Option 3' key='option3'>
						<ListBoxLabel>Option 3</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
					<Item key='option4' label='Option 4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>Description</ListBoxDescription>
					</Item>
				</Section>
			</ComboBox>
		</div>
	)
}

export const FormExample = Template.bind({})
