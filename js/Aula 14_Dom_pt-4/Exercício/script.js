// Busca pelos elementos do Formulário
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const horario = document.querySelector('#horario');
// const msg = document.querySelector('.msg');
// const msg_email = document.querySelector('.msg_email');
// const userList = document.querySelector('#users');

var atualData = new Date(); // Obtém a data/hora atual
var dia = atualData.getDate(); // 1-31
var mes = atualData.getMonth(); // 0-11 (zero=janeiro)
var ano4 = atualData.getFullYear(); // 4 dígitos
var str_data = dia + '/' + (mes + 1) + '/' + ano4; // Formata a data e a hora (note o mês + 1)

// informações HTML
let nome = document.getElementById('name');
let nasc = document.getElementById('nasc');
let email = document.getElementById('email');
let item = document.getElementById('item');
let users = document.getElementById('users');

//adicionando valor nome, email, nascimento
let form = document.getElementById('form');
function adduser(e) {
    e.preventDefault();
    if (!validarIdade()) {
        return;
    }
    if (!validandoEmail()) {
        return;
    }
    var li = document.createElement('li');
    li.innerText = `${nome.value}, ${nasc.value}, ${email.value}`;
    users.appendChild(li);
}

function validarIdade() {
    var nascimento = new Date(nasc.value);

    //Calculando idade
    let idade = atualData.getFullYear() - nascimento.getFullYear();
    if (atualData.getMonth() < nascimento.getMonth()) {
        idade--;
    } else if (
        atualData.getMonth() == nascimento.getMonth() &&
        atualData.getDate() < nascimento.getDate() + 1
    ) {
        idade--;
    }
    // Validando idade
    if (idade < 18) {
        alert(`Somente +18`);
        return false;
    }
    return true;
}

//Validando email
function validandoEmail() {
    let padrao = new RegExp(/.*@.*\..*/i);
    padrao.test(email.value);
    if (padrao.test(email.value)) {
        return true;
    }
    alert(`Email inválido`);
    return false;
}

//Excluir item
function excluirItem() {
    var usuarios = users.getElementsByTagName('li');
    var valor = parseInt(item.value);
    var li = usuarios[valor];
    li.remove();
    console.log(li);
}

// Configurando Botões
form.addEventListener('submit', adduser);

const delBtn = document.getElementById('excluir'); //chamando pelo Id
delBtn.addEventListener('click', excluirItem);
