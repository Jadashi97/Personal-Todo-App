import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Todo from './components/Todo';
import CreateForm from './components/CreateForm';

function App() {
  const [todos, setTodos] = useState([]);

    // check todos and add any new todos we have
    const addTodo = (newTodo) => {
      setTodos(prevTodos => {
        return [...prevTodos, newTodo]
      });
    }

    // remove the the todo when delete icon is pressed
    const deleteTodo = (id) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((itemTodo, index) => {
          return index !== id;
        });

      });
    }
    
    return (
      <div className="App">
        <Header/>
        <div className='wrapper'>
          <CreateForm onAdd={addTodo}/>
          {todos.map((itemTodo, index) => {
            return(
              <Todo
                key={index}
                id={index}
                value={itemTodo}
                onDelete={deleteTodo}
              />
            )
          })}
        </div>
      </div>
    )
}

export default App;