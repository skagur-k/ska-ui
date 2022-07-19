import classNames from 'classnames'
import {
	TableColumnHeaderProps,
	TableHeaderRowProps,
	TableProps,
	TableRowGroupProps,
} from './Table.types'
import {
	Cell,
	Column,
	Row,
	TableBody,
	TableHeader,
	useTableState,
} from '@react-stately/table'
import React, { useImperativeHandle } from 'react'
import {
	mergeProps,
	useFocusRing,
	useTable,
	useTableColumnHeader,
	useTableHeaderRow,
	useTableRowGroup,
} from 'react-aria'
import TableSelectAllCheckbox from './TableSelectAllCheckbox'

const Table = React.forwardRef<HTMLTableElement, TableProps>(
	(props, ref: React.Ref<HTMLTableElement | null>) => {
		const { selectionMode, selectionBehavior } = props
		const state = useTableState({
			...props,
			showSelectionCheckboxes:
				selectionMode === 'multiple' && selectionBehavior !== 'replace',
		})

		const tableRef = React.useRef<HTMLTableElement | null>(null)
		React.useImperativeHandle(ref, () => tableRef?.current)

		const { collection } = state
		const { gridProps } = useTable(props, state, tableRef)

		return (
			<table ref={tableRef} {...gridProps} {...props}>
				<TableRowGroup>
					{collection.headerRows.map((headerRow) => (
						<TableHeaderRow
							key={headerRow?.key}
							item={headerRow}
							state={state}>
							{[...headerRow.childNodes].map((column) =>
								column?.props?.isSelectionCell ? (
									<TableSelectAllCheckbox
										key={column?.key}
										column={column}
										state={state}
									/>
								) : (
									<TableColumnHeader
										key={column?.key}
										column={column}
										state={state}
									/>
								)
							)}
						</TableHeaderRow>
					))}
				</TableRowGroup>
			</table>
		)
	}
)
// Table.displayName = 'SKA-UI - Table'
// Table.toString = () => '.skaui-table'

const TableRowGroup: React.FC<React.PropsWithChildren<TableRowGroupProps>> = ({
	children,
	...props
}: TableRowGroupProps) => {
	const {
		rowGroupProps,
	}: {
		rowGroupProps: Omit<
			React.HTMLAttributes<unknown>,
			keyof TableRowGroupProps
		>
	} = useTableRowGroup()
	return <thead {...mergeProps(props, rowGroupProps)}>{children}</thead>
}

// TableRowGroup.displayName = 'SKA-UI - TableRowGroup'
// TableRowGroup.toString = () => '.skaui-table-row-group'

const TableHeaderRow = React.forwardRef<
	HTMLTableRowElement,
	React.PropsWithChildren<TableHeaderRowProps>
>(
	(
		{ children, item, state, ...props },
		ref: React.Ref<HTMLTableRowElement | null>
	) => {
		const tableHeaderRowRef = React.useRef<HTMLTableRowElement | null>(null)
		useImperativeHandle(ref, () => tableHeaderRowRef?.current)
		const {
			rowProps,
		}: {
			rowProps: Omit<
				React.HTMLAttributes<unknown>,
				keyof TableHeaderRowProps<unknown>
			>
		} = useTableHeaderRow({ node: item }, state, tableHeaderRowRef)
		return (
			<tr {...mergeProps(props, rowProps)} ref={tableHeaderRowRef}>
				{children}
			</tr>
		)
	}
)

// TableHeaderRow.displayName = 'SKA-UI - TableHeaderRow'
// TableHeaderRow.toString = () => '.skaui-table-header-row'

const TableColumnHeader = React.forwardRef<
	HTMLTableCellElement,
	TableColumnHeaderProps
>((props, ref: React.Ref<HTMLTableCellElement | null>) => {
	const { column, state } = props
	const tableColumnHeaderRef = React.useRef<HTMLTableCellElement | null>(null)
	useImperativeHandle(ref, () => tableColumnHeaderRef?.current)
	const { focusProps } = useFocusRing()

	const {
		columnHeaderProps,
	}: {
		columnHeaderProps: Omit<
			React.HTMLAttributes<unknown>,
			keyof TableColumnHeaderProps<unknown>
		>
	} = useTableColumnHeader({ node: column }, state, tableColumnHeaderRef)

	const arrowIcon =
		state.sortDescriptor?.direction === 'ascending' ? '▲' : '▼'

	return (
		<th
			{...mergeProps(props, columnHeaderProps, focusProps)}
			colSpan={column.colspan}
			ref={tableColumnHeaderRef}>
			{column.rendered}
			{column.props.allowsSorting && (
				<span
					aria-hidden='true'
					className={classNames([
						state.sortDescriptor?.column === column.key
							? 'visible'
							: 'invisible',
					])}>
					{arrowIcon}
				</span>
			)}
		</th>
	)
})

// TableColumnHeader.displayName = 'SKA-UI - TableColumnHeader'
// TableColumnHeader.toString = () => 'skaui-table-column-header'

export default Table
