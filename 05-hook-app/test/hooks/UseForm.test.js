import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('UseForm', () => {
  const initialForm = {
    name: 'Moises',
    email: 'email@google.com'
  };

  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onReset: expect.any(Function)
    });
  });

  test('debe de cambiar el nombre en el formulario', () => {
    const newName = 'New Name';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName
        }
      });
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test('debe de cambiar el nombre en el formulario', () => {
    const newName = 'New Name';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onReset } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName
        }
      });

      onReset();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
