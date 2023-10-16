describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe fallar', () => {
        // AAA Principle
        // A - Initialitation
        const number1 = 1;
        const number2 = 2;
        // A - Act
        const addNumber1AndNumber2 = number1 + number2;
        // A - Assert
        expect(number1 + number2).toBe(addNumber1AndNumber2);
    });
});
