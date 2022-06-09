import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Active from '../pages/Active'
import Completed from '../pages/Completed'
import Home from '../pages/Home'
import Search from '../pages/Search'
const Body = () => {
  return (
    <Routes>
        <Route path='/all' element={<Home/>}></Route>
        <Route path='/completed' element={<Completed/>}></Route>
        <Route path='/active' element={<Active/>}></Route>
        <Route path='/search/:id' element={<Search/>}></Route>
    </Routes>
  )
}

export default Body