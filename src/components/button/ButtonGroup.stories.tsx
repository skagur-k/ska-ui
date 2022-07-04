import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AiFillAlert, AiFillAndroid, AiOutlineUser } from 'react-icons/ai'
import { Button, ButtonGroup } from './'
export default {
	title: 'ska-ui/Button',
	component: ButtonGroup,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<ButtonGroup size='lg' attached>
				<Button disabled>Button 1</Button>
				<Button color={'red'}>Button 2</Button>
				<Button>Button 3</Button>
				<Button>Button 4</Button>
			</ButtonGroup>{' '}
			<ButtonGroup rounded size='md'>
				<Button rounded icon={<AiOutlineUser />} size='xs'>
					User
				</Button>
				<Button rounded={false} icon={<AiFillAlert />} size='sm'>
					Report
				</Button>
				<Button icon={<AiFillAndroid />} size='md'>
					Android
				</Button>
			</ButtonGroup>{' '}
		</div>
	)
}

export const Group = Template.bind({})
