import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en el componente TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Todo test 1',
    done: false
  };
  const mockOnDeleteTodo = jest.fn();
  const mockOnToggleTodo = jest.fn();

  beforeEach( () => jest.clearAllMocks());

  test('debe mostrar el todo pendiente de completar', () => {
    render(<TodoItem
      id={todo.id}
      done={todo.done}
      description={todo.description}
      onToggleTodo={ mockOnToggleTodo }
      onDeleteTodo={ mockOnDeleteTodo }
    />);

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('debe mostrar el todo completado', () => {
    render(<TodoItem
      id={todo.id}
      done={!todo.done}
      description={todo.description}
      onToggleTodo={ mockOnToggleTodo }
      onDeleteTodo={ mockOnDeleteTodo }
    />);

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('span debe llamar el ToggleTodo cuando se le da click', () => {
    render(<TodoItem
      id={todo.id}
      done={!todo.done}
      description={todo.description}
      onToggleTodo={ mockOnToggleTodo }
      onDeleteTodo={ mockOnDeleteTodo }
    />);

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    expect(mockOnToggleTodo).toHaveBeenCalledWith(todo.id);
  });

  test('boton debe llamar el DeleteTodo cuando se le da click', () => {
    render(<TodoItem
      id={todo.id}
      done={!todo.done}
      description={todo.description}
      onToggleTodo={ mockOnToggleTodo }
      onDeleteTodo={ mockOnDeleteTodo }
    />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockOnDeleteTodo).toHaveBeenCalledWith(todo.id);
  });

  test('', () => {

  });
});
