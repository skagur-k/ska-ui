import classNames from 'classnames'
import { DescriptionProps } from './Description.types'

const Description = ({
	title,
	tooltip,
	children,
	className,
	...rest
}: DescriptionProps) => {
	return (
		<div {...rest} className={classNames('description', className)}>
			<div className='flex items-center gap-2 mb-2'>
				{<div className='description-title'>{title}</div>}
			</div>
			<div className='description-content'>{children}</div>
		</div>
	)
}

export default Description
