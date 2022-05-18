const alunos = [
    {nome: 'Ana', idade: 17, nota: 8, ano: '2°B'},
    {nome: 'Bruno', idade: 16, nota: 6, ano: '2°C'},
    {nome: 'Veronica', idade: 16, nota: 9, ano: '2°C'},
    {nome: 'Marta', idade: 15, nota: 5, ano: '3°C'},
    {nome: 'Brenno', idade: 19, nota: 6, ano: '3°C'},
    {nome: 'Maria', idade: 14, nota: 4, ano: '1°F'},
];

console.log(`Nome e Ano de cada aluno`)
alunos.forEach((nome)=>{
    console.log(nome.nome, nome.ano)
})

console.log(`Identificando alunos do 2°`)
let turma = alunos.filter((turma)=>{
    return turma.ano.match('2°') //verifica se o valor indicado existe 
})
turma.forEach((i)=> console.log(i.nome))

console.log(`Média da turma`)
let media = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota + alunos[4].nota + alunos[5].nota) /6
console.log(media.toFixed(2))

if(media >7){
    console.log(`Os alunos ficaram em cima da média`)
}

else if(media == 7) {
    console.log(`Os alunos ficaram na média`)
}

else {
    console.log(`Infelizmente não atingiu a média necessária estabelecida pela escola.`)
}