import { Routes, Route } from 'react-router-dom'
import {
  HomepageLayout,
  Home,
  Login,
  About,
  ErrorPage,
  Contact,
} from './Pages/Homepage'
import { DashboardLayout, Dashboard, UserSettings} from './Pages/Dashboard'
import { CreateUser, ViewUsers } from './Pages/Dashboard/ManageUsersSetting'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomepageLayout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
				<Route path=":username" element={<DashboardLayout/>}>
					<Route index element={<Dashboard />} />
					<Route path="manage-users-setting" element={<UserSettings />} >
						<Route path="create-user" element={<CreateUser />} />
						<Route path="users" element={<ViewUsers />} />
					</Route>
				</Route>
				<Route path="*" element={<ErrorPage />} />
      </Routes>
  )
}

export default App
