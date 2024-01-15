import { render, screen } from '@testing-library/react'
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en MainApp', () => {
  test('debe mostrar el home page', () => {
    render(
      <MemoryRouter>
        <MainApp/>
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeTruthy();
  });

  test('debe mostrar el login page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
      </MemoryRouter>
    );

    expect(screen.getByText('Login Page')).toBeTruthy();
  });

  test('debe mostrar el about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp/>
      </MemoryRouter>
    );

    expect(screen.getByText('Aboutw Page')).toBeTruthy();
  });
});