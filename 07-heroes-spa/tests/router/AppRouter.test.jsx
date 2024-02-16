import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('AppRouter tests', () => {
    test('should show the login page if the user is not authenticated', () => {
        const contextValue = {
            authState: {
                logged: false
            }
        };
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>    
        );

        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Login');
    });

    test('should show the login page if the user is not authenticated', () => {
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: 'ABC',
                    name: 'Pepito'
                }
            }
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>    
        );

        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Marvel Comics');
    });
});