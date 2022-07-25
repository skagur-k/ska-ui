import Image from './Image'
export default {
	title: 'ska-ui/Image',
	component: Image,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Image
				caption='Caption: This is a caption'
				src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
			/>
			<Image
				caption='Caption: This is a caption'
				height={300}
				src='https://assets.vercel.com/image/upload/q_auto/front/assets/design/components/triangle.gif'
			/>
		</div>
	)
}

export const FormExample = Template.bind({})
