//Criando um Array de objetos
const itens = [];

//Chamando pelo Id
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let valor = document.getElementById('preco');
let total1 = document.getElementById('total');
let filter = document.getElementById('filter');
let soma = document.getElementById('soma');

//Evento = adicionar item
form.addEventListener('submit', addItem);
// Evento = remover item

//Pra não carregar a página
function addItem(e) {
    e.preventDefault();

    let newText = document.getElementById('item-text').value;
    let newNumber = document.getElementById('item-number').value;
    let newPreco = document.getElementById('item-preco').value;
    let valor = Number(newNumber * newPreco);
    let lixo = -valor;
    total(valor);
    if (newNumber > 0 && newPreco > 0) {
        let descricao = document.createTextNode(
            `${newText} - Preço unitário R$: ${newPreco}`
        );

        let li = document.createElement('li');
        li.className = 'list-group-item';

        li.nomeItem = newText;

        let addBtn = document.createElement('button');
        addBtn.className = 'btn btn-success btn-sm m-1 float-end adicionar';
        addBtn.appendChild(document.createTextNode('+'));

        let retirarBtn = document.createElement('button');
        retirarBtn.addEventListener('click', diminuirItem);
        retirarBtn.className = 'btn btn-primary btn-sm m-1 float-end retirar';
        retirarBtn.appendChild(document.createTextNode('-'));

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm m-1 float-end delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        deleteBtn.addEventListener('click', removeItem);

        li.appendChild(descricao);
        li.appendChild(addBtn);
        li.appendChild(retirarBtn);
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
        let li2 = document.createElement('li');
        li2.className = 'list-group-item';
        li2.appendChild(
            document.createTextNode(
                `${li.nomeItem} - Quantidade: ${newNumber} --> Preço R$: ${
                    newPreco * newNumber
                }`
            )
        );
        total1.appendChild(li2);

        // Função Remover Item
        function removeItem() {
            itemList.removeChild(li);
            total1.removeChild(li2);
            total(lixo);
        }

        function adicionar() {
            if (newNumber <= 100) {
                var add = +newPreco;
                let adicionar = newNumber++;
                var novoPreco2 = newPreco * adicionar;
                li2.innerText = `${li.nomeItem} - Quantidade: ${
                    adicionar + 1
                } --> Preço R$: ${novoPreco2 + add}`;
                lixo = -novoPreco2 - newPreco;
                total(add);
            }
        }
        addBtn.addEventListener('click', adicionar);
        //Função diminuir item
        function diminuirItem() {
            if (newNumber >= 1) {
                var dec = -newPreco;
                let diminuir = newNumber--;
                var novoPreco = newPreco * diminuir;
                li2.innerText = `${li.nomeItem} - Quantidade: ${
                    diminuir - 1
                } --> Preço R$: ${(novoPreco -= newPreco)}`;
                lixo = -novoPreco;
                total(dec);
            }
        }

        form.reset();
    } else if (newNumber <= 0 || newPreco <= 0) {
        alert(`Insira uma quantidade maior que 0`);
    } else {
        alert(`Insira uma quantidade maior que 0`);
    }
}

function total(i) {
    let inicial = 0;
    let price = parseInt(i);
    itens.push(price);
    if (itens.length <= 1) {
        inicial = price;
    } else {
        for (i = 0; i < itens.length; i++) {
            inicial += itens[i];
        }
    }
    soma.innerHTML = `R$: ${inicial},00`;
}
