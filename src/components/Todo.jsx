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

  const handleDelete = () => {
    props.onDelete(props.id);
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
