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