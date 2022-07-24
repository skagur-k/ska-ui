import { FiAlertTriangle } from 'react-icons/fi'
import { SiJavascript } from 'react-icons/si'
import TreeView, { File, Folder } from './TreeView'
export default {
	title: 'ska-ui/TreeView',
	component: TreeView,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<TreeView title='ska-ui folder structure'>
				<Folder name='pages' open>
					<File name='dashboard.js' />
					<File name='about.js' />
					<File name='index.js' />
				</Folder>
				<File name='README.md' />
				<File name='.gitignore' />
			</TreeView>
			<TreeView title='ska-ui folder structure'>
				<Folder name='components'>
					<Folder name='typography'>
						<File name='paragraph.js' />
						<File name='code.js' />
						<File name='heading.js' />
					</Folder>
					<File name='button.js' />
				</Folder>
				<Folder name='pages'>
					<File name='dashboard.js' />
					<File name='about.js' />
					<File name='index.js' icon={<FiAlertTriangle />} />{' '}
					<Folder name='pages'>
						<File name='dashboard.js' />
						<File name='about.js' />
						<File name='index.js' icon={<FiAlertTriangle />} />{' '}
						<Folder name='pages'>
							<File name='dashboard.js' />
							<File name='about.js' />
							<File
								name='index.js'
								icon={<FiAlertTriangle />}
							/>{' '}
							<Folder name='pages'>
								<File name='dashboard.js' isSelected />
								<File name='about.js' />
								<File
									name='index.js'
									icon={<FiAlertTriangle />}
								/>
							</Folder>
						</Folder>
					</Folder>
				</Folder>
				<File name='dashboard.js' isSelected />
				<File name='README.md' />
				<File name='.gitignore' icon={<SiJavascript />} />
			</TreeView>
		</div>
	)
}

export const FormExample = Template.bind({})
