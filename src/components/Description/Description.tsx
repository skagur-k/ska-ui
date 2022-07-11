import classNames from 'classnames'
import { Tooltip } from '../Tooltip'
import { FaInfo } from 'react-icons/fa'
import { Description, DescriptionProps } from './Description.types'

const Description = ({
	title,
	tooltip,
	tooltipPosition,
	children,
	className,
	...rest
}: DescriptionProps): Description => {
	return (
		<div {...rest} className={classNames('description', className)}>
			<div className='flex items-center gap-2 mb-2'>
				{<div className='description-title'>{title}</div>}
				{tooltip && (
					<Tooltip
						delay={100}
						message={tooltip}
						position={tooltipPosition}
						className='description-tooltip'>
						<FaInfo className='bg-neutral-300 text-neutral-500 w-4 h-4 p-1 rounded-full ' />
					</Tooltip>
				)}
			</div>
			<div className='description-content'>{children}</div>
		</div>
	)
}

export default Description
