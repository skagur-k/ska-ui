import Dialog from './Dialog'
export default {
	title: 'ska-ui/Dialog',
	component: Dialog,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return <div className='flex flex-col gap-5'></div>
}

export const FormExample = Template.bind({})
