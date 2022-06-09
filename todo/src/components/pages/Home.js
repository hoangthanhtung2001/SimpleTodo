import React,{useState,useEffect} from 'react'
import InputWrapper from '../InputWrapper'
import List from '../List'
import Footer from '../Footer'
import axios from 'axios'
import { useQuery } from 'react-query'
import { getData } from '../api/Api'
import { useMyContext } from '../context/store'

const Home = () => {
  const [add,setAdd] = useState(true)
  const [search,setSearch]= useState(false)
  const {refetching} = useMyContext()
  // useEffect(()=>{
  //     axios.get("/info").then(res=>(
  //         setData(res.data)
  //     ))
  // },[])
  const key ="/info"
  const {data,isLoading,error,refetch} = useQuery({
    queryKey: key,
    queryFn: getData,
    retry:false,
    refetchOnWindowFocus:false
  })
  useEffect(()=>{
    refetch()
  },[refetching])
  return (
    <div>
         <InputWrapper/>
        {data&&<List data={data}/>}
        {
          isLoading && <p style={{textAlign:"center"}}>Loading...</p>
        }
        {error && <p style={{textAlign:"center"}}>{error.message}</p>}
         <Footer data={data}/>
    </div>
  )
}

export default Home