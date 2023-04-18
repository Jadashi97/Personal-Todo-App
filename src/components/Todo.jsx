import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = ({todo, onEdit, onDelete}) => {

  return (
    <div className='todo'>
      <ul>
        <li>
          <h2>
            {todo.text}
            <EditIcon onClick={() => onEdit(todo)} fontSize='small'/>
            <DeleteIcon onClick={()=> onDelete(todo.id)} fontSize='small'/>
          </h2>
        </li>
      </ul>
    </div>
  )
}

export default Todo;
