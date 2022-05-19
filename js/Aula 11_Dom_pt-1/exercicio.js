console.log(window);
window.alert("Olá Boa Noite; Seja Bem-vindo(a)");

document.title = 'Exercício Aula Dom_pt-1';

let section = document.createElement('section');
document.body.appendChild(section);

let title = document.createElement('h1')
title.innerText = 'Olá Seja Bem-Vindo(a)'
section.appendChild(title);

let paragrafo = document.createElement('p')
paragrafo.innerText = 'Pogramação Web'
section.appendChild(paragrafo);


let article = document.createElement('article');
document.body.appendChild(article);

let lorem = document.createElement('h1')
lorem.innerText = 'Manipulando Dom'
article.appendChild(lorem);

let text = document.createElement('p')
text.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint deleniti dolorum, dolorem vero provident eaque necessitatibus quia natus explicabo possimus eum.. Sit magnam quo nisi sed sint harum et iusto.'
article.appendChild(text);





