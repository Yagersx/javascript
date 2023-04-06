const hastaCero = (n) =>{
    let listado="";
    for (let index = n; index >= 0; index-=8) {
        listado+=`-n°${index}\n`;
    }

    return listado;
}

console.log(hastaCero(100));