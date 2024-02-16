import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { HeroesRoutes } from "../../../src/heroes/routes/HeroesRoutes";

describe('HeroesRoutes tests', () => {
    const routes = [
        {
            path: '/',
            element: <HeroesRoutes />,
            children: [
                {
                  path: 'marvel',
                  element: <h1> Marvel Page </h1>
                },

              ] 
        },
        {
            path: '/login',
            element: <h1> Login Page </h1>
        }
    ];

    test('should navigate to the login page if the user is not authenticated', () => {
        const contextValue = {
            authState: {
                logged: false
            }
        };
        
        const router = createMemoryRouter(routes, {
            initialEntries: ['/']
        });

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Login Page');
    });

    test('should store in localStorage the last page visited', () => {
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: 'ABC',
                    name: 'Pepito pregunton'
                }
            }
        };
        const entryPageUrl = '/marvel';
        const router = createMemoryRouter(routes, {
            initialEntries: [entryPageUrl]
        });
        
        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', entryPageUrl);
        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Marvel Page');
    });
});