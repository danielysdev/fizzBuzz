//Escribe un programa que muestre por consola (con un print)
//los números de 1 a 100 (ambos incluidos y con un salto de linea entre 
//cada impresión), sustituyendo los siguientes: 
// - Múltiplos de 3 por la palabra "fizz"
// - Múltiplos de 5 por la palabra "buzz"
// - Múltiplos de 3 y 5 a la vez por la palabra "fizzbuzz" 

for (let numeros=1; numeros<=100; numeros++) {

    if (numeros%3===0 && numeros%5===0 ) {
        console.log("fizzbuzz");
    } 
    
    else if (numeros%5===0) {
        console.log("buzz");
    }

    else if (numeros%3===0) {
        console.log("fizz");
    }

    else {
        console.log (numeros);      
    }
}