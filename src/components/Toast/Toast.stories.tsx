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
						message: 'Hello World!',
					})
				}>
				Notification
			</Button>
			<ToastManager position='BOTTOM_RIGHT' ref={toast} />
		</div>
	)
}

export const FormExample = Template.bind({})
