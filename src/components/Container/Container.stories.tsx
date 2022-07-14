import { Text } from '../Text'
import { BlueContainer } from '../BlueContainer'
import Container from './Container'
export default {
	title: 'ska-ui/Container',
	component: Container,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<Container>
			<BlueContainer>
				<Text size='sm'>Left</Text>
			</BlueContainer>

			<BlueContainer>
				<Text size='sm'>Right</Text>
			</BlueContainer>
		</Container>
	)
}

export const FormExample = Template.bind({})
