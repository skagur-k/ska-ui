import Checkbox from './Checkbox'
export default {
	title: 'ska-ui/Checkbox',
	component: Checkbox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Checkbox
				value='one'
				caption='Hello World'
				defaultSelected
				size='sm'>
				Checkbox
			</Checkbox>

			<Checkbox
				caption='Hello World'
				value='one'
				rounded
				defaultSelected
				size='sm'>
				Checkbox
			</Checkbox>

			<Checkbox caption='Hello World' value='one' size='md'>
				Checkbox
			</Checkbox>
		</div>
	)
}

export const Example = Template.bind({})
