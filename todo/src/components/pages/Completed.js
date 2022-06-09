import React,{useState,useEffect} from 'react'
import InputWrapper from '../InputWrapper'
import List from '../List'
import Footer from '../Footer'
import { useQuery } from 'react-query'
import { getData } from '../api/Api'
import { useMyContext } from '../context/store'
const Completed = () => {
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   axios.get('/completed').then(res=>{
  //     setData(res.data)
  //   })
  // },[])
  const {refetching} = useMyContext()
  const key = '/completed'
  const {data,isLoading,error,refetch} = useQuery({
    queryKey:key,
    queryFn:getData,
    retry:false,
    refetchOnWindowFocus:false
  })
  useEffect(()=>{
    refetch()
  },[refetching])
  return (
    <div>
      <InputWrapper/>
      {data&& <List data={data}/>}
      {
          isLoading && <p style={{textAlign:"center"}}>Loading...</p>
      }

      {error && <p style={{textAlign:"center"}}>{error}</p>}
      <Footer data={data}/>
    </div>
  )
}

export default Completed