import React,{useState} from 'react'
import { addTodo } from './api/Api'
import { useMyContext } from './context/store'
import useMutation from './hook/useMutation'

const AddBox = () => {
  const initState ={
    text:""
  }
  const {mutate} = useMutation()
  const [state,setState] = useState(initState)
  const{text} = state
  const handleChange =e=>{
    const {name,value} = e.target  
    setState({...state,[name]:value})
  }
  const handleSumit =async(e)=>{
    e.preventDefault()
    mutate(()=> addTodo({txt:text}))
  }
  
  return (
   <form style={{textAlign:"center"}} onSubmit={handleSumit}>
      <input placeholder='Add' value={text} name='text' onChange={handleChange}></input><button type='submit'>Add</button>
   </form> 
  )
}

export default AddBox