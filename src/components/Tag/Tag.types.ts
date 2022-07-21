import { Tag } from './Tag'

export interface TagProps extends DefaultProps {
	id: string
	key: string
	onRemove?: (id: string) => void
}
export interface TagsProps {
	tags: string[]
}
