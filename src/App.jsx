import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Todo from './components/Todo';
import CreateForm from './components/CreateForm';

function App() {


  // because localstorage is synchronous - that could slow down the application
  // instead of using just an empty array as the initial state - we can use a function in its place,
  // which will only be executed on the initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if(savedTodos){
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
    }else{
      return [];
    }
  });

    useEffect(()=> {
      // localstorage only support storing strings as keys and values
      // - therefore we cannot store arrays and objects without converting the object
      // into a string first. JSON.stringify will convert the object into a JSON string
      localStorage.setItem("todos", JSON.stringify(todos));

      // add the todos as a dependancy because we want to update the
      // localstorage anytime the todos state changes
    }, [todos]);

    // handling the Edit button when clicked
    const handleEdit = ()=>{
      setTodos((prevTodos) => {
        prevTodos.map((todo) => {
          if(todo.id === editedTodo.id){
            return editedTodo;
          }
          return todo;
        })
      })
    }


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
          {todos.map((todo, index) => {
            return(
              <Todo
                key={index}
                id={index}
                value={todo}
                onDelete={deleteTodo}
                onEdit={handleEdit}
              />
            )
          })}
        </div>
      </div>
    )
}

export default App;