import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ska-ui/Button',
	component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<div className='flex flex-col gap-4'>
			<Button size='sm' {...args}>
				{args.children}
			</Button>
			<Button size='md' {...args}>
				{args.children}
			</Button>
			<Button size='lg' {...args}>
				{args.children}
			</Button>
			<Button {...args}>{args.children}</Button>
		</div>
	)
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: 'Button',
}
