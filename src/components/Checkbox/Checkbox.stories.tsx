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
			<Checkbox size='md'>Checkbox</Checkbox>
			<Checkbox color='red' size='lg' disabled>
				Checkbox
			</Checkbox>
			<Checkbox rounded color={'red'}>
				Checkbox
			</Checkbox>
			<Checkbox>Checkbox</Checkbox>
			<Checkbox rounded size='sm' disabled>
				Checkbox
			</Checkbox>
			<Checkbox size='md' disabled>
				Checkbox
			</Checkbox>
			<Checkbox rounded color='red' size='lg' disabled>
				Checkbox
			</Checkbox>
			<Checkbox rounded color={'red'} disabled>
				Checkbox
			</Checkbox>
			<Checkbox>Checkbox</Checkbox>

			<Checkbox size='md'>Checkbox</Checkbox>
			<Checkbox size='md' color='red'>
				Checkbox
			</Checkbox>
			<Checkbox size='md' color='blue'>
				Checkbox
			</Checkbox>
			<Checkbox size='md' rounded>
				Checkbox
			</Checkbox>
			<Checkbox size='md' disabled>
				Checkbox
			</Checkbox>
		</div>
	)
}

export const Example = Template.bind({})
