import type { ItemElement } from '@react-types/shared'
import { Item as _Item, Section as _Section } from 'react-stately'
import { Avatar } from '../Avatar'
import { ItemProps, SectionProps } from './Shared.types'

export const Item = <T extends object>(props: ItemProps<T>): ItemElement<T> => {
	const { children, avatar, ...rest } = props
	return <_Item {...rest}>{children}</_Item>
}

Item.getCollectionNode = function* <T extends object>(props: ItemProps<T>) {
	const { children, avatar, label, ...rest } = props

	yield {
		element: (
			<_Item title={label} {...rest}>
				{avatar && <Avatar size='xs' src={avatar}></Avatar>}
				<div className='flex flex-col items-start'>
					{props.children}
				</div>
			</_Item>
		) as ItemElement<T>,
	}
}

export const Section = <T extends object>(
	props: SectionProps<T>
): JSX.Element => {
	return <_Section {...props} />
}

Section.getCollectionNode = function* <T extends object>(
	props: SectionProps<T>
) {
	yield {
		element: <_Section {...props} />,
	}
}
