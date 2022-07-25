import { KeyboardEvent } from 'react'
import { useFocusManager } from 'react-aria'
import type { Dict } from './types'

export let nanoid = (t = 21) =>
	crypto
		.getRandomValues(new Uint8Array(t))
		.reduce(
			(t, e) =>
				(t +=
					(e &= 63) < 36
						? e.toString(36)
						: e < 62
						? (e - 26).toString(36).toUpperCase()
						: e > 62
						? '-'
						: '_'),
			''
		)

export const isBrowser = () => typeof window !== 'undefined'

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result: Dict = {}

	Object.keys(object).forEach((key) => {
		if (keys.includes(key as K)) return
		result[key] = object[key]
	})

	return result as Omit<T, K>
}

export const clamp = (
	value: number,
	min: number = -Infinity,
	max: number = Infinity
): number => {
	let newValue = Math.min(Math.max(value, min), max)
	return newValue
}

export const useFocusKeyDown = () => {
	const focusManager = useFocusManager()
	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowUp':
				focusManager.focusPrevious({ wrap: true })
				break
			case 'ArrowDown':
				focusManager.focusNext({ wrap: true })
				break
		}
	}
	return onKeyDown
}
