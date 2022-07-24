import { Routes, Route } from 'react-router-dom'
import {
  HomepageLayout,
  Home,
  Login,
  About,
  ErrorPage,
  Contact,
	Unauthorized
} from './Pages/Homepage'
import { DashboardLayout, Dashboard } from './Pages/Dashboard'
import { CreateUser, ViewUsers, UserSettings } from './Pages/User-Settings'

function App() {
  return (
    <Routes>
			<Route path='/'>
				<Route path="/" element={<HomepageLayout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Route>
				<Route path="dashboard" element={<DashboardLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="manage-users-setting" element={<UserSettings />}>
						<Route path="create-user" element={<CreateUser />} />
						<Route path="users" element={<ViewUsers />} />
					</Route>
				</Route>
				<Route path="unauthorized" element={<Unauthorized/>}/>
				<Route path="*" element={<ErrorPage />} />
			</Route>
    </Routes>
  )
}

export default App
