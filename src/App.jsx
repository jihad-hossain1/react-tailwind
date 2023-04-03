import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricelists from './components/Pricelists/Pricelists'
import Dashbord from './components/Dashbord/Dashbord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-xl md:text-3xl lg:text-7xl'>Headding From Tailwind</h1>
      <Pricelists></Pricelists>
      <Dashbord></Dashbord>
    </div>
  )
}

export default App
