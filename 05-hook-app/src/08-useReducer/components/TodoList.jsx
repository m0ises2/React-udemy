import PropTypes from "prop-types";
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {
        todos.map(todo => (
          <TodoItem
            key={ todo.id }
            id={ todo.id }
            description={ todo.description }
            done={ todo.done }
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))
      }
    </ul>
  )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};
