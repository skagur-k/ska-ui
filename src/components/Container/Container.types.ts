type flexDirection = 'row' | 'col'
import { DefaultProps } from '../../types'

interface ContainerProps extends DefaultProps {
	flex?: 1 | 2 | 3 | 'auto' | 'initial' | 'none'
	row?: boolean
	gap?: number
	style?: React.CSSProperties
	direction?: [sm: flexDirection, md: flexDirection, lg: flexDirection]
}

export { ContainerProps, flexDirection }
