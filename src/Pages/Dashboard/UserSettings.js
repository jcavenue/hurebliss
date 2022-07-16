import { Link, Outlet } from 'react-router-dom'

const UserSettings = () => {
  return (
    <>
      <h2>User Settings</h2>
      <Link to="create-user">
        <p>Create Users</p>
      </Link>
      <Link to="users">
        <p>View users</p>
      </Link>
      <Outlet />
    </>
  )
}

export default UserSettings
