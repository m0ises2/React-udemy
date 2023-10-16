import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas de 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe con async/await', async () => {
        const id = 1;

        const heroe = await getHeroeByIdAsync(id);

        expect(heroe).toMatchObject({
            name: 'Batman'
        });
    });

    test('getHeroeByIdAsync debe retornar un heroe con promesas y done', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toMatchObject({
                name: 'Batman'
            });

            done();
        });
    });

    test('getHeroeByIdAsync debe retornar un error si el hero no existe con promesas y done', (done) => {
        const id = 100;

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBeUndefined();

            done();
        }).catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe' + id);

            done();
        });
    });
});
