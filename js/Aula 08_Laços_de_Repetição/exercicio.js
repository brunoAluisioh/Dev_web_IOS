// Método While 
let i = 1; {
let tabuada = 3
    while (i <= 10){
        let resultado = tabuada * i
        console.log(`Método While: ${i} x ${tabuada} = ${resultado}`)
        i++
    }
}

// Método For
for (let i = 1; i <= 10; i++) {
    let tabuada = 6;
    let resultado = tabuada * i 
    console.log(`Método For: ${i} x ${tabuada} = ${resultado}`);
}

// Método Do 
var contador = 1;
var tabuada = 5;
do {
    let resultado = contador * tabuada
    console.log(`Método Do: ${contador} x ${tabuada} = ${resultado}`)
    contador++;
} while (contador <= 10);
