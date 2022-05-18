// Crie um array de objetos com quatro objetos e cada objeto tera 4 propriedades
//retorne o nome de todos os alunos
//retorne todos os alunos que tirou nota maior que 6 
//Retorne o primeiro aluno que tirou nota menor que 5 

const alunos = [
    {nome: 'Bruno', idade: 21, turma: 'ADS', nota: 10},
    {nome: 'Eduardo', idade: 18, turma: 'ADS', nota: 6},
    {nome: 'Luiz', idade: 25, turma: 'ADS', nota: 6},
    {nome: 'Neymar', idade: 32, turma: 'ADS', nota: 3},
];

alunos.forEach((pessoa) => console.log(pessoa.nome))

const mapNota = alunos.filter((valor)=> {
    return valor.nota >= 6;
})
console.log(mapNota);

let menorNota = alunos.find((nota)=>{ 
    return nota.nota < 5
})
console.log(menorNota)