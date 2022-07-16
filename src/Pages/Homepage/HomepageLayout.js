import { Link, Outlet } from 'react-router-dom'

const HomepageLayout = () => {
  return (
    <>
      <h1>Homepage</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="About">
          <li>About</li>
        </Link>
        <Link to="Contact">
          <li>Contact</li>
        </Link>
        <Link to="Login">
          <li>Login</li>
        </Link>
      </ul>
      <Outlet />
    </>
  )
}

export default HomepageLayout
