
// App.js
import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { initialState, todoReducer } from './components/reducer';
import './App.css';


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default App;


