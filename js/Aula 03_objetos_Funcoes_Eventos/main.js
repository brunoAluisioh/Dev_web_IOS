//Estrutura de uma função 
/*
function NomeDaFuncao(valor1,valor2) {
    return valor1 * valor2 
}
*/

//funcoes 
function AddNums(num1 = 2, num2 = 5) {
    return num1 + num2; 
}

const somaAddNums = (num1 = 2, num2 = 5) => {
    return num1 + num2
}
console.log(somaAddNums());

//console.log(AddNums());
let x = AddNums(10,11);
console.log(x)
console.clear();

//Criando Arrow Function 
const hello = (primeiro = 2, segundo = 2) => {
    return primeiro * segundo;
}
//retornar o resultado da função 
console.log(hello());

//Criando Objetos
const aluno = {
    primeiroNome: 'Bruno',
    segundoNome: 'Aluisio',
    idade: '21',
}
console.log(aluno.primeiroNome);

//Evento onload para mostrar mensagem enquanto estiver carregando a página
const boasVindas = () =>{
    alert('Bem vindo a nossa página Otario');
    console.log('Bem vindo a nossa página Otario');
}

function eventclick() {
    console.log('Você clicou aqui otario')
}