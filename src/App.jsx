import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricelists from './components/Pricelists/Pricelists'
import Dashbord from './components/Dashbord/Dashbord'
import Phonebar from './components/PhoneBar/Phonebar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-xl md:text-3xl lg:text-7xl'>Headding From Tailwind</h1>
      <Pricelists></Pricelists>
      <Dashbord></Dashbord>
      <Phonebar></Phonebar>
    </div>
  )
}

export default App
