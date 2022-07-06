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
		<Comp
			src={src}
			crossOrigin={crossOrigin}
			loading={loading}
			className='rounded-xl'
			{...sharedProps}
		/>
	)
})

export default Image
