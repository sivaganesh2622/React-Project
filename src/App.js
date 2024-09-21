import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Landing from './Components/Landing'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Login/>}></Route>
      <Route path = '/signup'  element={<Signup/>}></Route>  
      <Route path ='/landing' element={<Landing/>}></Route>
      <Route path ='/Weather' element={<Landing/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App