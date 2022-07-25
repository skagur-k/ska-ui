import React from 'react'

interface BlueContainerProps {
	flex?: 1 | 2 | 3 | 'auto' | 'initial' | 'none'
	style?: React.CSSProperties
	textAlign?: 'left' | 'center' | 'right'
	children?: React.ReactNode
}

type BlueContainer = JSX.Element

export { BlueContainer, BlueContainerProps }
