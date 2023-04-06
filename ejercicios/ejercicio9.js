const array1= [1,2,3,4,5,6,7,8,9,10];
const array2= [2,4,5,12,15];


const elementosComunes = (array1, array2) =>{
    const filtrado = array1.filter(elemento => array2.includes(elemento));

    return filtrado;
}

console.log(elementosComunes(array1,array2));

