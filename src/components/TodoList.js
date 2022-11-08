import React from 'react';
import Todo from '.Todo';

const TodoList = ( {todos} ) => {
  return (
    <ul>
      {todos.map(todo => {
        // {console.log(todos)}
        <Todo 
          key={todo.id} 
          todo={todo}
        />
      })}
    </ul>
  )
}

export default TodoList;