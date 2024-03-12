import React from 'react'

function TodoList(props) {
  return (
    <div className="w-full ">
      <li className="p-1.5 flex w-full justify-between text-lg">
        {props.item}
        <span className="p-1">
        <i className="fa-solid fa-trash-can icon-delete" onClick={()=>{
            props.deleteItem(props.index);
        }}></i>
        </span>
      </li>
    </div>
  )
}

export default TodoList
