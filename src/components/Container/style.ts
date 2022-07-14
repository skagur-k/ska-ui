import classNames from 'classnames'
import { ContainerProps, flexDirection } from './Container.types'

interface ContainerClassProps extends ContainerProps {}

function useContainerClass(props: ContainerClassProps) {
	const { row, gap, flex, direction } = props

	const responsive = {
		sm: {
			row: 'container--sm-row',
			col: 'container--sm-col',
		},
		md: {
			row: 'container--md-row',
			col: 'container--md-col',
		},
		lg: {
			row: 'container--lg-row',
			col: 'container--lg-col',
		},
	}

	const flexes = {
		1: 'flex-1',
		2: 'flex-[2_2_0%]',
		3: 'flex-[3_3_0%]',
		none: 'flex-none',
		initial: 'flex-initial',
		auto: 'flex-auto',
	}

	const classes = classNames('container', [
		gap && `gap-${gap}`,
		flex && flexes[flex],
		direction && [
			direction[0] === 'row' ? responsive.sm.row : responsive.sm.col,
			direction[1] === 'row' ? responsive.md.row : responsive.md.col,
			direction[2] === 'row' ? responsive.lg.row : responsive.lg.col,
		],
		!direction && row && 'flex-col',
	])

	return classes
}

export { useContainerClass }
