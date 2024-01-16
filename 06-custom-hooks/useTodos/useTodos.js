import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// Función inicializadora del useReducer
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const UseTodos = () => {
  const [ todos, dispatchTodo ] = useReducer(todoReducer, [], init);

  /*
    UseEffect que controla cuando el
    guardado en localStorage cada que el todo cambia
  */
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    };

    dispatchTodo(action);
  };

  const handleRemoveTodo = (id) => {
    dispatchTodo({
      type: '[TODO] Remove Todo',
      payload: id
    })
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  };
  
  return {
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    todos,
    totalTodosCount: todos.length,
  };
}

