
const arreglo = [1,2,3,4];
let arreglo2 = [...arreglo, 5];
let arreglo3 = arreglo2.map(elem => {
    return elem * 3;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
