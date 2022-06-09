import axios from 'axios'
import React,{useState,useEffect,useCallback} from 'react'

let cache={}

const optDefault={
        sizeCache:100,
        saveCache:false
}

const useQuery = (url, depends=[],option = optDefault) => {
    
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const clearCache = useCallback(()=>{
        if(Object.keys(cache).length >= option.sizeCache) cache={}
    },[option.sizeCache])
    useEffect(()=>{
        if(!url) return;
        let here = true;
        if(cache[url]){
            setData(cache[url])
        }
        if(!cache[url]) setLoading(true)
        axios.get(url).then(res=>{
            if(here){
                setData(res.data)
                if(option.saveCache){
                    cache[url] = res.data
                }
            }
        })
        .catch(err =>{
            if(here){
                if(err.response.data.msg){
                    throw new err(err.response.data.msg)
                }
                else{
                    throw new err(err.message)
                }
            }
        })
        .finally(()=>{
            if(here) setLoading(false)
        })
        clearCache()

        return ()=> here=false
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[...depends,url,clearCache,option.saveCache])
  return{
    
  }
}

export default useQuery