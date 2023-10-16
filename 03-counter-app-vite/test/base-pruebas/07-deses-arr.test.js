import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas de 07-deses-arr', () => {
    test('debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));

    });
});
