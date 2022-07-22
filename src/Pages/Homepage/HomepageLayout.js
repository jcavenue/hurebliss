import { Link, Outlet, Navigate } from 'react-router-dom'

const HomepageLayout = () => {

	const user_data = JSON.parse(localStorage.getItem('hurebliss_data'))

	if(user_data){
		return (<Navigate to={'/dashboard'} />)
	} else {
		return (
			<>
				<h1>Homepage</h1>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="about">
						<li>About</li>
					</Link>
					<Link to="contact">
						<li>Contact</li>
					</Link>
					<Link to="login">
						<li>Login</li>
					</Link>
				</ul>
				<Outlet />
			</>
		)
		}
}

export default HomepageLayout
