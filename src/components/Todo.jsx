import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleEdit = (todo) => {
  
    setIsEditing(true);

    // set the currentTodo to the todo item that was clicked
    setCurrentTodo({...todo});
  };

  const handleCancel = () => {
    // console.log("cancel me!!")
    setIsEditing(false);
  };

  const handleSave = (id, updtedTodo) => {
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated todo object
    // otherwise just use old todo
    // const updatedItem = todos.mao
    setIsEditing(false);
  }

  const handleInputChange = (e)=> {
    let value = e.target.value;
    setCurrentTodo({...currentTodo, value});
    console.log(currentTodo);
  }

  const handleDelete = () => {
    props.onDelete(props.id);
  }

  if(isEditing){
    return(
      <li>
        <input
          className='inputContainer'
          type="text" 
          value={currentTodo.value} 
          onChange={handleInputChange} 
          placeholder={'add todo'}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </li>
    )
  }

  return (
    <div className='todo'>
      <ul>
        <li>
          <h2>
            {props.value}
            <DeleteIcon onClick={handleDelete} fontSize='small'/>
            <EditIcon onClick={handleEdit} fontSize='small'/>
          </h2>
        </li>
      </ul>
    </div>
  )
}

export default Todo;
