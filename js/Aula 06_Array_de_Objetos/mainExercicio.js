let alunos = [
    { 
    nome: 'Bruno',
    idade: 21,
    cidade: 'São Paulo',
    turma: 'ADS',
    materia: 'Desenvolvimento Web',
    carteirinha: 'Identidade',
    periodo: 'Noturno',
    nota: [3, 10, 8, 9],
    endereco: ['Tocatins', 'Vila Maria Alta'],
},

 {
    nome: 'Eduardo',
    idade: 25,
    cidade: 'Rio de Janeiro',
    turma: 'tecnologia',
    materia: 'Banco de Dados',
    carteirinha: 'perfil',
    periodo: 'manha',
    nota: [8, 7, 5, 9],
    endereco: ['Curitiba', 'Santana'],
},

 {
    nome: 'Diego',
    idade: 18,
    cidade: 'Rio Grande do Sul',
    turma: 'redes de computador',
    materia: 'Ip',
    carteirinha: 'documentação',
    periodo: 'tarde',
    nota: [5, 4, 6, 7],
    endereco: ['Bahia', 'Tucuruvi'],
},
]

let media = (alunos[0].nota[0] + alunos[0].nota[1] + alunos[0].nota[2] + alunos[0].nota[3]) /4
console.log(media)

let media2 = (alunos[1].nota[0] + alunos[1].nota[1] + alunos[1].nota[2] + alunos[1].nota[3]) /4
console.log(media2)

let media3 = (alunos[2].nota[0] + alunos[2].nota[1] + alunos[2].nota[2] + alunos[2].nota[3]) /4
console.log(media3)

console.log(`O aluno ${alunos[0].nome} obteve as notas ${alunos[0].nota} que mora em ${alunos[0].endereco} e teve a média ${media} portanto foi aprovado`)
console.log(`O aluno ${alunos[1].nome} obteve as notas ${alunos[1].nota} que mora em ${alunos[1].endereco} e teve a média ${media2} portanto foi aprovado`)
console.log(`O aluno ${alunos[2].nome} obteve as notas ${alunos[2].nota} que mora em ${alunos[2].endereco} e teve a média ${media3} portanto infelizmente não obteve a média e foi reprovado`)