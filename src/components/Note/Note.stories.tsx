import Note from './Note'
export default {
	title: 'ska-ui/Note',
	component: Note,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-10 px-10'>
			<div className='flex gap-5'>
				<Note size='sm'>A small note.</Note>
				<Note>A default note.</Note>
				<Note size='lg'>A large note.</Note>
			</div>
			<div className='flex flex-col gap-5'>
				<Note>Default</Note>
				<Note action='Upgrade'>Default with action</Note>

				<Note label='Success' action='Action' size='sm' type='success'>
					Small Success
				</Note>
				<Note label='Warning' action='Action' size='sm' type='warning'>
					Small Warning
				</Note>
				<Note label='Error' size='sm' type='error'>
					Small Error
				</Note>
				<Note label='Success' action='Action' type='success'>
					Hello World!
				</Note>
				<Note label='Warning' type='warning'>
					Hello World!
				</Note>
				<Note action='Action' type='error'>
					Hello World!
				</Note>
				<Note label='Success' size='lg' type='success'>
					Large Success
				</Note>
				<Note label='Warning' action='Action' size='lg' type='warning'>
					Large Warning
				</Note>
				<Note label='Error' action='Action' size='lg' type='error'>
					Large Error
				</Note>
			</div>
			<div className='flex flex-col gap-5'>
				<Note>A default note.</Note>
				<Note filled>A default note.</Note>
				<Note type='secondary'>A default note.</Note>
				<Note type='secondary' filled>
					A default note.
				</Note>
				<Note filled type='error'>
					A default note.
				</Note>
				<Note filled type='warning'>
					A default note.
				</Note>
				<Note filled type='success'>
					A default note.
				</Note>
			</div>
			<div className='flex flex-col gap-5'>
				<Note type='secondary' contrast>
					A default note.
				</Note>
				<Note contrast type='error'>
					A default note.
				</Note>
				<Note contrast type='warning'>
					A default note.
				</Note>
				<Note contrast filled type='success'>
					A default note.
				</Note>
			</div>
		</div>
	)
}

export const FormExample = Template.bind({})
