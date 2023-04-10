import React, { useState } from 'react'

export default function CreateForm() {
  const [todo, setTodo] = useState(" ");

  const handleChange = (e) => {
    let value = e.target.value;
    console.log("here is where we can see the value")
    setTodo(value);
  }

  return (
    <div>
      <form action="">
        <input 
          type="text" 
          value={todo} 
          onChange={handleChange} 
          placeholder='add next todo' />
        <button>Add</button>
      </form>
    </div>
  )
}
