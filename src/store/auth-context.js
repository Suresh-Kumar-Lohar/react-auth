import React, { useState } from 'react'

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null)

  const userIsLoggedIn = !!token

  const loginHandler = (token) => {
    setToken(token)
  }

  const logoutHandler = () => {
    // console.log(token)
    setToken(null)
    // console.log(token)
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
