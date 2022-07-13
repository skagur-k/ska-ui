import { useImage, Status } from '../../hooks/'
import React, { forwardRef } from 'react'
import { omit } from '../../utils'
import { ImageProps, NativeImageProps } from './Image.types'

export const NativeImage = forwardRef(
	(props: NativeImageProps, ref: React.Ref<HTMLImageElement>) => {
		const { htmlWidth, htmlHeight, alt, ...rest } = props

		return (
			<img
				width={htmlWidth}
				height={htmlHeight}
				ref={ref}
				alt={alt}
				{...rest}
			/>
		)
	}
)

const Image = forwardRef<unknown, ImageProps>((props, ref) => {
	const {
		fallback,
		fallbackSrc,
		src,
		loading,
		ignoreFallback,
		crossOrigin,
		as: Comp = NativeImage,
		caption,
		...rest
	} = props

	const shouldIgnore = loading != null || ignoreFallback

	const status: Status = useImage({
		...props,
		ignoreFallback: shouldIgnore,
	})

	const sharedProps = {
		ref,
		...(shouldIgnore ? rest : omit(rest, ['onLoad', 'onError'])),
	}

	if (status !== 'loaded') {
		if (fallback) return fallback
		return (
			<Comp src={fallbackSrc} {...sharedProps} className='rounded-xl' />
		)
	}

	return (
		<div className='flex flex-col items-center'>
			<Comp
				src={src}
				crossOrigin={crossOrigin}
				loading={loading}
				className='rounded-xl'
				{...sharedProps}
			/>
			<div className='image-caption text-right text-sm mt-4 text-gray-500 font-light'>
				{caption && caption}
			</div>
		</div>
	)
})

export default Image
