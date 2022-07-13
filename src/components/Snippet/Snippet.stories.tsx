import { ToastManager } from 'components/Toast'
import { useToast } from 'hooks'
import Snippet from './Snippet'
export default {
	title: 'ska-ui/Snippet',
	component: Snippet,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Snippet
				width='600px'
				text={[
					'skagur @ Ubuntu in ~/dev/react-ska-ui on git:twcss o [10:01:56]',
					'cd dev',
				]}
			/>
			<Snippet prompt={false} text={['npm init next-app', 'cd dev']} />
			<Snippet prompt={false} text={['npm init next-app']} />
			<Snippet dark text={['npm init next-app']} />
		</div>
	)
}

export const FormExample = Template.bind({})
