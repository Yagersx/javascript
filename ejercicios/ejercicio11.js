//texto y target y censurar las coincidencias de la busqueda.
//si el texto y busqueda estan vacios entonces "no se puede mostrar";



const censurar = (texto = false , palabraCensurada = false) => {
    
    if(!texto && !palabraCensurada) return "No se puede realizar la busqueda";
    if(!texto) return "No se tiene el texto";
    if(!palabraCensurada) return "No se tiene la palabra a censurar";

    texto= texto.replace(new RegExp(palabraCensurada, 'gi'), '[CENSURADO]');
    return texto;
}

// console.log(censurar("Bienvenidos todos a yagerxs", "yagerxs"));
// console.log(censurar("Bienvenidos todos a yagerxs"));
// console.log(censurar(null, "yagerxs"));
// console.log(censurar());