import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <ul>
        <li>{props.value}</li>
        <button>Del</button>
      </ul>
    </div>
  )
}

export default Todo;
