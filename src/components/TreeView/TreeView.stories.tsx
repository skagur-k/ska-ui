import TreeView, { File, Folder } from './TreeView'
export default {
	title: 'ska-ui/TreeView',
	component: TreeView,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<TreeView>
				<Folder name='Components'>
					<File name='package.js' />
					<File name='file2.js' />
					<File name='picture.js' />
					<Folder name='Components'>
						<File name='package.js' />
						<File name='file2.js' />
						<File name='picture.js' />
					</Folder>
				</Folder>
				<Folder name='Hooks'>
					<File name='package.js' />
					<File name='file2.js' />
					<File name='picture.js' />
				</Folder>
				<Folder name='Utils'>
					<File name='package.js' />
					<File name='file2.js' />
					<File name='picture.js' />
				</Folder>
				<File name='package.js' />
				<File name='file2.js' />
				<File name='picture.js' />
			</TreeView>
		</div>
	)
}

export const FormExample = Template.bind({})
