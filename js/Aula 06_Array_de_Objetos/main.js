// Objetos
let pessoa = {
  firstName: "Irmão do",
  lastName: "Jorel",
  idade: 10,
  corDosOlhos: "preto",
  hobbies: ["música", "filmes", "esportes"],
  endereco: {
    rua: "Rua do bobos",
    numero: 0,
    cidade: "São Paulo",
    estado: "SP",
  },
};
console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

//Tipos
console.log("Tipos");
console.log(typeof pessoa.firstName);
console.log(typeof pessoa.hobbies);
console.log(typeof pessoa.endereco);

// Atribuição via desestruturação
console.clear();
const {
  firstName,
  lastName,
  endereco: { cidade },
} = pessoa;
console.log(`${firstName} ${lastName} é de ${cidade}`);

// Atribuição via desestruturação com arrays
console.clear();
const array = [1, 2, 3, 4, 5];
let [valor01, valor02, ...resto] = array;
console.log(valor01);
console.log(valor02);
console.log(resto);

// modo igual
let [valorA, valorB, valorC, ...restante] = array;
console.log(valorA);
console.log(valorB);
console.log(valorC);
console.log(restante);

// Array de objetos
console.clear();
const tarefas = [
  {
    id: 1,
    texto: 'Levar o lixo para fora',
    isCompleted: true,
  },
  {
    id: 2,
    texto: 'Encontrar com o chefe',
    isCompleted: true,
  },
  {
    id: 3,
    texto: 'Consulta no dentista',
    isCompleted: false,
  },
];
console.log(tarefas);
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);

// Transformar um array em JSON
//Converter Objeto em JSON: .stringify()
console.clear();
console.log(JSON.stringify(tarefas));

// JSON
//Converter JSON em Objeto: .parse()
console.clear();
//const tarefa_JSON =
//'[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},{"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';
let divisao_JSON = ''
divisao_JSON += '[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true}';
divisao_JSON += ',{"id":2,"texto":"Encontrar com o chefe","isCompleted":true}';
divisao_JSON += ',{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';

const objeto = JSON.parse(divisao_JSON);
console.clear();
console.log(objeto);

