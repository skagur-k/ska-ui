import { AriaSwitchProps as _ToggleProps } from '@react-types/switch'
import { DefaultProps } from '../../types'

export interface ToggleProps extends DefaultProps, _ToggleProps {
	size?: 'sm' | 'md' | 'lg'
	rounded?: boolean
	disabled?: boolean
	labelPosition?: 'top' | 'bottom' | 'left' | 'right'
}
