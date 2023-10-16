import getHeroeById, { getHeroesByOwner } from './bases/08-import-exports';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//        console.log('2 segundos despues');
       
//        const heroe = getHeroeById(2);

//        resolve(heroe);
//     }, 2000);
// });

// promesa.then((data) => {
//     console.log('Then de la promesa: ', data);
// }).catch(err => {
//     console.warn(err)
// });

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
           console.log('2 segundos despues');
           
           const heroe = getHeroeById(id);
           if (heroe) resolve(heroe);

           reject('Heroe no encontrado');
        }, 2000);
    });
};

getHeroeByIdAsync(74).then(data => {
    console.log('El heore es: ', data)
}).catch(err => {
    console.warn(err)
});
