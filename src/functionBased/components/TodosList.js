/* eslint no-unused-vars: 0 no-undef: 0 */
import React from 'react';
import TodoItem from './TodoItem.js';

const TodosList = (props) => {
  const r = '';
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
