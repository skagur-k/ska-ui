import { Text } from '../Text'
import BlueContainer from './BlueContainer'
export default {
	title: 'ska-ui/BlueContainer',
	component: BlueContainer,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex'>
			<BlueContainer style={{ height: 100 }}>
				<Text size='sm'>Container</Text>
			</BlueContainer>
			<BlueContainer style={{ alignSelf: 'flex-start' }}>
				<Text size='sm'>Container</Text>
			</BlueContainer>
			<BlueContainer style={{ alignSelf: 'center' }}>
				<Text size='sm'>Container</Text>
			</BlueContainer>
			<BlueContainer textAlign='center' style={{ alignSelf: 'flex-end' }}>
				<Text size='sm'>Container</Text>
			</BlueContainer>
		</div>
	)
}

export const FormExample = Template.bind({})
