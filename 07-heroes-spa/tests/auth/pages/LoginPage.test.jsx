import { render, screen } from "@testing-library/react";
import { Navigate, RouterProvider, createMemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { AuthContext } from "../../../src/auth";

describe('LoginPage tests', () => {
    const routes = [
        {
            path: '/login',
            element: <LoginPage />
        },
        {
          path: "/",
          element: <h1> Marvel Page </h1>
        },
    ];

    test('should show the login page if the user is not authenticated', () => {
        const contextValue = {
            authState: {
                logged: false
            }
        };
        
        const router = createMemoryRouter(routes, {
            initialEntries: ['/login']
        });

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Login');
    });

    test('Should navigate if the user is authenticated', () => {
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: 'ABC',
                    name: 'Test User'
                }
            }
        };
        
        const router = createMemoryRouter(routes, {
            initialEntries: ['/login'] // this is how we tell the router where to navigate
        });

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Marvel Page');
    });
});
