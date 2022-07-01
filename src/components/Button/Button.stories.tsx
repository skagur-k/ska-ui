import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'
import { AiOutlineSetting } from 'react-icons/ai'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ska-ui/Button',
	component: Button,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-4'>
			<Button className='btn'>Hello</Button>
			<Button className='btn btn-xs btn-solid'>Hello</Button>
			<Button className='btn btn-sm btn-solid'>Hello</Button>
			<Button color='red' className='btn btn-md btn-solid'>
				Hello
			</Button>
			<Button color='blue' className='btn btn-lg btn-solid'>
				Hello
			</Button>

			{/* <Button size='sm' notification icon={<AiOutlineSetting />} />
			<Button size='md' icon={<AiOutlineSetting />} />
			<Button size='lg' focusafterclick icon={<AiOutlineSetting />} /> */}
			{/* <Button size='md' variant='ghost' {...args}>
				{args.children}
			</Button>
			<Button size='lg' notification variant='ghost' {...args}>
				{args.children}
			</Button>
			<Button variant='ghost' block {...args}>
				{args.children}
			</Button>

			<Button size='sm' notification variant='shadow' {...args}>
				{args.children}
			</Button>
			<Button size='md' variant='shadow' {...args}>
				{args.children}
			</Button>
			<Button size='lg' variant='shadow' {...args}>
				{args.children}
			</Button>
			<Button variant='shadow' block {...args}>
				{args.children}
			</Button> */}
		</div>
	)
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
// 	children: 'Settings',
// 	icon: <AiOutlineSetting />,
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
// 	children: 'Secondary',
// 	type: 'secondary',
// }

// export const Success = Template.bind({})
// Success.args = {
// 	children: 'Success',
// 	type: 'success',
// }

// export const Error = Template.bind({})
// Error.args = {
// 	children: 'Error',
// 	type: 'error',
// }

// export const Warning = Template.bind({})
// Warning.args = {
// 	children: 'Warning',
// 	type: 'warning',
// }
