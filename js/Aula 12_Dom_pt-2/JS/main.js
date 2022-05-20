// Metodo getElement     By   Id
//       pega Elemento  pelo  Id

//Criando variavel
let titulo = document.getElementById('titulo')

// alterando conteudo html
titulo.innerHTML = 'Vai perder o PC galera do AWS' //inserir algo no html

// configurando o CSS no HTML
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3 px #000';
titulo.style.margin = "10px";

// Metodo getElementBy serve para acessar classe

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2'; // modificando a class 
items[1].style.fontWeight = 'bold'; // aplicando estilização
items[1].style.backgroundColor = 'yellow';
items[1].style.padding = '10px'; 


// Utilizando o for para percorrer a lista
for (let i = 0;  i < items.length; i++){
    items[i].style.backgroundColor = 'red';
    items[1].style.fontWeight = 'bold';
}


// Metodo getElementsByTagName (acessando pelo nome da tag)
let li = document.getElementsByTagName('li')
console.log(li);
for(let i = 0; i < li.length; i+=2){
    li[i].style.backgroundColor = 'pink'
}

// Metodo getElementsByName (acessando pelo Name) name é unico!
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Pose de quebrada';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Recebaa';
nome[1].style.backgroundColor = 'yellow';

//Remover conteudo

let item2 = document.getElementById('item2')
item2.remove();

//Inserir um valor na url
let lista = document.getElementById('items')
let item1 = document.getElementById('item1')
lista.insertBefore(item2, item1.nextSibling) // before é antes

// Alterar estilo da list, tirando as bolinhas
let ul = document.getElementById('items');
ul.style.listStyle = 'none';
ul.style.listStyle = 'decimal inside'


