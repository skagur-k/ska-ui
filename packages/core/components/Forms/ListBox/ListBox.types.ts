import type { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import { DefaultProps } from '../../../types'

import React from 'react'
import { ListState } from 'react-stately'

interface ListBoxProps extends AriaListBoxOptions<unknown>, DefaultProps {
	listBoxRef?: React.RefObject<HTMLUListElement>
	state: ListState<unknown>
	className?: string
}

interface SectionProps {
	section: Node<unknown>
	state: ListState<unknown>
}

interface OptionProps {
	item: Node<unknown>
	state: ListState<unknown>
}

interface OptionContextValue {
	labelProps: React.HTMLAttributes<HTMLElement>
	descriptionProps: React.HTMLAttributes<HTMLElement>
}

type ListBoxType = JSX.Element
type ListBoxOptionType = JSX.Element
type ListBoxSectionType = JSX.Element

export {
	ListBoxType,
	ListBoxOptionType,
	ListBoxSectionType,
	ListBoxProps,
	SectionProps,
	OptionProps,
	OptionContextValue,
}
