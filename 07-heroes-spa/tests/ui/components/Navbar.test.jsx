import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Navbar tests', () => {
  const routes = [
    {
        path: '/',
        element: <Navbar />,
    }
  ];

  const contextValue = {
    logout: jest.fn(),
    authState: {
        logged: true,
        user: {
          id: 'ABC',
          name: 'Test User'
        }
    }
  };

  beforeEach( () => jest.clearAllMocks());

  test('should show the logged user name', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/']
    });

    render(
        <AuthContext.Provider value={ contextValue }>
          <RouterProvider router={router} />
        </AuthContext.Provider>    
    ); 

    expect(screen.getByLabelText('span-user-name')).toBeTruthy();
    expect(screen.getByLabelText('span-user-name').innerHTML).toBe('Test User');
  });

  test('should call the logout and navigate functions when clicking the logout button', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/']
    });

    render(
        <AuthContext.Provider value={ contextValue }>
          <RouterProvider router={router} />
        </AuthContext.Provider>    
    ); 

    const logoutBtn = screen.getByRole('button');

    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {
      replace: true
    });
  });
});
