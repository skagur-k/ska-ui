import { isBrowser } from '../../utils'
import { ThemeContext } from './ThemeContext'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'hooks'

const ThemeContextProvider = ({ children }: any) => {
	const prefersDark = useMediaQuery('(prefers-color-scheme:dark)')
	const STORAGE_KEY = 'mode'
	const [mode, setMode] = useState<'light' | 'dark' | 'system'>(() => {
		if (isBrowser()) {
			return (window as any).__mode
		}
	})

	const isDarkMode = mode === 'system' ? prefersDark : mode === 'dark'

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	const selectTheme = (val: 'light' | 'dark' | 'system') => {
		setMode(val)
		localStorage.setItem(STORAGE_KEY, val)
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, mode, selectTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
