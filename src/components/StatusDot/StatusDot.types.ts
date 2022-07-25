import { DefaultProps } from '../../types'
export interface StatusDotProps extends DefaultProps {
	type: 'positive' | 'negative' | 'info' | 'notice' | 'neutral'
}
