import { AriaTabListProps, AriaTabPanelProps } from '@react-types/tabs'
import { Node } from '@react-types/shared'
import { TabListState } from 'react-stately'
import { DefaultProps } from '../../types'

export interface TabProps<T> extends DefaultProps {
	item: Node<T>
	state: TabListState<T>
	focused?: boolean
}
export interface TabsProps<T> extends AriaTabListProps<T> {}
export interface TabPanelProps<T>
	extends AriaTabPanelProps,
		Omit<DefaultProps, 'children'> {
	state: TabListState<unknown>
}
