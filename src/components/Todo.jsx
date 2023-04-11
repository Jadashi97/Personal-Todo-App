import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = (props) => {

  const handleDelete = () => {
    props.onDelete(props.id);
  }
  return (
    <div className='todo'>
      <ul>
        <li>
          <h4>
            {props.value}
            <button onClick={handleDelete}>
              <DeleteIcon fontSize='10'/>
            </button>
          </h4>
        </li>
      </ul>
    </div>
  )
}

export default Todo;
