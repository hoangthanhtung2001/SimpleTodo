import React,{useState,useContext,useRef} from 'react'

export const Store = React.createContext()
export const useMyContext = ()=>useContext(Store)
export const Provider = ({children})=>{
      const [add,setAdd] = useState(true)
      const [search,setSearch]= useState(false)
      const [refetching,setRefetching] = useState(false)
      const value = {add,setAdd,search,setSearch,refetching,setRefetching}
      return (
          <Store.Provider value={value}>
              {children}
          </Store.Provider>
      )
}

