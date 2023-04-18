import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Todo from './components/Todo';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';

function App() {

    const [todo, setTodo] = useState(" ");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

  // this will only be executed on the initial render
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
      // - therefore we cannot store arrays and objects without converting the object
      // into a string first. JSON.stringify will convert the object into a JSON string
      localStorage.setItem("todos", JSON.stringify(todos));

      // add the todos as a dependancy because we want to update the
      // localstorage anytime the todos state changes
    }, [todos]);

    const handleAddInputChange = (e) => {
      setTodo(e.target.value);
    }

    const handleAddFormSubmit = (e) => {
      e.preventDefault();

      if(todo !== " "){
        setTodos([
          ...todos,
          {
            id: new Date(),
            text: todo.trim()
          }
        ]);
      }
      setTodo(' ');
    }
    
    const handleEditFormSubmit = (e) => {
      e.preventDefault();
      
      handleUpdateTodo(currentTodo.id, currentTodo);
    }

    const handleUpdateTodo = (id, updatedTodo) => {
      const updatedItem = todos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
      });
      setIsEditing(false);
      setTodos(updatedItem)
    }


    const handleEditInputChange = (e)=> {
      let value = e.target.value;
      setCurrentTodo({...currentTodo, text: value});
    };

    // handling the Edit button when clicked
    const handleEdit = (todo)=>{
      setIsEditing(true);
      setCurrentTodo({...todo});
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
        <ul className='wrapper'>
          {isEditing ? (
            <EditForm
              currentTodo={currentTodo}
              setIsEditing={setIsEditing}
              onEditInputChange={handleEditInputChange}
              onEditFormSubmit={handleEditFormSubmit}
            />
          ): (
            <CreateForm 
              todo={todo}
              // onAdd={addTodo}
              onAddInputChange={handleAddInputChange}
              onAddFormSubmit={handleAddFormSubmit}
            />

          )}

          {todos.map((todo, index) => (
              <Todo
                key={index}
                id={index}
                todo={todo}
                onEdit={handleEdit}
                onDelete={deleteTodo}
              />
            )
          )}
        </ul>
      </div>
    )
}

export default App;