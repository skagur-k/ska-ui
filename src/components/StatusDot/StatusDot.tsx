import classNames from 'classnames'
import { StatusDotProps } from './StatusDot.types'

const StatusDot = (props: StatusDotProps): JSX.Element => {
	const { type, children } = props

	const types = {
		positive: 'statusdot-positive',
		negative: 'statusdot-negative',
		info: 'statusdot-info',
		notice: 'statusdot-notice',
		neutral: 'statusdot-neutral',
	}

	return (
		<div className={classNames('statusdot', [types[type]])}>
			<div className='statusdot-dot' />
			{children && <div className='statusdot-label'>{children}</div>}
		</div>
	)
}

export default StatusDot
