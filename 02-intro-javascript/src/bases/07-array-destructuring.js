const personajes = ["Goku", "Vegeta", "Trunks"];
const [ , , personaje2 ] = personajes;
console.log(personaje2);

const retornaArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. primer valor del arreglo se llama nombre
// 2. el segundo se llamará setNombre

const getUseState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
};

const [nombre, setNombre] = getUseState('Goku');
console.log(nombre);
setNombre();