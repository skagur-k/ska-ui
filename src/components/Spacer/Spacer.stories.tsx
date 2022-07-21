import { Container } from '../Container'
import Spacer from './Spacer'
export default {
	title: 'ska-ui/Spacer',
	component: Spacer,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<Container row>
			<Container style={{ background: 'var(--geist-foreground)' }} />
			<Spacer y={1} />
			<Container style={{ background: 'var(--geist-foreground)' }} />
			<Spacer y={2} />
			<Container>
				<Container style={{ background: 'var(--geist-foreground)' }} />
				<Spacer />
				<Container style={{ background: 'var(--geist-foreground)' }} />
			</Container>
		</Container>
	)
}

export const FormExample = Template.bind({})
