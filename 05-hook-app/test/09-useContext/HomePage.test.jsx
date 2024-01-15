import { render, screen } from '@testing-library/react'
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en HomePage', () => {
  const user = {
    id: 123,
    name: 'Moises'
  };

  test('debe mostrar el componente sin el usuario', () => {
    UserContext
    render(
      <UserContext.Provider value={{ user:null }}>
          <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
  });

  test('debe mostrar el componente con el usuario', () => {
    UserContext
    render(
      <UserContext.Provider value={{ user }}>
          <HomePage />
      </UserContext.Provider>
    );

    const preTagContainingTheUser = screen.getByLabelText('pre');
  
    expect(preTagContainingTheUser.innerHTML).toBe(JSON.stringify(user, null, 2));
  });
});