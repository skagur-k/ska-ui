import classNames from 'classnames'
import { SpacerProps } from './Spacer.types'

const Spacer = (props: SpacerProps): JSX.Element => {
	const { x = 0, y = 0 } = props
	let width,
		height: string = ''
	if (x) {
		width = `${12 * x}px`
	} else if (y) {
		height = `${12 * y}px`
	}

	return (
		<div
			aria-hidden
			className={classNames('spacer block min-w-[0px] min-h-[0px]')}
			style={{ width, height }}
		/>
	)
}

export default Spacer
