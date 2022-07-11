import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { Input } from './Input'
export default {
	title: 'ska-ui/Input',
	component: Input,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	const [value, setValue] = useState<string>()

	function handleChange(val: string) {
		setValue(val)
	}

	return (
		<div className='flex flex-wrap gap-5'>
			<Input
				prefix='https://'
				suffix={<FiSettings className='w-4 h-4' />}
				placeholder='Please input your text'
				size='sm'
				onChange={handleChange}
				label='Small'
				id={'baek'}
				className='max-w-lg'
				unstyled
			/>
			<Input
				prefix='https://'
				suffix={<FiSettings className='w-4 h-4' />}
				description='This is a description'
				placeholder='Please input your text'
				size='md'
				onChange={handleChange}
				label='Small'
				id={'baek'}
				className='max-w-lg'
				unstyled
			/>
			<Input
				prefix={<FaSearch className='w-4 h-4' />}
				description='This is a description'
				placeholder='Please input your text'
				size='lg'
				onChange={handleChange}
				label='Small'
				id={'baek'}
				className='max-w-lg'
				unstyled
			/>
			<Input
				prefix='https://'
				suffix={<FiSettings className='w-4 h-4' />}
				placeholder='Please input your text'
				description='This is a description'
				size='sm'
				onChange={handleChange}
				label='Small'
				id={'baek'}
				unstyled
				disabled
			/>
			<Input
				placeholder='Please input your text'
				type='email'
				errorMessage='Please input Email'
				size='md'
				label='Medium'
			/>
			<Input
				suffix='B'
				placeholder='Please input your text'
				size='lg'
				label='Large'
				value='Hello'
				disabled
			/>
			<Input
				prefix={<FiSettings className='w-4 h-4' />}
				invalid
				placeholder='Please input your text'
			/>
			<Input
				prefix={<FiSettings className='w-4 h-4' />}
				invalid
				placeholder='Please input your text'
			/>
			<Input
				prefix={<FiSettings className='w-4 h-4' />}
				unstyled
				invalid
				placeholder='Please input your text'
			/>

			<p>{value}</p>
		</div>
	)
}

export const InputExample = Template.bind({})
