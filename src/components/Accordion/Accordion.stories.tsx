import Accordian from './Accordion'
export default {
	title: 'ska-ui/Accordian',
	component: Accordian,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	const items = [
		{
			title: 'Question 1',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
		{
			title: 'Question 2',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
		{
			title: 'Question 3',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
		{
			title: 'Question 4',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
	]

	return (
		<div className='flex flex-col gap-5'>
			<Accordian items={items} />
		</div>
	)
}

export const FormExample = Template.bind({})
