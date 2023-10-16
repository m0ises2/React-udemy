import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas de 11-async-await', () => {
    test('getImagen debe retornar un url de la imagen', async () => {
        const imageUrl = await getImagen();

        expect(typeof imageUrl).toBe('string')
    });
});
