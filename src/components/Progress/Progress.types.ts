import { AriaProgressBarProps } from '@react-types/progress'

interface MeterProps extends AriaProgressBarProps {
	type?: 'success' | 'error' | 'warning' | 'secondary'
	width?: string
	colors?: {
		[value: number]: string
	}
}

export { MeterProps }
