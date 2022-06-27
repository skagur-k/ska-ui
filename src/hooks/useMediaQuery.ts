import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
	const [state, setState] = useState(false)
	useEffect(() => {
		const mediaQueryList: MediaQueryList = window?.matchMedia(query)
		const onChange = () => {
			setState(mediaQueryList.matches)
		}
		mediaQueryList.addEventListener('change', onChange)
		setState(mediaQueryList.matches)
		return () => {
			mediaQueryList.removeEventListener('change', onChange)
		}
	}, [query])

	return state
}

export default useMediaQuery
