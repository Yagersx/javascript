const repiteme = (palabra, numero) => {
    let texto="";
    for (let i = 0; i < numero; i++) {
        
        texto+= `${palabra}\n`;
        
    }

    return texto;
}


console.log(repiteme("Irving",10));