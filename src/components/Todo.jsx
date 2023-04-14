import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(props.value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  }

  const handleInputChange = (e)=> {
    let value = e.target.value;
    setEditedTodo({...editedTodo, value});
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
          value={props.value} 
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
            <EditIcon/>
          </h2>
        </li>
      </ul>
    </div>
  )
}

export default Todo;
