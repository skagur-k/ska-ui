import classNames from 'classnames'
import React from 'react'
import { FiX } from 'react-icons/fi'
import { TagProps, TagsProps } from './Tag.types'

const Tag = (props: TagProps): JSX.Element => {
	const { children, id, key, onRemove } = props

	return (
		<div id={id} key={key} className={classNames('tag')}>
			<div className='tag-text'>{children}</div>
			<div className='tag-remove' onClick={() => onRemove!(id)}>
				<FiX />
			</div>
		</div>
	)
}

const Tags = (props: TagsProps): JSX.Element => {
	const { tags } = props
	const [tagList, setTagsList] = React.useState(tags)
	React.useEffect(() => {
		setTagsList([...new Set(tagList)])
	}, [tagList])
	return (
		<div className='tags'>
			{tagList.map((tag) => (
				<Tag
					id={tag}
					key={tag}
					onRemove={(id) =>
						setTagsList(tagList.filter((t) => t !== id))
					}>
					{tag}
				</Tag>
			))}
		</div>
	)
}

export { Tag, Tags }
