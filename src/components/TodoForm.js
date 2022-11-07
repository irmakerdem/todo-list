import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  })

  const handleTaskInputChange = (e) => {
    // console.log(todo)
    setTodo({ ...todo, task: e.target.value })
    // console.log(e.target)
  }

  return (
    <form>
      <input
        name='task'
        type='text'
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      {/* {console.log(todo)} */}
      <button type='submit' />
    </form>
  )
}

export default TodoForm;