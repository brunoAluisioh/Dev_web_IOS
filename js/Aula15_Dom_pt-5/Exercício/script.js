//Criando um Array de objetos
const itens = [
    {
        item: 'Feijão',
        quantidade: 1,
        valor: '9,00',
    },
    {
        item: 'Arroz',
        quantidade: 1,
        valor: '23,00',
    },
    {
        item: 'Café',
        quantidade: 1,
        valor: '12,00',
    },
    {
        item: 'Leite',
        quantidade: 1,
        valor: '4,00',
    },

    {
        item: 'Macarrão',
        quantidade: 1,
        valor: '3,00',
    },
];

//Chamando pelo Id
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let valor = document.getElementById('preco');
let filter = document.getElementById('filter');

//Evento = adicionar item 
form.addEventListener('submit', addItem);
// Evento = remover item 
itemList.addEventListener('click', removeItem);
//Evento = Buscar item 
filter.addEventListener('keyup', buscarItems);

//Pra não carregar a página
function addItem(e) {
    e.preventDefault();

    let newText = document.getElementById('item-text').value;
    let newNumber = document.getElementById('item-number').value;
    let newPreco = document.getElementById('item-preco').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newText));

    let addBtn = document.createElement('button');
    addBtn.className = 'btn btn-success btn-sm m-1 float-end adicionar';
    addBtn.appendChild(document.createTextNode('+'));

    let retirarBtn = document.createElement('button');
    retirarBtn.className = 'btn btn-primary btn-sm m-1 float-end retirar';
    retirarBtn.appendChild(document.createTextNode('-'));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm m-1 float-end delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(addBtn);
    li.appendChild(retirarBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    form.reset(); 
}

// Função Remover Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
}
}