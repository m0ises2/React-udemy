
const saludar = function ( nombre ) {
    return `Hola ${nombre}`;
}
const saludar2 = ( nombre ) => {
    return `Hola desde un arrow function ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola desde un arrow function ${nombre}`;

console.log(saludar('Moises'));
console.log(saludar2('Moises'));
console.log(saludar3('Moises'));

const getUser = () => ({ uid: '123', username: '7747' });
console.log(getUser());

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123456',
        username: nombre
    }
};

const getUsuarioActivo2 = nombre => ({ uid: 'ABC123456', username: nombre });

const usuarioActivo = getUsuarioActivo('Moises');

console.log(usuarioActivo);
