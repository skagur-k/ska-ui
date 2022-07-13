import { Text } from '../Text'
import BlueContainer from './BlueContainer'
export default {
	title: 'ska-ui/BlueContainer',
	component: BlueContainer,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex gap-2'>
			<div>
				<BlueContainer>
					<Text size='sm'>Container</Text>
				</BlueContainer>
				<BlueContainer flex={2}>
					<Text size='sm'>Container</Text>
				</BlueContainer>
			</div>
			<BlueContainer flex={3}>
				<Text size='sm'>Container</Text>
			</BlueContainer>
			<BlueContainer flex={'0 0 50px'}>
				<Text size='sm'>Container</Text>
			</BlueContainer>
		</div>
	)
}

export const FormExample = Template.bind({})
