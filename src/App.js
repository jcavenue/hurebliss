import { Routes, Route } from 'react-router-dom'
import {
  HomepageLayout,
  Home,
  Login,
  About,
  ErrorPage,
  Contact,
} from './Pages/Homepage'
import { Dashboard } from './Pages/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomepageLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
