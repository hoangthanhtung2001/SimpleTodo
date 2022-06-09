
import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { useMyContext } from '../context/store'

const useMutation = () => {
    const {setRefetching} = useMyContext()
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState()
    const mutate =(callback)=>{
        setLoading(true)
        callback()
        .then(res=>{
            setData(res.data)
            toast.success('Update Success')
            setRefetching(prev=>!prev)
        })
        .catch(err=>{
            if(err.response.data.msg){
                throw new err(err.response.data.msg)
            }
            else{
                throw new err(err.message)
            }
        })
        .finally(()=> setLoading(false))
    }
  return { mutate,data,loading,error}
}

export default useMutation