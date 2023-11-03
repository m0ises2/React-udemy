import { UseTodos } from '../hooks/UseTodos';
import { TodoList, AddTodo } from './components';

export const TodoApp = () => {
  const { totalTodosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo, todos } = UseTodos();

  return (
   <>
    <h1>  TodoApp: {totalTodosCount}, <small>pendientes: { pendingTodosCount }</small></h1>
    <hr />

    <div className='row'>
        <div className='col-7'>
            <TodoList todos={ todos } onDeleteTodo={ handleRemoveTodo } onToggleTodo={ handleToggleTodo }/>
        </div>

        <div className='col-5'>
            <h4> Agregar TODO </h4>

            <hr />

            <AddTodo onNewTodo={ handleNewTodo } />
        </div>
    </div>
   </>
  )
};
