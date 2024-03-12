import React from 'react';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';
import { useState } from "react";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addListTodo = (inputText) => {
    setListTodo(prevList => [...prevList, inputText]);
  }

  const deleteListTodo = (key) => {
      setListTodo(prevList => prevList.filter((item, index) => index!== key));
  }

  return (
    <div className="w-full h-screen bg-blue-600 flex justify-center items-center flex-col">
      <div className="bg-white py-2 px-4 shadow-lg rounded-md flex justify-center items-center gap-2 flex-col">
        <InputBox addListTodo={addListTodo} />
        {listTodo.map((listItem, index) => {
          return <TodoList key={index} item={listItem} deleteItem={deleteListTodo} index={index}/>
        })}
      </div>
    </div>
  );
}

export default App;
