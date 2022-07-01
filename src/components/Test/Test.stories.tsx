import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Test from './Test'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ska-ui/Test',
	component: Test,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-4'>
			<Test />
		</div>
	)
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
