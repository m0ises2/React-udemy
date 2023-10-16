import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

// Jest docs https://jestjs.io/docs/using-matchers

describe('Prueba en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'userN4m3'
        };
        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUsuariActivo debe retornar un objeto', () => {
        const name = 'Moisés';
        
        const userActivo = getUsuarioActivo(name);

        expect(userActivo).toMatchObject({
            username: name
        })
    });
});
