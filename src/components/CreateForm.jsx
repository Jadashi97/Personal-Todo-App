import React, { useState } from 'react'
import Todo from "../components/Todo";

export default function CreateForm(props) {

    const [todo, setTodo] = useState(" "); //sets todo that needs to be created

    const handleChange = (e) => {
      let value = e.target.value;
      console.log(value);
      
      setTodo(value)
    }


    const handleSubmit = (e) => {  
      e.preventDefault();

      props.onAdd(todo); //pass props to parent(app.jsx)

      setTodo(" "); //reset the input field
    }

    return (
      <div>
        <form>
          <input 
            type="text" 
            value={todo} 
            onChange={handleChange} 
            placeholder={'add todo'}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
    )
}

