import { createContext, useContext } from 'react'

interface TreeContextValueProps {
	depth: number
	expandAll?: boolean
	closeAll?: boolean
}

const TreeContext = createContext<number>(0)

export const TreeContextProvider = TreeContext.Provider
export const useTree = () => useContext(TreeContext)
