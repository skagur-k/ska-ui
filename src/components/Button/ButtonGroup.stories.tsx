import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AiFillAlert, AiFillAndroid, AiOutlineUser } from 'react-icons/ai'
import { Button, ButtonGroup } from '.'
export default {
	title: 'ska-ui/Button',
	component: ButtonGroup,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Button.Group size='lg' attached>
				<Button disabled>Button 1</Button>
				<Button color={'red'}>Button 2</Button>
				<Button>Button 3</Button>
				<Button
					rounded
					variant='ghost'
					color={'blue'}
					icon={<AiOutlineUser />}
					size='xs'>
					User
				</Button>
			</Button.Group>{' '}
			<ButtonGroup rounded size='lg' attached>
				<Button disabled>Button 1</Button>
				<Button color={'red'}>Button 2</Button>
				<Button>Button 3</Button>
				<Button>Button 4</Button>
			</ButtonGroup>{' '}
			<Button.Group rounded size='md'>
				<Button rounded icon={<AiOutlineUser />} size='xs'>
					User
				</Button>
				<Button
					rounded={false}
					variant='ghost'
					icon={<AiFillAlert />}
					size='sm'></Button>
				<Button
					rounded={false}
					variant='ghost'
					color='blue'
					icon={<AiFillAlert />}
					size='sm'>
					Ghost Button
				</Button>
				<Button icon={<AiFillAndroid />} size='md'></Button>
			</Button.Group>{' '}
		</div>
	)
}

export const Group = Template.bind({})
