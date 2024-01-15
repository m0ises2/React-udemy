import { LoginPage } from "../../src/09-useContext/LoginPage";
import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en LoginPage', () => {
  test('debe mostrar el componente sin el user', () => {
    render(
      <UserContext.Provider value={{user:null}}>
          <LoginPage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
  });

  test('debe invocar a setUser al darle click al botón', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{
          user:null,
          setUser: setUserMock
        }}
      >
          <LoginPage/>
      </UserContext.Provider>
    );

    const screenBtn = screen.getByRole('button');
    fireEvent.click(screenBtn);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: 'paquito',
      email: 'pancho@google.com'
    });
  });
});