import { useNavigate, Outlet } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Dashboard</h1>
      <form
        onSubmit={(e) => {
          navigate('/Login')
        }}
      >
        <button type="submit">Sign out</button>
      </form>
      <Outlet />
    </>
  )
}

export default Dashboard
