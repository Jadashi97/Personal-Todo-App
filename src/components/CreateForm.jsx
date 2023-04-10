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
          placeholder='add next todo' />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {items.map((item, index)=> (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// import React, { useState } from 'react';

// function Todo() {    
//   const [items, setItems] = useState([]);
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setItems([...items, text]);
//     setText('');
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button type="submit">Add Item</button>
//       </form>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;
