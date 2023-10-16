import { 
    getHeroeById,
    getHeroesByOwner
} from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas de 08-imp-exp', () => {
    test('getHeoreById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toMatchObject({
            name: 'Batman'
        });
    });

    test('getHeoreById debe retornar undefined si el heroe no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeUndefined();
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heoresDC = getHeroesByOwner(owner);

        expect(heoresDC.length).toBe(3);
        expect(heoresDC).toEqual(
            [
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },
                {
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                },
                {
                    id: 4,
                    name: 'Flash',
                    owner: 'DC'
                }
            ]
        );
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual(
            [
                {
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                },
                {
                    id: 5,
                    name: 'Wolverine',
                    owner: 'Marvel'
                }
            ]
        );
    });
});
