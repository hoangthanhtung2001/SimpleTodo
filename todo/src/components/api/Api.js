import axios from "axios"
import { toast } from "react-toastify"
import { stringInclues } from "../comon/comon"

const handleErr =(err)=>{
    if(err.response.data.msg){
        toast.error(err.response.data.msg)
        throw new Error(err.response.data.msg)
    }
    else{
        toast.error(err.message)
        throw new Error(err.message)
    }
}
export const getData = async ({queryKey})=>{
    try {
        const res = await axios.get(`${queryKey[0]}`)
        return res.data
    } catch (err) {
        handleErr(err)
    }
   
}

export const updateTodo = async({id,newData})=>{
    return axios.patch(`/update/${id}`,{completed:newData})
}
export const deleteTodo = async({id})=>{
    return axios.delete(`/delete/${id}`,null)
}
export const addTodo = async({txt})=>{
    return axios.post(`/add`,{text:txt})
}

export const search =(list,query)=>{
    let q = query.trim().toLowerCase();
    return list.filter(({text})=>stringInclues(text.toLowerCase(),q))
}