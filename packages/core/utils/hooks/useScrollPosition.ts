import { useEffect, useState } from 'react'
import { isBrowser } from '../'

interface ScrollPosition {
	x: number
	y: number
}

function getScrollPosition(): ScrollPosition {
	return isBrowser()
		? { x: window.scrollX, y: window.scrollY }
		: { x: 0, y: 0 }
}

const useScrollPosition = (): ScrollPosition => {
	const [position, setScrollPosition] = useState<ScrollPosition>(
		getScrollPosition()
	)

	useEffect(() => {
		function handleScroll() {
			if (isBrowser()) {
				window.requestAnimationFrame(() => {
					setScrollPosition(getScrollPosition())
				})
			}
		}

		if (isBrowser()) {
			window.addEventListener('scroll', handleScroll)
			return () => window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return position
}

const useScrollPositionX = (): number => useScrollPosition().x
const useScrollPositionY = (): number => useScrollPosition().y

export { useScrollPositionX, useScrollPositionY }
export default useScrollPosition
