import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <h2>Page not found</h2>
			<p>The page that you are trying to access cannot be found</p>
			<Link to="/login"><p>Go to back to Login Page</p></Link>
    </>
  )
}

export default ErrorPage
