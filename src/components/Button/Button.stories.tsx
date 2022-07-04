import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'
import { AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { FaHome, FaGithub } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ska-ui/Button',
	component: Button,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-4'>
			<Button disabled rounded icon={<AiOutlineSetting />}>
				Settings
			</Button>
			<Button loading rounded icon={<AiOutlineSetting />}>
				This is a Button!
			</Button>
			<Button
				focusafterclick={false}
				notification
				icon={<AiOutlineSetting />}
				size='xs'></Button>
			<Button icon={<AiOutlineSetting />} size='xs'>
				Settings
			</Button>
			<Button notification icon={<AiOutlineSetting />} size='sm'>
				Settings
			</Button>
			<Button rounded icon={<AiOutlineSetting />} size='md'>
				Settings
			</Button>
			<Button loading icon={<AiOutlineSetting />} size='lg'>
				Settings
			</Button>
			<Button loading icon={<AiOutlineSetting />} size='block'>
				Settings
			</Button>
			<Button rounded icon={<IoLogoVercel />} type='secondary' size='sm'>
				Vercel
			</Button>
			<Button disabled icon={<IoLogoVercel />} type='secondary' size='sm'>
				Vercel
			</Button>

			<div className='flex gap-4'>
				<Button icon={<AiOutlineSetting />} size='xs'></Button>
				<Button icon={<AiOutlineSetting />} size='sm'></Button>
				<Button icon={<AiOutlineSetting />} size='md'></Button>
				<Button icon={<AiOutlineSetting />} size='lg'></Button>
				<Button
					rounded
					icon={<AiOutlineSetting />}
					color='red'
					loading
					size='xs'></Button>
				<Button
					icon={<AiOutlineSetting />}
					color='red'
					loading
					size='sm'></Button>
				<Button
					icon={<AiOutlineSetting />}
					color='red'
					size='md'></Button>
				<Button
					icon={<AiOutlineSetting />}
					color='red'
					size='lg'></Button>
			</div>

			<div className='flex gap-4'>
				<Button
					notification
					loading
					icon={<FaHome />}
					size='xs'></Button>
				<Button loading icon={<FaHome />} size='sm'></Button>
				<Button loading icon={<FaHome />} size='md'></Button>
				<Button loading icon={<FaHome />} size='lg'></Button>
				<Button
					loading
					icon={<FaHome />}
					color='sky'
					size='xs'></Button>
				<Button
					loading
					icon={<FaHome />}
					color='sky'
					size='sm'></Button>
				<Button
					disabled
					icon={<FaHome />}
					color='sky'
					size='md'></Button>
				<Button icon={<FaHome />} color='sky' size='lg'></Button>
			</div>
			<div className='flex gap-4'>
				<Button icon={<FaGithub />} size='xs'></Button>
				<Button icon={<FaGithub />} size='sm'></Button>
				<Button disabled icon={<FaGithub />} size='md'></Button>
				<Button
					notification
					loading
					icon={<FaGithub />}
					size='lg'></Button>
			</div>
			<div className='flex gap-4'>
				<Button icon={<AiOutlineUser />} size='xs'></Button>
				<Button icon={<AiOutlineUser />} size='sm'></Button>
				<Button icon={<AiOutlineUser />} size='md'></Button>
				<Button icon={<AiOutlineUser />} size='lg'></Button>
			</div>

			<Button icon={<AiOutlineSetting />} variant='ghost' size='sm'>
				SM RED
			</Button>
			<Button
				icon={<AiOutlineSetting />}
				variant='ghost'
				size='sm'
				color='red'>
				SM RED
			</Button>
			<Button
				icon={<AiOutlineSetting />}
				variant='ghost'
				size='md'
				color='blue'>
				MD RED
			</Button>
			<Button
				icon={<AiOutlineSetting />}
				variant='ghost'
				size='lg'
				color='blue'>
				LG BLUE
			</Button>

			{/* <Button size='sm' notification icon={<AiOutlineSetting />} />
			<Button size='md' icon={<AiOutlineSetting />} />
			<Button size='lg' focusafterclick icon={<AiOutlineSetting />} /> */}
			{/* <Button size='md' variant='ghost' {...args}>
				{args.children}
			</Button>
			<Button size='lg' notification variant='ghost' {...args}>
				{args.children}
			</Button>
			<Button variant='ghost' block {...args}>
				{args.children}
			</Button>

			<Button size='sm' notification variant='shadow' {...args}>
				{args.children}
			</Button>
			<Button size='md' variant='shadow' {...args}>
				{args.children}
			</Button>
			<Button size='lg' variant='shadow' {...args}>
				{args.children}
			</Button>
			<Button variant='shadow' block {...args}>
				{args.children}
			</Button> */}
		</div>
	)
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
// 	children: 'Settings',
// 	icon: <AiOutlineSetting />,
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
// 	children: 'Secondary',
// 	type: 'secondary',
// }

// export const Success = Template.bind({})
// Success.args = {
// 	children: 'Success',
// 	type: 'success',
// }

// export const Error = Template.bind({})
// Error.args = {
// 	children: 'Error',
// 	type: 'error',
// }

// export const Warning = Template.bind({})
// Warning.args = {
// 	children: 'Warning',
// 	type: 'warning',
// }
