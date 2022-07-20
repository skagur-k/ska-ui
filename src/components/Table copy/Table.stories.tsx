import Table from './Table'
import {
	Cell as TableCell,
	Column as TableColumn,
	Row as TableRow,
	TableBody,
	TableHeader,
} from '@react-stately/table'

export default {
	title: 'ska-ui/Table',
	component: Table,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Table
			sortDescriptor={}
				aria-label='Example static collection table'
				selectionMode='multiple'
				style={{ height: '210px', minWidth: '440px' }}
				disabledKeys={[3]}>
				<TableHeader>
					<TableColumn>Name</TableColumn>
					<TableColumn>Type</TableColumn>
					<TableColumn>Date Modified</TableColumn>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>Games</TableCell>
						<TableCell>File folder</TableCell>
						<TableCell>6/7/2020</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Program Files</TableCell>
						<TableCell>File folder</TableCell>
						<TableCell>4/7/2021</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>bootmgr</TableCell>
						<TableCell>System file</TableCell>
						<TableCell>11/20/2010</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>log.txt</TableCell>
						<TableCell>Text Document</TableCell>
						<TableCell>1/18/2016</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}

export const FormExample = Template.bind({})
