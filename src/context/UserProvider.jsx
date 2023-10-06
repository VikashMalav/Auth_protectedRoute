import React, { createContext, useContext, useState } from 'react';


const userContext = createContext()

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({name:'',email:'',password:'',number:'',isLogin:false})
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const login = () => {
    setIsUserLoggedIn(true)
  }

  const logout = () => {
    setIsUserLoggedIn(false)
  }

  return (
    <userContext.Provider value={{ userDetails, setUserDetails,login,logout,isUserLoggedIn }}>
      {children}
    </userContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(userContext)
}





export default UserProvider