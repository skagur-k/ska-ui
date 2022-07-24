import { createContext, useContext } from 'react'

const TreeContext = createContext<number>(0)

export const TreeContextProvider = TreeContext.Provider
export const useTree = () => useContext(TreeContext)
