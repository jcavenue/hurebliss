import { useRef, useState } from 'react'
import { UserAuth } from '../../Context/AuthContext'

const CreateUser = () => {
  const [error, setError] = useState('')
  const [confirmed, setconfirmed] = useState('')
  const { createUser } = UserAuth()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setconfirmed('')
    setError('')

    try {
      await createUser(emailRef.current.value, passwordRef.current.value)
      setconfirmed(`Account Creation Successful for ${emailRef.current.value}`)
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  return (
    <>
      <h2>Create a New User</h2>
      {error && <p>Unable to create user</p>}
      {confirmed && <p>{confirmed}</p>}
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <p>
          Email <input type="email" ref={emailRef} autoComplete="new-email"/>
        </p>
        <p>
          Password <input type="password" ref={passwordRef} autoComplete="new-password"/>
        </p>
        <button type="submit">Create Account</button>
      </form>
    </>
  )
}

export default CreateUser
