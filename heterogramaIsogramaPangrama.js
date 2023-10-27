//3.- HETEROGRAMA, ISOGRAMA, PANGRAMA
//Crear 3 funciones, cada una encargada de detectar si una cadena de
//texto es un heterograma, un isograma o un pangrama.
// - Debes buscar la definición de cada uno de estos términos.


//Heterograma
function heterograma(texto){
    let mapa = new Map();
    console.log(mapa);
    for(let letraDelTexto of texto.toLowerCase()){
        if(mapa.has(letraDelTexto)){
            console.log(mapa);
            return `El texto: ${texto} no es heterograma`
        }
        mapa.set(letraDelTexto, true);
        console.log(mapa);
    }
    return `El texto recibido: "${texto}" es heterograma`
}


//Isograma
function isograma(texto){
    let mapa = new Map();
    console.log(mapa);
    for(let letraDelTexto of texto.toLowerCase()){
        if(mapa.has(letraDelTexto)){
            console.log(mapa);
            return `El texto: ${texto} es un Isograma`  
        }
        mapa.set(letraDelTexto, true);
        console.log(mapa); 
    }
    return `El texto recibido: "${texto}" no es isograma`
}


//Pangrama
function Pangrama (texto){
    let abc = 'abcdefghijklmnñopqrstuvwxyz';
    for (let letra of abc){
        if (abc.split('').every(letra => texto.includes(letra))){
            return `El texto recibido: "${texto}" es un panagrama`

        }
    }
            return `El texto recibido: "${texto}" no es un panagrama`
}