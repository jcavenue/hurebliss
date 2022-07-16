import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const authenticate = (e) => {
    e.preventDefault()
		const username = "admin"
    navigate(`/${username}`)
  }

  return (
    <>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          authenticate(e)
        }}
      >
				<h3>Sign in your Account</h3>
				<p><input type="email" /></p>
				<p> <input type="password" /></p>
        <button type="submit">sign in</button>
      </form>
    </>
  )
}

export default Login
