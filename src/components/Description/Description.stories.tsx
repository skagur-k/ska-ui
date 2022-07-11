import Description from './Description'
export default {
	title: 'ska-ui/Description',
	component: Description,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Description
				title='Section Title'
				tooltip='This is tooltip content'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquam, a necessitatibus. Dicta eum consectetur eligendi nobis,
				sapiente praesentium quia minima odio perferendis quos dolore
				veritatis, ullam, consequuntur accusamus earum ad.
			</Description>
		</div>
	)
}

export const FormExample = Template.bind({})
