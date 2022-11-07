import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
      </header>
    </div>
  );
}

export default App;
