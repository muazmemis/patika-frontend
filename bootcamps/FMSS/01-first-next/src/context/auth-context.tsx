'use client'
import { createContext, useContext, useState } from 'react'

interface IAuthContext {
  authState: IAuthToken
  setAuthState: (userAuthInfo: any) => void
  isUserAuthenticated: () => boolean
}

interface IAuthToken {
  token: string
}

const AuthContext = createContext<IAuthContext>({
  authState: { token: '' },
  setAuthState: () => {},
  isUserAuthenticated: () => false,
})

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<IAuthToken>({ token: '' })

  const setAuthInfo = ({ token }: IAuthToken) => {
    localStorage.setItem('token', token)
    setAuthState({ token: token })
    isUserAuthenticated
  }

  const isUserAuthenticated = () => {
    return authState.token ? true : false
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState: (userAuthInfo: any) => setAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

export { AuthProvider }
