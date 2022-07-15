import { Item, Section } from 'react-stately'
import Select from './Select'
export default {
	title: 'ska-ui/Select',
	component: Select,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Select label='Favorite Animal'>
				<Item key='red panda'>Red Panda</Item>
				<Item key='cat'>Cat</Item>
				<Item key='dog'>Dog</Item>
				<Section title='Section' key='aardvark'>
					<Item key='kangaroo'>Kangaroo</Item>
					<Item key='snake'>Snake</Item>
				</Section>
			</Select>
		</div>
	)
}

export const FormExample = Template.bind({})
