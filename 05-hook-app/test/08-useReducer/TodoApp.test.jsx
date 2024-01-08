import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { fireEvent, render, screen } from '@testing-library/react';
import { UseTodos } from '../../src/hooks/UseTodos';

jest.mock('../../src/hooks/UseTodos')

describe('Pruebas de TodoApp', () => {
  UseTodos.mockReturnValue({
    totalTodosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    todos: [{
      id: 1,
      description: 'todo 1',
      done: false
    },
    {
      id: 2,
      description: 'todo 2',
      done: true
    }]
  });

  test('debe mostrar el componente correctamente', () => {
    render(< TodoApp />);
    
    expect(screen.getByText('todo 1')).toBeTruthy();
    expect(screen.getByText('todo 2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});