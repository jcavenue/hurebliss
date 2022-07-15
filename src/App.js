import { Routes, Route } from 'react-router-dom'
import Home from './components/homepage/Home'
import Login from './components/homepage/Login'
import About from './components/homepage/About'
import Contact from './components/homepage/Contact'
import Header from './components/homepage/Header'
import Footer from './components/homepage/Footer'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
      <hr />
      <Footer />
    </>
  )
}

export default App
