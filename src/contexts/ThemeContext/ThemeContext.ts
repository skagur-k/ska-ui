import { createContext } from 'react'

export interface IThemeContext {
	selectTheme: (val: 'light' | 'dark' | 'system') => void
	isDarkMode: null | boolean
	mode: 'light' | 'dark' | 'system'
}

export const ThemeContext = createContext<IThemeContext>({
	selectTheme: () => {},
	isDarkMode: null,
	mode: 'system',
})
