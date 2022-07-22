import { useEffect } from 'react'
import { Outlet, Link, useNavigate, Navigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'

const DashboardLayout = () => {
  const { userLogout, user, setUser } = UserAuth()
  const navigate = useNavigate()

	const user_data =JSON.parse(localStorage.getItem('hurebliss_data')) || false

	useEffect(() => { if(user_data){
		console.log('here') 
		setUser(user_data)
		}
	// eslint-disable-next-line
	},[])

  const handleLogout = async () => {
    try {
      await userLogout()
			localStorage.clear()
      navigate('/login')
    } catch (error) {
      console.log(error.message)
    }
  }

	if(user || user_data){
		return (
			<>
				<h1>Welcome {user.email}</h1>
				<button onClick={handleLogout}>Sign Out</button>
				<br />
				<Link to={'/dashboard'}>Dashboard</Link>
				<br />
				<Link to="manage-users-setting">Manage User Account</Link>
				<br />
				<Outlet />
			</>
		)
	} else {
		return (<Navigate to={'/unauthorized'} />)
	}
}

export default DashboardLayout
