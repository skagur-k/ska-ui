import React, { ReactText } from 'react'

interface DescriptionProps {
	title?: string
	tooltip?: string
	children?: React.ReactNode
	className?: string
}

type Description = JSX.Element

export { Description, DescriptionProps }
