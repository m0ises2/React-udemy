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

  test('should show the searched hero and the input with the search value in it', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/?q=batman']
    });

    render(
        <AuthContext.Provider value={ contextValue }>
          <RouterProvider router={router} />
        </AuthContext.Provider>    
    );
    
    const input = screen.getByRole('textbox');
    const img = screen.getByRole('img');
    const hiddenMsg = screen.getByLabelText('search-a-hero-msg');

    expect(input.value).toBe('batman');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    expect(hiddenMsg.style.display).toContain('none');
  });
});
