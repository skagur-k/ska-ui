import classNames from 'classnames'
import { Badge, BadgeProps } from './Badge.types'
import { useBadgeClass } from './styles'

const Badge = ({
	value,
	color,
	size = 'md',
	outline,
	contrast,
	className,
	children,
	...rest
}: BadgeProps): Badge => {
	const BadgeClasses = useBadgeClass({ size, outline, contrast })
	return (
		<div
			data-color={color}
			className={classNames(BadgeClasses, className)}
			{...rest}>
			{children}
		</div>
	)
}

export default Badge
