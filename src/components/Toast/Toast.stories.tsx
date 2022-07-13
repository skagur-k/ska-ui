import { Button } from '../Button'
import { useEffect, useRef } from 'react'
import { Toast, ToastManager } from '.'
export default {
	title: 'ska-ui/Toast',
	component: ToastManager,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	const toast = useRef<ToastManagerHandle>(null)

	return (
		<div className='flex flex-col gap-5'>
			<Button
				onClick={() =>
					toast.current?.addMessage({
						action: 'Undo',
						message: 'Hello World!',
					})
				}>
				Info
			</Button>
			<Button
				onClick={() =>
					toast.current?.addMessage({
						message: 'Success!',
						action: 'Undo',
						type: 'success',
					})
				}>
				Success
			</Button>
			<Button
				onClick={() =>
					toast.current?.addMessage({
						message:
							'This is an Error message, and it can be pretty long. what would happen if it spans multiple lines?!',
						type: 'error',
						cancelAction: 'Cancel',
						action: 'Undo',
					})
				}>
				Error
			</Button>
			<Button
				onClick={() =>
					toast.current?.addMessage({
						message: 'Warning!',
						action: 'Undo',
						cancelAction: 'Cancel',
						type: 'warning',
					})
				}>
				Warning
			</Button>
			<ToastManager position='BOTTOM_RIGHT' ref={toast} />
		</div>
	)
}

export const FormExample = Template.bind({})
