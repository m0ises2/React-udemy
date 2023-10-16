import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas 02-template-string', () => {
    test('deberia retornar un string de saludo', async () => {
        const name = 'Moises';

        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}!`);
    });
});
