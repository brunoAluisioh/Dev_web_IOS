let colaboradores = [
    {
        nome: 'Bruno',
        salario: 5000,
        vinculo: 'CLT'
    },
    {
        nome: 'Brenno',
        salario: 3000,
        vinculo: 'PJ',
    },
    {
        nome: 'Weverton',
        salario: 4000,
        vinculo: 'CLT',
    },
    {
        nome: 'Julia',
        salario: 6000,
        vinculo: 'PJ',
    },
    {
        nome: 'Mayara',
        salario: 7000,
        vinculo: 'CLT',
    },
];

const inss = [
    [0, 1212, 0.075], // 7.50% divido por 100 
    [1212, 2427, 0.09], // 9.00% divido por 100 
    [2427, 3641, 0.12], // 12.00% divido por 100 
    [3641, 7087, 0.14], // 14.00% divido por 100 
];


// Contador 1
var valor = colaboradores[0].salario 
if (colaboradores[0].vinculo == "PJ" ) {
    var inss1 = 0
}
else if (valor > 7087) {
    var inss1 = 0.14 * 7087
}
else if (valor > 3641) {
    var inss1 = 0.14 * valor
}
else if (valor > 2427) {
    var inss1 = 0.12 * valor
}
else if (valor > 1212) {
    var inss1 = 0.09 * valor
}
else {
    var inss1 = 0.075 * valor
}
console.log(`O salario de: ${valor} paga de inss ${inss1.toFixed(2)} reias. Vínculo ${colaboradores[0].vinculo}`)

// Contador 2
var valor = colaboradores[1].salario 
if (colaboradores[1].vinculo == "CLT") {
    var inss1 = 0
}
else if (valor > 7087) {
    var inss1 = 0.14 * 7087
}
else if (valor > 3641) {
    var inss1 = 0.14 * valor
}
else if (valor > 2427) {
    var inss1 = 0.12 * valor
}
else if (valor > 1212) {
    var inss1 = 0.09 * valor
}
else {
    var inss1 = 0.075 * valor
}
console.log(`O salario de: ${valor} paga de inss ${inss1.toFixed(2)} reias. Vínculo ${colaboradores[1].vinculo}`)

//Contador 3
var valor = colaboradores[2].salario 
if (colaboradores[2].vinculo == "CLT") {
    var inss1 = 0
}
else if (valor > 7087) {
    var inss1 = 0.14 * 7087
}
else if (valor > 3641) {
    var inss1 = 0.14 * valor
}
else if (valor > 2427) {
    var inss1 = 0.12 * valor
}
else if (valor > 1212) {
    var inss1 = 0.09 * valor
}
else {
    var inss1 = 0.075 * valor
}
console.log(`O salario de: ${valor} paga de inss ${inss1.toFixed(2)} reias. Vínculo ${colaboradores[2].vinculo}`)




