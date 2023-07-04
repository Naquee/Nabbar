import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import About from '../pages/About'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes