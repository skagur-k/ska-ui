import classNames from 'classnames'
import { BlueContainer, BlueContainerProps } from './BlueContainer.types'

const BlueContainer = (props: BlueContainerProps): BlueContainer => {
	const {
		flex = 1,
		style,
		textAlign = 'left',
		className,
		children,
		...rest
	} = props

	const flexes = {
		1: 'flex-1',
		2: 'flex-[2_2_0%]',
		3: 'flex-[3_3_0%]',
		none: 'flex-none',
		initial: 'flex-initial',
		auto: 'flex-auto',
	}

	const alignments = {
		left: 'justify-start',
		center: 'justify-center',
		right: 'justify-end',
	}

	const blueContainerClasses = classNames(
		'blue-container',
		'flex',
		'text-base font-bold bg-blue-500 text-white',
		'p-4 rounded-md',
		[flex && flexes[flex], textAlign && alignments[textAlign]],
		className
	)

	return (
		<div className={blueContainerClasses} style={style} {...rest}>
			{children}
		</div>
	)
}

export default BlueContainer
