import React, { useState } from 'react'
import Todo from "../components/Todo";

export default function CreateForm() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState(" ");

  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    setTodo(value);
  }


  const handleSubmit = (e) => {  
    e.preventDefault();

    setItems([...items, todo]); 
    console.log(setItems());
    setTodo(" ");

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={todo} 
          onChange={handleChange} 
          placeholder='add next todo' 
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todo.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
    </div>
  )
}

