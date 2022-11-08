import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
