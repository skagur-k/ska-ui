import StatusDot from './StatusDot'
export default {
	title: 'ska-ui/StatusDot',
	component: StatusDot,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<StatusDot type='positive'>Ready</StatusDot>
			<StatusDot type='negative'>Error</StatusDot>
			<StatusDot type='info'>Info</StatusDot>
			<StatusDot type='neutral'>Neutral</StatusDot>
			<StatusDot type='notice'>Notice</StatusDot>
		</div>
	)
}

export const FormExample = Template.bind({})
