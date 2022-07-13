import classNames from 'classnames'

export interface BlueContainerProps extends DefaultProps {
	flex?: 2 | 3 | string
	style?: React.CSSProperties
}

const flexes = {
	2: 'flex-[2_2_0%]',
	3: 'flex-[3_3_0%]',
}

const BlueContainer = ({
	flex,
	style,
	className,
	children,
}: BlueContainerProps) => {
	return (
		<div
			className={classNames(
				'flex flex-1 min-h-[40px] bg-blue-600 rounded-md text-white items-center text-sm px-3',
				[flex && typeof flex === 'number' && flexes[flex]],
				[
					flex &&
						typeof flex === 'string' &&
						`flex-[${flex.split(' ').join('_')}]`,
				],
				className
			)}
			style={style}>
			{children}
		</div>
	)
}

export default BlueContainer
