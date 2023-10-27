//2.- EL "LENGUAJE HACKER"
//Escribe un programa que reciba un texto y transforme lenguaje natural a
//"lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
//se caracteriza por sustituir caracteres alfanuméricos.
// - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
// con el alfabeto y los números en "leet".
// (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")

function convertiraLeet(texto) {
    const tablaLeet = {
        a: "4",
        b: "8",
        e: "3",
        g: "6",
        l: "1",
        o: "0",
        s: "5",
        t: "7",
        z: "2",
     }  
    
     let textoLeet = "";
     for (let i = 0; i < texto.length; i++) {
         const caracter = texto[i].toLowerCase();
        if(tablaLeet.hasOwnProperty(caracter)){
            textoLeet += tablaLeet[caracter];
        }else{
            textoLeet += texto[i];
        }
     }
     return textoLeet; 
    }