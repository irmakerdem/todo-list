import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete} />
      </header>
    </div>
  );
}

export default App;
