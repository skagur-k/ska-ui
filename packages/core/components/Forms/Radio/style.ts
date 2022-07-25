import classNames from 'classnames'
import { RadioGroupProps } from './Radio.types'

interface RadioGroupClassProps extends RadioGroupProps {}

function useRadioGroupClass(props: RadioGroupClassProps) {
	const { row } = props

	const classes = classNames('radio-group', [row && 'radio-group-row'])

	return classes
}

export { useRadioGroupClass }
