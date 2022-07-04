import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AiFillAlert, AiFillAndroid, AiOutlineUser } from 'react-icons/ai'
import Checkbox from './Checkbox'
export default {
	title: 'ska-ui/Checkbox',
	component: Checkbox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Checkbox size='sm'>Checkbox</Checkbox>
			<Checkbox size='md' isIndeterminate>
				Checkbox
			</Checkbox>
			<Checkbox size='lg' disabled checked>
				Checkbox
			</Checkbox>
			<Checkbox defaultChecked>Checkbox</Checkbox>
			<Checkbox>Checkbox</Checkbox>
		</div>
	)
}

export const Example = Template.bind({})
