import { createContext, useContext, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
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
						.then((response) => {
							console.log(response.user)
							setUser(response.user)
						}).catch((error) => {
							console.log(error.message)
							console.log('Email / Password do not match')
						})
  }

  return (
    <UserContext.Provider value={{ createUser, user, userLogout, userLogin }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
