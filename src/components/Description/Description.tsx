import classNames from 'classnames'
import { FaInfo } from 'react-icons/fa'
import { Description, DescriptionProps } from './Description.types'

const Badge = ({
	title,
	tooltip,
	children,
	className,
	...rest
}: DescriptionProps): Description => {
	return (
		<div {...rest} className={classNames('description', className)}>
			<div className='description-title'>
				{title}
				{tooltip && (
					<span>
						{
							<FaInfo className='bg-neutral-300 text-neutral-500 w-4 h-4 p-1 rounded-full ' />
						}
					</span>
				)}
			</div>
			<div className='description-content'>{children}</div>
		</div>
	)
}

export default Badge
