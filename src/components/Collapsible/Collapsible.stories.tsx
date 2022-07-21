import { Collapsible } from '.'
export default {
	title: 'ska-ui/Collapsible',
	component: Collapsible,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Collapsible title='Question 1'>Hello World!</Collapsible>
		</div>
	)
}

export const FormExample = Template.bind({})
