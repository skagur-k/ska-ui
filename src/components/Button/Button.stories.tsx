import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'
import { AiOutlineSetting } from 'react-icons/ai'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ska-ui/Button',
	component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<div className='flex flex-col gap-4'>
			<Button type={'success'} notification loading size='sm' icon={<AiOutlineSetting />} />
			<Button size='md' icon={<AiOutlineSetting />} />
			<Button size='lg' icon={<AiOutlineSetting />} />

			<Button size='sm' iconRight={true} variant='ghost' {...args}>
				{args.children}
			</Button>
			<Button size='md' iconRight variant='ghost' {...args}>
				{args.children}
			</Button>
			<Button size='lg' iconRight variant='ghost' {...args}>
				{args.children}
			</Button>
			<Button variant='ghost' block {...args}>
				{args.children}
			</Button>

			<Button size='sm' variant='shadow' {...args}>
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
			</Button>
		</div>
	)
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: 'Settings',
	icon: <AiOutlineSetting />,
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Secondary',
	type: 'secondary',
}

export const Success = Template.bind({})
Success.args = {
	children: 'Success',
	type: 'success',
}

export const Error = Template.bind({})
Error.args = {
	children: 'Error',
	type: 'error',
}

export const Warning = Template.bind({})
Warning.args = {
	children: 'Warning',
	type: 'warning',
}
