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
itemList.addEventListener('click', removeItem);

//Pra não carregar a página
function addItem(e) {
    e.preventDefault();

    let newText = document.getElementById('item-text').value;
    let newNumber = document.getElementById('item-number').value;
    let newPreco = document.getElementById('item-preco').value;

    let descricao = `${newText} - Quantidade: ${newNumber} - Preço R$: ${newPreco}`
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

    li.appendChild(addBtn);
    li.appendChild(retirarBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    form.reset(); 

    itens.push(li)
}

// Função Remover Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
}
}

//Função diminuir item
function diminuirItem() {
    let li = this.parentElement
    let descricao = `${li.nomeItem} - Quantidade: ${li.quantidadeItem -=1} - Preço R$: ${li.precoItem * li.quantidadeItem}`
    li.innerText = descricao

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

    li.appendChild(addBtn);
    li.appendChild(retirarBtn);
    li.appendChild(deleteBtn);
}

//Função Aumentar

