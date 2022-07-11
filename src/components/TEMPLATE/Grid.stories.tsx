import Description from './Grid'
export default {
	title: 'ska-ui/Description',
	component: Description,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return <div className='flex flex-col gap-5'></div>
}

export const FormExample = Template.bind({})
