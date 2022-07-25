import { Container } from '../Container'
import { Text } from '../Text'
import BlueContainer from './BlueContainer'
export default {
	title: 'ska-ui/BlueContainer',
	component: BlueContainer,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<Container>
			<Container row>
				<BlueContainer>
					<Text size='sm'>Container</Text>
				</BlueContainer>
				<BlueContainer flex={2}>
					<Text size='sm'>Container</Text>
				</BlueContainer>
			</Container>
			<Container>
				<BlueContainer flex={3}>
					<Text size='sm'>Container</Text>
				</BlueContainer>
				<BlueContainer flex={'0 0 50px'}>
					<Text size='sm'>Container</Text>
				</BlueContainer>
			</Container>
		</Container>
	)
}

export const FormExample = Template.bind({})
