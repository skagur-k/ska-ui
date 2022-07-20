import { TableProps as _TableProps } from '@react-types/table'
import { GridNode } from '@react-types/grid'
import { SelectionBehavior, SelectionMode } from '@react-types/shared'
import React from 'react'
import { TableStateProps, TableState } from '@react-stately/table'

export interface ITableProps<T> extends TableStateProps<T> {
	selectionMode?: SelectionMode
	selectionBehavior?: SelectionBehavior
	as?: keyof JSX.IntrinsicElements
}

type TableNativeAttrs = Omit<
	React.TableHTMLAttributes<unknown>,
	keyof ITableProps<object> | 'children'
>

export type TableProps<T = object> = ITableProps<T> & TableNativeAttrs

// Row Group Props

export type ITableRowGroupProps = {
	as?: keyof JSX.IntrinsicElements
}

export type TableRowGroupNativeAttrs = Omit<
	React.HTMLAttributes<unknown>,
	keyof ITableRowGroupProps
>

export type TableRowGroupProps = ITableRowGroupProps &
	TableRowGroupNativeAttrs & { css?: CSSStyleRule }

// Header Row Props

export interface ITableHeaderRowProps<T> {
	item: GridNode<T>
	state: TableState<T>
	as?: keyof JSX.IntrinsicElements
}

type TableHeaderRowNativeAttrs = Omit<
	React.HTMLAttributes<unknown>,
	keyof ITableHeaderRowProps<any>
>

export type TableHeaderRowProps<T = unknown> = ITableHeaderRowProps<T> &
	TableHeaderRowNativeAttrs

export interface ITableSelectAllCheckboxProps<T> {
	column: GridNode<T>
	state: TableState<T>
	as?: keyof JSX.IntrinsicElements
}

type TableSelectAllCheckboxNativeAttrs = Omit<
	React.HTMLAttributes<unknown>,
	keyof ITableSelectAllCheckboxProps<any>
>

export interface TableSelectAllCheckboxProps<T = unknown>
	extends ITableSelectAllCheckboxProps<T>,
		TableSelectAllCheckboxNativeAttrs {}

export interface ITableColumnHeaderProps<T> {
	column: GridNode<T>
	state: TableState<T>
	as?: keyof JSX.IntrinsicElements
}

export interface TableColumnHeaderNativeAttrs
	extends Omit<
		React.HTMLAttributes<unknown>,
		keyof ITableColumnHeaderProps<any>
	> {}

export interface TableColumnHeaderProps<T = unknown>
	extends ITableColumnHeaderProps<T>,
		TableColumnHeaderNativeAttrs {}
