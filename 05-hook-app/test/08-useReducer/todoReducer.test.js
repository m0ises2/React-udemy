import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false
    }
  ];

  test('debe regresar el estado inicial', () => { 
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('debe agregar un TODO', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Todo 2',
        done: false
      }
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('debe eliminar un Todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('debe cambiar un Todo a done equal to true', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    };

    const [newState] = todoReducer(initialState, action);

    expect(newState.done).toBe(true);
  });
})
