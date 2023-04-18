import React, { useState, useEffect} from 'react'
import Todo from "../components/Todo";
import AddBoxIcon from '@mui/icons-material/AddBox';


export default function CreateForm({todo, onAddFormSubmit, onAddInputChange}) {

    return (
        <form>
          <h2>Add Todo</h2>
          <input 
            className='inputContainer'
            name="todo"
            type="text" 
            value={todo} 
            onChange={onAddInputChange} 
            placeholder={'add next todo'}
          />
            <AddBoxIcon onClick={onAddFormSubmit} fontSize="large"/>
        </form>
    );
};

