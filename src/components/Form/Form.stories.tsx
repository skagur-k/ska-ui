import { Form } from './Form'
export default {
	title: 'ska-ui/Form',
	component: Form,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Form />
		</div>
	)
}

export const FormExample = Template.bind({})
