const valor = [17, 43, 8, 4, 97, 56, 29, 50]
valor.forEach((i)=>{
    if (i % 2 == 0) {
        console.log(`O número ${i} é par`)
    }
    else {
        console.log(`O número ${i} é ímpar`)
    }
})

let filtroMenor = valor.filter((menor)=>{
    return menor <= 18 
})
console.log(filtroMenor)

