import { Item, Section } from 'react-stately'
import { Description, Label } from '../ListBox/ListBox'
import Select, { SelectItem } from './Select'
export default {
	title: 'ska-ui/Select',
	component: Select,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Select
				placeholder='Choose One!'
				label='Favorite Animal'
				width='200px'>
				<SelectItem key='option1'>
					<Label>Option 1</Label>
				</SelectItem>
				<SelectItem key='option2'>
					<Label>Option 2</Label>
					<Description>Description</Description>
				</SelectItem>
				<SelectItem key='option3'>
					<Label>Option 3</Label>
					<Description>Description</Description>
				</SelectItem>
				<SelectItem key='option4'>
					<Label>Option 4</Label>
					<Description>Description</Description>
				</SelectItem>
			</Select>
			<Select
				disabled
				placeholder='Choose One!'
				label='Favorite Animal'
				width='200px'>
				<SelectItem avatar='x' key='option1'>
					<Label>Option 1</Label>
				</SelectItem>
				<SelectItem avatar='x' key='option2'>
					<Label>Option 2</Label>
				</SelectItem>
				<SelectItem avatar='x' key='option3'>
					<Label>Option 3</Label>
					<Description>Description</Description>
				</SelectItem>
				<SelectItem avatar='x' key='option4'>
					<Label>Option 4</Label>
					<Description>Description</Description>
				</SelectItem>
			</Select>
			<Select
				placeholder='Choose One!'
				label='Favorite Animal'
				width='200px'>
				<SelectItem key='option1'>
					<Label>Option 1</Label>
				</SelectItem>
				<SelectItem key='option2'>
					<Label>Option 2</Label>
					<Description>Description</Description>
				</SelectItem>
				<SelectItem key='option3'>
					<Label>Option 3</Label>
					<Description>Description</Description>
				</SelectItem>
				<SelectItem key='option4'>
					<Label>Option 4</Label>
					<Description>Description</Description>
				</SelectItem>
			</Select>
		</div>
	)
}

export const FormExample = Template.bind({})
