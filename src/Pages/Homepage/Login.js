import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const authenticate = (e) => {
    e.preventDefault()

    navigate('/Dashboard')
  }

  return (
    <>
      <h3>Login</h3>
      <form
        onSubmit={(e) => {
          authenticate(e)
        }}
      >
        <input type="email" /> <br />
        <input type="password" /> <br />
        <button type="submit">sign in</button>
      </form>
    </>
  )
}

export default Login
