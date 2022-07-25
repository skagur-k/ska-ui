import { UseImageProps } from '../../utils'
import React, { ImgHTMLAttributes } from 'react'

interface INativeImageProps {
	htmlWidth?: string | number
	htmlHeight?: string | number
}

interface NativeImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement>,
		INativeImageProps {}

interface IImageProps extends Omit<NativeImageProps, 'onError'> {
	fallbackSrc?: string
	fallback?: React.ReactElement
	loading?: 'eager' | 'lazy'
	ignoreFallback?: boolean
	caption?: string
	as?: React.ElementType
}

interface ImageProps extends UseImageProps, IImageProps {}

export type { NativeImageProps, ImageProps }
