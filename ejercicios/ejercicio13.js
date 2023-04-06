//dividir el array en X arrays los cuales sus tamaños seran pasados por parametro;

const dividirArray = (arrayPrincipal, limiteElementos)=>{
    let arrays=[];

    for (let i = 0; i < arrayPrincipal.length; i++) {

        let ultimoArreglo= arrays[arrays.length-1];

        

        if(typeof ultimoArreglo!= 'undefined' && ultimoArreglo.length<limiteElementos){
            ultimoArreglo.push(arrayPrincipal[i]);
        }else{
            arrays.push([arrayPrincipal[i]]);
        }
        
    }

    return arrays;
}

console.log(dividirArray([1,2,3,4,5,6,7,8],3));