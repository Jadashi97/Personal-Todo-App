import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Todo from './components/Todo';
import CreateForm from './components/CreateForm';

function App() {

  return (
    <div className="App">
      <Header/>
      <Todo/>
      <CreateForm/>
    </div>
  )
}

export default App;