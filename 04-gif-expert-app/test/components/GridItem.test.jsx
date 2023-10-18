import { render, screen } from '@testing-library/react';
import { GridItem } from "../../src/components";

describe('pruebas de componente GridItem', () => {
    const url = 'https://www.google.com/';
    const title = 'This is a mock title';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(
            <GridItem
                title = { title }
                url = { url }
            />
        );

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicados', () => {
        render(
            <GridItem
                title = { title }
                url = { url }
            />
        );

        const { alt, src } = screen.getByRole('img');

        expect(alt).toBe(title);
        expect(src).toBe(url);
    });

    test('debe mostrar el titutlo en el componente', () => {
        render(
            <GridItem
                title = { title }
                url = { url }
            />
        );

        expect(screen.getByText(title)).toBeTruthy();
    });
});

