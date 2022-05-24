let btns = document.getElementsByClassName('B_12');
btns[0].style.border = '2px solid #D9BC66';
btns[0].style.padding = '.5rem';
btns[0].style.backgroundColor = '#BFBFBF';
btns[0].style.margin = '.7rem';

btns[1].style.border = '2px solid #D9BC66';
btns[1].style.padding = '.5rem';
btns[1].style.backgroundColor = '#BFBFBF';
btns[1].style.margin = '.7rem';

btns[2].style.border = '2px solid #D9BC66';
btns[2].style.padding = '.5rem';
btns[2].style.backgroundColor = '#BFBFBF';
btns[2].style.margin = '.7rem';

const AlertCookie = () => {
    alert('Imagem da Série Umbrella Academy')
    let serie = document.createElement('serie'); //cria um elemento dentro do html
    document.body.appendChild(serie); //(appenChild) = inclui um filho dentro de um elemento pai

    let img = document.createElement('img');
    img.src = './img/serie_Umbrella_Academy.png';
    serie.appendChild(img);
    document.body.style.backgroundColor = '#262525';
}

const Mensagem = () => {
    let usuario = prompt ('Seja Bem-Vindo(a); por favor preencha seu nome:')

    // comando innerHTML Faz aparecer na tela 
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = (`Olá ${usuario}, Bem-vindo a nossa academia.`);
    document.body.appendChild(paragrafo)
}

const tabuada = () => {
    let vezes = parseInt (prompt ('Por favor preencher um número para multiplicação:'));
    if ( isNaN(vezes)) {
        alert('Insira um valor numérico')
        return;
    }
    for(let contador = 1; contador <= 10; contador++) {
        document.write(`${vezes} X ${contador} = ${vezes * contador} <br/>`);
    }
}



