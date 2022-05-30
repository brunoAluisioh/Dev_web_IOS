// Método querySelectorAll
let btns = document.querySelectorAll('.B_12'); //Chamando pela Classe

//todos os botões irão receber a configuração
for (i = 0; i < btns.length; i++) {
    btns[i].style.border = '2px solid #D9BC66';
    btns[i].style.padding = '.5rem';
    btns[i].style.backgroundColor = '#BFBFBF';
    btns[i].style.margin = '.7rem';
}

// Chamando botões pelo Id 
let btn1 = document.querySelector('#B_01');
let btn2 = document.querySelector('#B_02');
let btn3 = document.querySelector('#B_03');
let btnDelete = document.querySelector('#B_04');

// Criando elementos no html 
let figure = document.createElement('figure')
let tab = document.createElement('div')
let msg = document.createElement('div')
let img = document.createElement('img')

// Aparecer na tela 
document.body.appendChild(msg)
document.body.appendChild(tab)
document.body.appendChild(figure)
document.body.appendChild(img)

//Estilo
window.document.body.style.backgroundColor = 'black'

//Criando função
const imagem = () => {
    let serie = document.createElement('serie');
    img.src = './img/serie_Umbrella_Academy.png';
    img.appendChild(serie);
    img.style.maxWidth = '40%';
    img.style.margin = '0 auto';
    img.style.display = 'block';
    img.style.marginTop = '70px';
};
btn1.addEventListener('click', imagem);

//Criando função 
const mensagem = () => {
    let usuario = prompt ('Seja Bem-Vindo(a); por favor preencha seu nome:')
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = (`Olá ${usuario}, Bem-vindo a nossa academia.`);
    paragrafo.style.background = 'white'
    paragrafo.style.color = 'black'
    msg.appendChild(paragrafo)
    document.body.style.fontSize = '1.8rem'
};
btn2.addEventListener('click', mensagem);

//Criando função
const tabuada = () => {
    let num = parseInt(prompt('Por favor preencher um número para multiplicação:'));
    if (isNaN(num)) {
        alert('Insira um valor numérico');
        return;
    }
    else{
        for(i = 1; i <= 10; i++) {
            let conta = document.createElement('p')
            conta.style.fontSize = '1.3rem'
            conta.style.color = 'white'
            conta.innerHTML = (`${i} X ${num} = ${i * num} <br/>`);
            tab.appendChild(conta);
        }
    }
};
btn3.addEventListener('click', tabuada);

//Criando função
const resetar = () => {
    img.remove();
    msg.remove();
    tab.remove();
};
btnDelete.addEventListener('click', resetar);



