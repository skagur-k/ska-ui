interface BlueContainerProps extends DefaultProps {
	flex?: 1 | 2 | 3 | 'auto' | 'initial' | 'none'
	style?: React.CSSProperties
	textAlign?: 'left' | 'center' | 'right'
}

type BlueContainer = JSX.Element

export { BlueContainer, BlueContainerProps }
