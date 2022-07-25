import { Item, Section } from '../../Shared'
import { ListBoxDescription, ListBoxLabel } from '../ListBox/ListBox'
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
					<ListBoxLabel>Option 1</ListBoxLabel>
				</Item>
				<Section title='Category 2'>
					<Item key='option2'>
						<ListBoxLabel>Option 2</ListBoxLabel>
						<ListBoxDescription>
							ListBoxDescription
						</ListBoxDescription>
					</Item>
					<Item key='option3'>
						<ListBoxLabel>Option 3</ListBoxLabel>
						<ListBoxDescription>
							ListBoxDescription
						</ListBoxDescription>
					</Item>
					<Item key='option4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>
							ListBoxDescription
						</ListBoxDescription>
					</Item>
				</Section>
			</Select>
			<Select placeholder='Choose One!' label='Favorite Animal'>
				<Section title='Category 1'>
					<Item avatar='x' key='option1'>
						<ListBoxLabel>Option 1</ListBoxLabel>
					</Item>
					<Item avatar='x' key='option2'>
						<ListBoxLabel>Option 2</ListBoxLabel>
					</Item>
				</Section>
				<Section title='Category 2'>
					<Item avatar='x' key='option3'>
						<ListBoxLabel>Option 3</ListBoxLabel>
						<ListBoxDescription>
							ListBoxDescription
						</ListBoxDescription>
					</Item>
					<Item avatar='x' key='option4'>
						<ListBoxLabel>Option 4</ListBoxLabel>
						<ListBoxDescription>
							ListBoxDescription
						</ListBoxDescription>
					</Item>
				</Section>
			</Select>
		</div>
	)
}

export const FormExample = Template.bind({})
