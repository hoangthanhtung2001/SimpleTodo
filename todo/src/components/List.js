import React from 'react'
import TodoItems from './TodoItems'
const List = ({data}) => {
  
  return (
    <div className='list'>
      {data?.todo&&data.todo.map(list=>(
        <TodoItems key={list._id} list={list}></TodoItems>
      ))}
    </div>
  )
}

export default List