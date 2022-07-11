import Text, { CodeBlock, InlineCode } from './Text'
export default {
	title: 'ska-ui/Text',
	component: Text,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex'>
			<Text>
				It’s a matter of running <InlineCode>Vercel</InlineCode> to get
				it up and running instantly.
			</Text>
		</div>
	)
}

export const FormExample = Template.bind({})
