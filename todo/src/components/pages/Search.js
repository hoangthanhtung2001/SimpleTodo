import React,{useState,useEffect} from 'react'
import {Link, useLocation, useParams} from'react-router-dom'
import { useMyContext } from '../context/store'
import { useQuery } from 'react-query'
import { getData } from '../api/Api'
import InputWrapper from '../InputWrapper'
import List from '../List'
import Footer from '../Footer'
import TodoItems from '../TodoItems'
import SearchBox from '../SearchBox'
const Search = () => {
    const [filter,setFilter] = useState([])
    const {refetching} = useMyContext()
    const {id} = useParams()
    
    const key = '/info'
    const {data,isLoading,error,refetch} = useQuery({
        queryKey: key,
        queryFn: getData,
        retry:false,
        refetchOnWindowFocus:false
      })
      useEffect(()=>{
        refetch()
      },[refetching])
      
      useEffect(()=>{
          const searchItems =(value)=>{
              if(value){
                const filterData = data?.todo.filter(item=>{
                    const text = Object.values(item)[1]
                    return text.toLocaleLowerCase().includes(value)
                })
                setFilter(filterData)
              }
              else{
                  setFilter(data.todo)
              }

          }
          searchItems(id)
      },[data?.todo, id])
  return (
    <div>
        <SearchBox/>
        {
        filter.length>0?(filter.map((item)=>{
            return(
                <TodoItems key={item._id} list={item}/>
            )
        })):<><p>Not Found Items</p><Link to="/all">Click me</Link></>
        }

        {
          isLoading && <p style={{textAlign:"center"}}>Loading...</p>
        }
        {error && <p style={{textAlign:"center"}}>{error.message}</p>}
        {filter.length>0? <Footer count={filter.length}/>:<Footer count={filter.length}/>}
    </div>
  )
}

export default Search