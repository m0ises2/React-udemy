import { render } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    test.skip("Debe hacer match con el snapshot", () => {
        const title = 'Moises';

        const { container } = render(<FirstApp title={ title } />);
        
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el titulo en un h1', () => {
        const title = 'Moises';

        const { getByTestId } = render(<FirstApp title={ title } />);

        expect( getByTestId('test title') ).toBeTruthy();
        expect( getByTestId('test title').innerHTML ).toContain(title);

    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Moises';
        const subtitulo = 'Soy un subtitulo :D';

        const { getByTestId } = render(
                <FirstApp 
                    title={ title }
                    subtitle={ subtitulo }
                />
            );

        expect( getByTestId('test subtitle') ).toBeTruthy();
        expect( getByTestId('test subtitle').innerHTML ).toContain(subtitulo);
    });
 });
