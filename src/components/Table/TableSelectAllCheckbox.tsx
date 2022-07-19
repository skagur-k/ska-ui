import { Column } from '@react-stately/table'
import React from 'react'
import {
	mergeProps,
	useCheckbox,
	useFocusRing,
	useTableColumnHeader,
	useTableSelectAllCheckbox,
	VisuallyHidden,
} from 'react-aria'
import { useToggleState } from 'react-stately'
import { TableSelectAllCheckboxProps } from './Table.types'

const TableSelectAllCheckbox = React.forwardRef<
	HTMLTableCellElement,
	TableSelectAllCheckboxProps
>((props, ref: React.Ref<HTMLTableCellElement | null>) => {
	const { column, state, ...rest } = props
	const tableCellRef = React.useRef<HTMLTableCellElement | null>(null)

	React.useImperativeHandle(ref, () => tableCellRef?.current)

	const isSingleSelectionMode =
		state.selectionManager.selectionMode === 'single'
	const {
		columnHeaderProps,
	}: {
		columnHeaderProps: Omit<
			React.HTMLAttributes<unknown>,
			keyof TableSelectAllCheckboxProps<unknown>
		>
	} = useTableColumnHeader({ node: column }, state, tableCellRef)
	const { checkboxProps } = useTableSelectAllCheckbox(state)
	const { focusProps } = useFocusRing()
	const inputRef = React.useRef<HTMLInputElement | null>(null)
	const { inputProps } = useCheckbox(
		checkboxProps,
		useToggleState(checkboxProps),
		inputRef
	)

	return (
		<th {...mergeProps(columnHeaderProps, focusProps, props)}>
			{isSingleSelectionMode ? (
				<VisuallyHidden>{inputProps['aria-label']}</VisuallyHidden>
			) : (
				<input {...inputProps} ref={inputRef} />
			)}
		</th>
	)
})

// TableSelectAllCheckbox.displayName = 'SKA-UI - TableSelectAllCheckbox'
// TableSelectAllCheckbox.toString = () => 'skaui-table-select-all-checkbox'

export default TableSelectAllCheckbox
