import React from 'react';
import Input from './Input';


const ListTodo = ({ todos, deleteTodo }) => {

  return (
    <ul>
      {
        todos &&
          todos.length > 0 ?
            (
              todos.map(todo => {
                return (
                  <li key={todo._id} onClick={() => deleteTodo(todo._id)}>{todo.action}
                    <Input />
                    
                    </li>
                )
              })
            )
            :
            (
              <li>No todo(s) left</li>
            )
      }
    </ul>
  )
}

export default ListTodo