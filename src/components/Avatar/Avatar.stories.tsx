import Avatar from './Avatar'
export default {
	title: 'ska-ui/Avatar',
	component: Avatar,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Avatar
				name='Nam Hyuck'
				loading='eager'
				src={
					'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
				}
			/>
		</div>
	)
}

export const FormExample = Template.bind({})
