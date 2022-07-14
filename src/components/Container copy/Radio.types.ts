import { AriaRadioProps } from '@react-types/radio'

interface RadioProps extends DefaultProps, AriaRadioProps {
	caption?: string
}

interface RadioGroupProps extends DefaultProps {
	label?: string
	row?: boolean
}

type Radio = JSX.Element
type RadioGroup = JSX.Element

export { Radio, RadioProps, RadioGroup, RadioGroupProps }
