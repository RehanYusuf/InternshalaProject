import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <Router>

      <Routes>
          <Route path='/' element = {<Card/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/login' element = {<Login/>} />
          <Route path='/profile' element = {<Profile/>} />
      </Routes>

    </Router>
  )
}

export default App
