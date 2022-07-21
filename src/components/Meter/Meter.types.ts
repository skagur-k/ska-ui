import { AriaMeterProps } from '@react-types/meter'

interface MeterProps extends AriaMeterProps {
	width?: string
	colors?: {
		[value: number]: string
	}
}

export { MeterProps }
