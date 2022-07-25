import Popover from './Popover'
export default {
	title: 'ska-ui/Popover',
	component: Popover,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return <div className='flex flex-col gap-5'></div>
}

export const FormExample = Template.bind({})
