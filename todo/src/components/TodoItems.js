import axios from 'axios'
import React,{ useState} from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { deleteTodo, updateTodo } from './api/Api'

import useMutation from './hook/useMutation'

const TodoItems = ({list}) => {
      const [check,setCheck] = useState(list.completed)
      const {mutate,loading} = useMutation()
      const handleChange =(e)=>{
          setCheck(!check)
      }

      const handleSubmit =async e=>{
        e.preventDefault()
        try {
          // axios.patch(`/update/${list._id}`,{completed:check})
          mutate(()=> updateTodo({id:list._id, newData:check}))
        
       } catch (err) {
         if(err.response.data.msg){
           toast.error(err.response.data.msg)
           throw new Error(err.response.data.msg)
         }
         else{
           toast.error(err.message)
           throw new Error(err.message)
         }
       }

      }

     const handleDelete = async(e)=>{
       e.preventDefault()
       mutate(()=>deleteTodo({id:list._id}))
     }
  return (
    <div className='list-items'>
      {list.completed && <li>
              <form onSubmit={handleSubmit}>
                <div className='box'>
                  <input type="checkbox" checked={check} onChange={handleChange}/>
                  <p style={{textDecorationLine:"line-through"}}>{list.text}</p>
                </div>
                <div className='btn'>
                  <button type='submit'>Update</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              </form>
        </li>
      }
      {
        !list.completed && <li>
          <form onSubmit={handleSubmit}>
            <div className='box'>
              <input type="checkbox" checked={check} onChange={handleChange}/>
              <p>{list.text}</p>
            </div>
            <div className='btn'>
              <button type='submit'>Update</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </form>
     </li>
      }

  
    </div>
  )
}

export default TodoItems