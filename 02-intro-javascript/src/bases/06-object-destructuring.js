
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const {
    nombre, clave, edad,
} = persona;

console.log(nombre);

const usecontext = ({nombre, edad, clave, rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 1234,
            lng: 43566
        }
    }
};

const { nombreClave, anios, latlng: { lat, lng } } = usecontext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(rest);
