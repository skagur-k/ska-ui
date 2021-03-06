import classNames from 'classnames'
import { ContainerProps } from './Container.types'
import { useContainerClass } from './style'

const Container = (props: ContainerProps): JSX.Element => {
	const {
		style,
		row,
		direction,
		flex,
		gap = 4,
		className,
		children,
		...rest
	} = props

	const containerClasses = classNames(
		useContainerClass({ flex, gap, direction, row }),
		className
	)

	return (
		<div
			className={classNames(containerClasses)}
			style={{ ...style }}
			{...rest}>
			{children}
		</div>
	)
}

export default Container
