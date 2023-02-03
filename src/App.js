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

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      {/* {console.log(todos)} */}
      <header className="App-header">
        <h1>To Dos</h1>
        <p>Enter chore below. Cross off when done. Delete when needed.</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
          todos={todos}
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
