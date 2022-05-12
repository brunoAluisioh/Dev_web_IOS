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

console.clear();
if (colaboradores[0].vinculo == 'CLT') {
    const valor = colaboradores[0].salario;
    if (valor < 7087)
    console.log(`O colaborador ${colaboradores[0].nome} pertence a contratação CLT e sua contribuição conforme a Tabela do Inss de 2022 é de: ${(valor * 14) / 100} reais.`); //5000*14%= 700
}







