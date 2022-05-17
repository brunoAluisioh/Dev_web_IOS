// Método forEach com Array
const frutas = ['Maca', 'Pera', 'Melancia']
frutas.forEach(minhaFuncao);

function minhaFuncao(index, item) {
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
}

// Com Arrow Function
const frutas2 = ['Maca', 'Pera', 'Melancia']
frutas2.forEach((index, item)=>{
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
})

//Método forEach com Array de objetos
//Forma mais enxuta de escrever funções
const tarefas = [
    {
        id: 1, 
    texto: 'Aqui vai um texto'
    },
    {
        id: 2, 
    texto: 'Aqui vai dois textos'
    },
    {
        id: 3, 
    texto: 'Aqui vai três textos'
    }
];
tarefas.forEach((teste) => console.log(teste.texto))

//Método map 
const numeros = [16, 4, 9, 25];
const newArray = numeros.map(Math.sqrt); //Math.sqrt faz o calculo em raiz quadrada
console.log('Array antigo');
console.log(numeros);
console.log('Novo Array');
console.log(newArray);

//Outro exemplo de map 
const mapText = tarefas.map((valor)=> {
    return valor.texto;
})
console.log(mapText);

//Método filter()
const idade = [32, 15, 8, 98, 70]

let filtroIdade = idade.filter((idades)=> {
    return idades >= 18;
})
console.log(filtroIdade)

//Método find ()
const meuArray = [
    {Nome: 'Diego', idade: 12, altura: 120, sexo: 'masculino'},
    {Nome: 'Jissara', idade: 15, altura: 170, sexo: 'feminino'},
    {Nome: 'Jheniffer', idade: 70, altura: 180, sexo: 'feminino'}
];

console.log(
    meuArray.find((genero)=>{
        return genero.sexo === 'feminino'
    })
);


meuArray.filter((genero)=>{
    return genero.sexo === 'feminino'
})
console.log(meuArray.filter((genero)=>{
    return genero.sexo === 'feminino'
}))