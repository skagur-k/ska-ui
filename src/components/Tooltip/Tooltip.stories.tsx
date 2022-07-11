import { Button } from '../Button'
import Tooltip from './Tooltip'
export default {
	title: 'ska-ui/Tooltip',
	component: Tooltip,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Tooltip
				delay={500}
				message='This is tooltip. This is a long tooltip messageThis is tooltip. This is a long tooltip messageThis is tooltip. This is a long tooltip messageThis is tooltip. This is a long tooltip messageThis is tooltip. This is a long tooltip messageThis is tooltip. This is a long tooltip messageThis is tooltip. This is a long tooltip message'>
				<Button>Hello</Button>
			</Tooltip>
		</div>
	)
}

export const FormExample = Template.bind({})
