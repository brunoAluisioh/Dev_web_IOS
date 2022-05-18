// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título
document.title = 123;

// Criar um elemento <h1> (createElemen) cria um elemento dentro do html
let heading = document.createElement('H1');

// Faz aparecer na tela 
heading.innerHTML = 'Olá alunos!';

// localização da onde meu h1 deve aparecer (appenChild) = inclui um filho dentro de um elemento pai
document.body.appendChild(heading);

//estilização do meu h1
heading.style.borderBottom = 'solid 3px #000';
