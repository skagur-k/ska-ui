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
	const [isLoading, setLoading] = useState<boolean>(false)

	return (
		<Button loading={isLoading} onClick={() => setLoading(!isLoading)} {...args}>
			{args.children}
		</Button>
	)
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Button',
}
