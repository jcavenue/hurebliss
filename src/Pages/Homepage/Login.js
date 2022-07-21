import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'

const Login = () => {
  const { userLogin } = UserAuth()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmed, setconfirmed] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setconfirmed('')

    try {
      await userLogin(email, password)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  return (
    <>
      <h2>Login</h2>

      {error && <p>Unable to Login</p>}
      {confirmed && <p>{confirmed}</p>}
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <h3>Sign in your Account</h3>
        <p>
          <input
            type="email" autoComplete="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </p>
        <p>
          <input
            type="password" autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </p>
        <button type="submit">sign in</button>
      </form>
    </>
  )
}

export default Login
