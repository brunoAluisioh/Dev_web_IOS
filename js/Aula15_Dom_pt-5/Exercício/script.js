//Criando um Array de objetos
const itens = [
]

//Chamando pelo Id
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let valor = document.getElementById('preco');
let filter = document.getElementById('filter');

//Evento = adicionar item 
form.addEventListener('submit', addItem);
// Evento = remover item 

//Pra não carregar a página
function addItem(e) {
    e.preventDefault();

    let newText = document.getElementById('item-text').value;
    let newNumber = document.getElementById('item-number').value;
    let newPreco = document.getElementById('item-preco').value;
    if (newNumber >0 && newPreco >0) {
    let descricao = `${newText} - Quantidade: ${newNumber} - Preço R$: ${newPreco * newNumber}`
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(descricao));
    li.quantidadeItem = newNumber
    li.nomeItem = newText
    li.precoItem = newPreco

    let addBtn = document.createElement('button');
    addBtn.className = 'btn btn-success btn-sm m-1 float-end adicionar';
    addBtn.appendChild(document.createTextNode('+'));

    let retirarBtn = document.createElement('button');
    retirarBtn.addEventListener('click', diminuirItem)
    retirarBtn.className = 'btn btn-primary btn-sm m-1 float-end retirar';
    retirarBtn.appendChild(document.createTextNode('-'));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm m-1 float-end delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.addEventListener('click', removeItem);

    li.appendChild(addBtn);
    li.appendChild(retirarBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    form.reset();
    itens.push(li);

// Função Remover Item
function removeItem() {
     itemList.removeChild(li)
}
//Função diminuir item
function diminuirItem() {
    let diminuir = newNumber -- 
    let descricao = `${li.nomeItem} - Quantidade: ${diminuir} - Preço R$: ${li.precoItem * diminuir}`
    li.innerText = descricao
}

}
else {
    alert(`Insira uma quantidade maior que 0`);
}
}
