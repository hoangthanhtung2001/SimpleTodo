import React from 'react'
import InputWrapper from './InputWrapper'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()
  return (
    <header style={{textAlign:"center"}}>
      <h2 onClick={()=>navigate('/all')} style={{cursor:"pointer"}}>Things ToDo</h2>
    </header>
    
  )
}

export default Header