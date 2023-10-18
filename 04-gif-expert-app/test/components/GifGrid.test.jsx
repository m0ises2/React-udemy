import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas de GifGrid component', () => {
    const category = 'Dragon Ball';

    test('debe mostar el mensaje loading cuando carga', () => {
        useFetchGifs.mockReturnValue({
            isLoading: true,
            images: [],
        });

        render(<GifGrid category = { category } />);

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('debe mostrar imagenes ', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Goku',
            url: 'https://www.google.com'
        },
        {
            id: 'CBA',
            title: 'Vegeta',
            url: 'https://www.google.com'
        }];

        useFetchGifs.mockReturnValue({
            isLoading: false,
            images: gifs
        });

        render(<GifGrid category = { category } />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
