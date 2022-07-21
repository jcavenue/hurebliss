import { Outlet, Link, useNavigate, Navigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'

const DashboardLayout = () => {
  const { userLogout, user } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await userLogout()
      navigate('/login')
    } catch (error) {
      console.log(error.message)
    }
  }

  return !user ? (
    <Navigate to={'/login'} />
  ) : (
    <>
      <h1>Welcome {user}</h1>
      <button onClick={handleLogout}>Sign Out</button>
      <br />
      <Link to={'/dashboard'}>Dashboard</Link>
      <br />
      <Link to="manage-users-setting">Manage User Account</Link>
      <br />
      <Outlet />
    </>
  )
}

export default DashboardLayout
