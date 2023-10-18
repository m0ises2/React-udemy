import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src//components";

describe('Pruebas de AddCategory', () => {
    const inputValue = 'A new Category this is';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<AddCategory onNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: { value: inputValue } } );

        expect(container).toMatchSnapshot();
    });

    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={ () => {} } />);
        
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: { value: inputValue } } );

        expect(input.value).toBe(inputValue);
    });

    test('debe llamar onNewCategory si el input tiene un valor valido', () => {
        const onNewCAtegoryMock = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCAtegoryMock } />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: inputValue } } );
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNewCAtegoryMock).toHaveBeenCalledWith(inputValue);
        expect(onNewCAtegoryMock).toHaveBeenCalledTimes(1);
    });

    test('no debe llamar a onNewCategory si el valor es un string vacio', () => {
        const onNewCAtegoryMock = jest.fn();

        render(<AddCategory onNewCategory={ onNewCAtegoryMock } />);

        const form = screen.getByRole('form');
        
        fireEvent.submit(form);

        expect(onNewCAtegoryMock).not.toHaveBeenCalled();
    });
});
