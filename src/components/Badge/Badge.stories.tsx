import Badge from './Badge'
export default {
	title: 'ska-ui/Badge',
	component: Badge,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex gap-5 items-center'>
				<Badge contrast>Badge</Badge>
				<Badge outline>Badge</Badge>
				<Badge>New</Badge>
				<Badge color='gray'>Badge</Badge>
				<Badge color='red'>Badge</Badge>
				<Badge color='blue'>Badge</Badge>
				<Badge color='blue'>1</Badge>
			</div>
			<div className='flex gap-5 items-center'>
				<Badge outline size='sm'>
					1
				</Badge>
				<Badge size='md'>2</Badge>
				<Badge size='lg'>3</Badge>
				<Badge outline color='gray' contrast>
					Badge
				</Badge>
				<Badge color='red' contrast>
					Badge
				</Badge>
				<Badge size='lg' color='blue' outline>
					Badge
				</Badge>
				<Badge color='blue' outline>
					1
				</Badge>
			</div>
			<div className='flex gap-5 items-center'>
				<Badge size='sm' color='blue' contrast>
					Badge
				</Badge>
				<Badge size='md' color='gray' contrast>
					Badge
				</Badge>
				<Badge size='lg' color='red' contrast>
					Badge
				</Badge>
				<Badge size='lg' contrast>
					Badge
				</Badge>
			</div>
		</div>
	)
}

export const FormExample = Template.bind({})
