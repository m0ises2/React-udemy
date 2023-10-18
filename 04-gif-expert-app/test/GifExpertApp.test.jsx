import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas de GifExpertApp component', () => {
    const newCategory = 'One Punch';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);

        expect(container).toMatchSnapshot();
    });

    test('debe existir el titulo GitExpertApp', () => {
       const title = 'GitExpertApp';

        render(<GifExpertApp />);
        expect(screen.getByRole('heading', { level: 1 } ).innerHTML).toBe(title);
    });

    test('debe mostrar la categoria ingresada en el DOM', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } } );
        fireEvent.submit(form);

        const categoryHeading = screen.getByRole('heading', { level: 3 });

        expect(categoryHeading.innerHTML).toContain(`${newCategory.toLowerCase()}`);
    });

    test('debe excluir la categoria si ya existe', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } } );
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: newCategory } } );
        fireEvent.submit(form);

        const categoryHeading = screen.getAllByRole('heading', { level: 3 });

        expect(categoryHeading.length).toBe(1);
    });

    test('debe cargar las imagenes de la categoria ingresada una vez que el loading desaparece', async () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } } );
        fireEvent.submit(form);

        await waitForElementToBeRemoved(screen.getByRole('heading', { level: 2 }));

        const allImgs = screen.getAllByRole('img');

        expect(allImgs.length).toBe(5);
    });
});
