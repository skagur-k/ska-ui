import tw from 'tailwind-styled-components'
import { ButtonOwnProps } from './Button.types'

const StyledButton = tw.button<ButtonOwnProps>`
flex
space-x-1
items-center
justify-center
font-semibold

select-none
cursor-pointer

ring-2
ring-sky-500
focus:ring-sky-200
focus:ring-4
focus:outline-none

${(p: { shape: string }) => (p.shape == 'rounded' ? 'rounded-2xl' : 'rounded-sm')}
${(p: { $isPressed: boolean }) => (p.$isPressed ? '' : '')}
${(p: { $isHovered: boolean }) => (p.$isHovered ? 'shadow-sm bg-gray-50' : '')}
${(p: { $isDisabled: boolean }) => (p.$isDisabled ? 'cursor-not-allowed shadow-none' : '')}

${(p: { size: string }) => {
	switch (p.size) {
		case 'sm':
			return 'px-4 py-2'

		case 'md':
			return 'px-8 py-3'

		case 'lg':
			return 'px-12 py-4'

		default:
			return 'px-4 py-2'
	}
}}

`

export default StyledButton
