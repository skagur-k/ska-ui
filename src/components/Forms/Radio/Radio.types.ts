import { AriaRadioProps } from '@react-types/radio'

interface RadioProps extends DefaultProps, AriaRadioProps {
	caption?: string
	disabled?: boolean
	rounded?: boolean
}

interface RadioGroupProps extends DefaultProps {
	label?: string
	row?: boolean
	disabled?: boolean
	rounded?: boolean
	description?: string
}

type Radio = JSX.Element
type RadioGroup = JSX.Element

export { Radio, RadioProps, RadioGroup, RadioGroupProps }
