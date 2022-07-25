import React from 'react'
import { Tag, Tags } from './Tag'
export default {
	title: 'ska-ui/Tag',
	component: Tag,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	const tags = [
		'One',
		'Two',
		'Three',
		'One',
		'Two',
		'Three',
		'One',
		'Two',
		'Three',
	]

	return <Tags tags={tags} />
}

export const FormExample = Template.bind({})
