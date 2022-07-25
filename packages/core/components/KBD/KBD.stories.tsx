import KBD from './KBD'
export default {
	title: 'ska-ui/KBD',
	component: KBD,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex gap-5 flex-wrap'>
			<KBD mac meta />
			<KBD meta />
			<KBD mac meta shift alt ctrl />
			<KBD meta shift />
			<KBD mac shift />
			<KBD alt />
			<KBD ctrl>A</KBD>
			<KBD enter />
			<KBD>/</KBD>
			<KBD deletekey />
			<KBD alt ctrl>
				DEL
			</KBD>
		</div>
	)
}

export const FormExample = Template.bind({})
