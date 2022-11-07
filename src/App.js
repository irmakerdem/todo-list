import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
