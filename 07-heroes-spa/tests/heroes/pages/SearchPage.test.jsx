import { render, screen } from '@testing-library/react';
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';

describe('SearchPage tests', () => {
  const routes = [
    {
        path: '/',
        element: <SearchPage />,
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

  test('should match the defaults values agains snapshot', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/']
    });

    const { container } = render(
        <AuthContext.Provider value={ contextValue }>
          <RouterProvider router={router} />
        </AuthContext.Provider>    
    );

    expect(container).toMatchSnapshot();
  });
});
