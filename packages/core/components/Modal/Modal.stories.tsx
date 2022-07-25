import React from 'react'
import { OverlayContainer } from 'react-aria'
import { Button } from '../Button'
import Modal from './Modal'
export default {
	title: 'ska-ui/Modal',
	component: Modal,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	const [isOpen, setOpen] = React.useState(false)

	return (
		<div className='flex flex-col gap-5'>
			<Button onClick={() => setOpen(true)}>Open Modal</Button>
			<OverlayContainer>
				<Modal
					confirmLabel='Confirm'
					isOpen={isOpen}
					title='Hello World!'
					subtitle='This is a subtitle'
					onConfirm={() => alert('Confirmed!')}
					onClose={() => setOpen(false)}>
					This is a modal
				</Modal>
			</OverlayContainer>
		</div>
	)
}

export const FormExample = Template.bind({})
