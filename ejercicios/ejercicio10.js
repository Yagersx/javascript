const escalera = (numeroNiveles)=>{

    for (let nivel = 0; nivel <= numeroNiveles; nivel++) {
        let escalera = "";
        for (let escalones = 0; escalones < nivel; escalones++) {
            
            escalera+="*";
            
        }
        console.log(escalera);
    }

}

escalera(5);