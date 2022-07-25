import { Tag } from './Tag'
import { DefaultProps } from '../../types'

export interface TagProps extends DefaultProps {
	id: string
	key: string
	onRemove?: (id: string) => void
}
export interface TagsProps {
	tags: string[]
}
