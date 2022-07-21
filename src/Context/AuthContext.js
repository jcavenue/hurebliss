import { createContext, useContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../Firebase'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogout = () => {
    setUser(false)
    return signOut(auth)
  }

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    if (user === false) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        const { email } = currentUser
        setUser(email)
      })

      return () => {
        unsubscribe()
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{ createUser, user, userLogout, userLogin }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
