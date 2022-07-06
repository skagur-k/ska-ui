// https://github.com/vechai/vechaiui/blob/main/packages/image/src/image.tsx

import { useEffect } from 'react'
import { useCallback, useRef, useState } from 'react'
import { ImageEvent, Status, UseImageProps } from './types'

export default function useImage(props: UseImageProps) {
	const { src, srcSet, sizes, onLoad, onError, ignoreFallback, crossOrigin } =
		props

	const [status, setStatus] = useState<Status>('pending')
	console.log('Status in [useImage]: ' + status)

	useEffect(() => {
		setStatus(src ? 'loading' : 'pending')
	}, [src])

	const imageRef = useRef<HTMLImageElement | null>(null)

	const flush = () => {
		if (imageRef.current) {
			imageRef.current.onload = null
			imageRef.current.onerror = null
			imageRef.current = null
		}
	}

	const load = useCallback(() => {
		if (!src) return
		flush()

		const img = new Image()

		if (crossOrigin) {
			img.crossOrigin = crossOrigin
		}

		if (src) {
			img.src = src
		}

		if (srcSet) {
			img.srcset = srcSet
		}

		if (sizes) {
			img.sizes = sizes
		}

		img.onload = (event) => {
			flush()
			setStatus('loaded')
			onLoad?.(event as any as ImageEvent)
		}
		img.onerror = (error) => {
			flush()
			setStatus('failed')
			onError?.(error as any)
		}

		imageRef.current = img
	}, [src, crossOrigin, srcSet, sizes, onLoad, onError])

	useEffect(() => {
		if (ignoreFallback) return undefined
		if (status === 'loading') {
			load()
		}
		return () => {
			flush()
		}
	}, [status, load, ignoreFallback])
	console.log('Status at the End [useImage]: ' + status)

	return ignoreFallback ? 'loaded' : status
}
