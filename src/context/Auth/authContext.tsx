import React, { createContext, ReactNode, useContext, useState } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  isOnline: boolean
}

const Context = createContext({} as AuthContextType)

const AuthContext = ({ children }: { children: ReactNode }) => {
  const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  window.addEventListener('online', () => {
    if (!isOnline) setIsOnline(true)
    // TODO remove
    setIsLoggedIn(false)
  })
  window.addEventListener('offline', () => {
    if (isOnline) setIsOnline(false)
  })

  return <Context.Provider value={{ isLoggedIn, isOnline }}>{children}</Context.Provider>
}

export const useContextAuth = () => {
  return useContext(Context)
}

export default AuthContext
