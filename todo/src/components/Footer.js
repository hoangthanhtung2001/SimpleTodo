import React,{useState} from 'react'
import {Link,useLocation} from'react-router-dom'
import { getOptions } from './validator/validator'
import { useMyContext } from './context/store'
const Footer = ({count,data}) => {
    const {pathname} = useLocation()
    const text = pathname.slice(1)
    
    const options = getOptions()
    const {setAdd,setSearch} = useMyContext()
    const getClass = (key)=>{
       if(key===text) return "active"
       return ""
    }
  return (
    <div className='footer'>
        <div className='icon'>
            <i className="fas fa-plus" onClick={()=>  setAdd(prev=>!prev)}></i>
            <i className="fas fa-search" onClick={()=> setSearch(prev=>!prev)}></i>
        </div>
        {count?<div className='list-count'>{count} List</div>:<div className='list-count'>{data?.count} List</div>}
        <div className='status-change'>
            <li>
                {
                    Object.keys(options).map(option=>(
                        <Link to={`/${options[option]}`} key={option} className={`${getClass(option)}`}>{options[option]}</Link>
                    ))
                }
            </li>
        </div>
    </div>
  )
}

export default Footer