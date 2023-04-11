import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = (props) => {
  return (
    <div>
      <ul>
        <li>{props.value}</li>
        <button>
          <DeleteIcon fontSize='small'/>
        </button>
      </ul>
    </div>
  )
}

export default Todo;
