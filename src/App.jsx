import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/Landingpage/LandingPage'
import LogoutPage from './pages/Landingpage/LogoutPage'
import Dashboard from './pages/Welcome'
import Profile from './pages/profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LandingPage/> */}
      {/* <LogoutPage/> */}
      {/* <Profile/> */}
      <Dashboard/>
    </>
  )
}

export default App
