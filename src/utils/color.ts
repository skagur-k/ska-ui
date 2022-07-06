/*
	Color Hash
	By Roland Rytz
	Generates a pseudo-random color from an input string.
	This is free and unencumbered software released into the public domain.
	Anyone is free to copy, modify, publish, use, compile, sell, or
	distribute this software, either in source code form or as a compiled
	binary, for any purpose, commercial or non-commercial, and by any
	means.
	In jurisdictions that recognize copyright laws, the author or authors
	of this software dedicate any and all copyright interest in the
	software to the public domain. We make this dedication for the benefit
	of the public at large and to the detriment of our heirs and
	successors. We intend this dedication to be an overt act of
	relinquishment in perpetuity of all present and future rights to this
	software under copyright law.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
	OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
	ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	OTHER DEALINGS IN THE SOFTWARE.
*/

type ColorHashProp = any

export interface ColorHash {
	r: number
	g: number
	b: number
	rgb: string
	hex: string
}

export function colorHash(inputString: ColorHashProp): ColorHash {
	let sum = 0

	for (let i in inputString) {
		sum += inputString.charCodeAt(i)
	}

	const r = ~~(
		Number(
			'0.' +
				Math.sin(sum + 1)
					.toString()
					.substring(6)
		) * 256
	)
	const g = ~~(
		Number(
			'0.' +
				Math.sin(sum + 2)
					.toString()
					.substring(6)
		) * 256
	)
	const b = ~~(
		Number(
			'0.' +
				Math.sin(sum + 3)
					.toString()
					.substring(6)
		) * 256
	)

	let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')'

	let hex = '#'

	hex += r < 10 ? '0' + r.toString(16) : r.toString(16)
	hex += g < 10 ? '0' + g.toString(16) : g.toString(16)
	hex += b < 10 ? '0' + b.toString(16) : b.toString(16)

	return {
		r: r,
		g: g,
		b: b,
		rgb: rgb,
		hex: hex,
	}
}
