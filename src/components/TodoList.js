// TodoList.js
import React from "react";

const TodoList = ({ todos, dispatch }) => {
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            className={todo.completed ? "completed" : ""}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
