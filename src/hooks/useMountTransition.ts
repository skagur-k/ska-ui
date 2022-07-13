import React, { useEffect, useState } from 'react'

interface props {
	isMounted: boolean
	unmountDelay: number
}

const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
	const [hasTransitionedIn, setHasTransitionedIn] = useState<boolean>(false)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout

		if (isMounted && !hasTransitionedIn) {
			setHasTransitionedIn(true)
		} else if (!isMounted && hasTransitionedIn) {
			timeoutId = setTimeout(
				() => setHasTransitionedIn(false),
				unmountDelay
			)
		}
		return () => {
			clearTimeout(timeoutId)
		}
	}, [unmountDelay, isMounted, hasTransitionedIn])

	console.log(hasTransitionedIn)
	return hasTransitionedIn
}

export default useMountTransition
