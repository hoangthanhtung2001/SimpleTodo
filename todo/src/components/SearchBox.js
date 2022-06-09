import axios from 'axios';
import React,{useRef,useState,useEffect} from 'react'
import { search } from './api/Api';
import {useNavigate} from'react-router-dom'
const SearchBox = ({list}) => {
      const [data,setData] = useState("")
      const ref = useRef()
      const navigate = useNavigate()
      useEffect(()=>{
        axios.get('/info').then(res=>{
          if(res.data){
            setData(res.data)
          }
        })
      },[])

     
      const handleSubmit = e=>{
        e.preventDefault();
        const value = ref.current.value
        if(!value.trim()) return
        return navigate(`/search/${value}`)
      }
     
  return (
  <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
    <input type="search" placeholder='search' ref={ref} style={{padding:"5px 10px"}}></input>
    <button type='submit' style={{padding:"5px 10px"}}>Search</button>
  </form>
    
  )
}

export default SearchBox