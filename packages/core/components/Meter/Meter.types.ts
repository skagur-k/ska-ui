import { AriaMeterProps } from '@react-types/meter'

interface MeterProps extends AriaMeterProps {
	type?: 'success' | 'error' | 'warning' | 'secondary'
	width?: string
	colors?: {
		[value: number]: string
	}
}

export { MeterProps }
