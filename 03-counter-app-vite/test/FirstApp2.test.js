import { render, screen } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    const title = 'Hola, soy Moises';
    const subtitle = 'Soy un subtitle';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el mensaje "Hola, soy Moises"', () => {
        render(<FirstApp title={title} />);

        expect(screen.getByTestId('test title')).toBeTruthy();
    });

    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subtitle={subtitle} />);

        expect(screen.getAllByText(subtitle).length).toBe(1);
    })
 });
