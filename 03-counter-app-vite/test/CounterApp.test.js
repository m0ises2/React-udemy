import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from "../src/CounterApp";

describe('Pruebas de CounterApp', () => {
    const initialValue = 10;

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ initialValue } />);

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial de 100', () => {
        render( <CounterApp value={ initialValue } /> );

        expect(screen.getByText(initialValue)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${initialValue}`);
    });

    test('debe incrementar 1 al dar click en +1', () => {
        render( <CounterApp value={ initialValue } /> );
        
         fireEvent.click( screen.getByText('+1') );
        
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${11}`);
    });

    test('debe decrementar 1 al dar click en -1', () => {
        render( <CounterApp value={ initialValue } /> );
        
         fireEvent.click( screen.getByText('-1') );
        
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${9}`);
    });

    test('debe resetear al dar click en reset', () => {
        render( <CounterApp value={ initialValue } /> );

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));
        
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${initialValue}`);
    });
});
