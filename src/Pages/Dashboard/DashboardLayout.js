import { Outlet, Link, useNavigate, useParams } from 'react-router-dom'

const DashboardLayout = () => {
  const navigate = useNavigate()
  const { username } = useParams()

  return (
    <>
      <h1>Welcome {username}</h1>
      <form
        onSubmit={(e) => {
          navigate('/Login')
        }}
      >
        <button type="submit">Sign out</button>
      </form>
      <br />
      <Link to={`/${username}`}>Dashboard</Link>
      <br />
      <Link to="manage-users-setting">Manage User Account</Link>
      <br />
      <Outlet />
    </>
  )
}

export default DashboardLayout
