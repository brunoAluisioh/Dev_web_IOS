// Busca pelos elementos do Formulário
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const horario = document.querySelector('#horario');
// const msg = document.querySelector('.msg');
// const msg_email = document.querySelector('.msg_email');
// const userList = document.querySelector('#users');

var atualData = new Date(); // Obtém a data/hora atual
var dia = data.getDate(); // 1-31
var mes = data.getMonth(); // 0-11 (zero=janeiro)
var ano4 = data.getFullYear(); // 4 dígitos
var str_data = dia + '/' + (mes+1) + '/' + ano4; // Formata a data e a hora (note o mês + 1)

// informações HTML
let nome = document.getElementById('name');
let nasc = document.getElementById('nasc');
let email = document.getElementById('email');
let item = document.getElementById('item');
let add = document.getElementById('add');

// Configurando Botões 
const addBtn = document.getElementById('adicionar'); //chamando pelo Id
const delBtn = document.getElementById('excluir'); //chamando pelo Id
addBtn.addEventListener('submit', onSubmit);
delBtn.addEventListener('submit', onSubmit);






