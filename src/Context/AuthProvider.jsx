import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserData(employees)
  }, [])

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
         {children}
      </AuthContext.Provider>
     
    </div>
  )
}

export default AuthProvider