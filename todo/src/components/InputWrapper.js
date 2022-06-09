import React from 'react'
import AddBox from './AddBox'
import SearchBox from './SearchBox'
import { useMyContext } from './context/store'
const InputWrapper = () => {
  const {add,search} = useMyContext()
  return (
    <div>
      {add?<AddBox/>:null}
      {search?<SearchBox/>:null}
    </div>
  )
}

export default InputWrapper