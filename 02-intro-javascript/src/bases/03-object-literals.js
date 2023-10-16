const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipCode: 145254,
        lat: 748.2451234,
        lng: 77.8741584
    }
};

// console.table(persona);
console.log(persona);

const persona2 = { ...persona };

console.log(persona2);
