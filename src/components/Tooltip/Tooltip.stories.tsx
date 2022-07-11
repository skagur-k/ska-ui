import Tooltip from './Tooltip'
export default {
	title: 'ska-ui/Tooltip',
	component: Tooltip,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return <div className='flex flex-col gap-5'></div>
}

export const FormExample = Template.bind({})
