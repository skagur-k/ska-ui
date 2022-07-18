import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import {
	useFocus,
	useFocusRing,
	useTab,
	useTabList,
	useTabPanel,
} from 'react-aria'
import { useTabListState } from 'react-stately'
import type { TabProps, TabsProps, TabPanelProps } from './Tabs.types'

const Tabs = <T extends object>(props: TabsProps<T>): JSX.Element => {
	const state = useTabListState(props)
	const ref = React.useRef<HTMLDivElement>(null)
	const { tabListProps } = useTabList(props, state, ref)
	const { focusProps, isFocusVisible } = useFocusRing({ within: true })

	return (
		<div className={classNames('tabs')}>
			<div
				{...tabListProps}
				{...focusProps}
				ref={ref}
				className={classNames(`tabs-list`)}>
				{[...state.collection].map((item) => (
					<Tab
						key={item.key}
						item={item}
						state={state}
						className={classNames(
							'tabs-list-tab',
							isFocusVisible && 'tabs-list-tab-focused'
						)}
					/>
				))}
			</div>
			<TabPanel key={state.selectedItem?.key} state={state} />
		</div>
	)
}

const Tab = <T extends object>({
	item,
	state,
	className,
}: TabProps<T>): JSX.Element => {
	const { key, rendered } = item
	const ref = React.useRef(null)
	const { tabProps } = useTab({ key }, state, ref)
	const isSelected = state.selectedKey === key
	const isDisabled = state.disabledKeys.has(key)

	return (
		<div
			{...tabProps}
			ref={ref}
			className={classNames(
				[
					isSelected && 'tabs-list-tab-selected',
					isDisabled && 'tabs-list-tab-disabled',
				],
				className
			)}>
			{rendered}
		</div>
	)
}

const TabPanel = ({
	state,
	className,
	...props
}: TabPanelProps<unknown>): JSX.Element => {
	const ref = React.useRef(null)
	const { focusProps, isFocusVisible } = useFocusRing()
	const { tabPanelProps } = useTabPanel(props, state, ref)
	return (
		<div
			{...tabPanelProps}
			{...focusProps}
			ref={ref}
			className={classNames(
				'tabs-panel',
				isFocusVisible && 'tabs-panel-focused'
			)}>
			{state.selectedItem?.props.children}
		</div>
	)
}

export default Tabs
