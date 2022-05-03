//Estrutura simples
function AlertCookie () {
    alert('Você quer um cookie?')
    console.log('Você quer um cookie?')
}

//Criando Arrow Function 
const AlertSucesso = () => {
    alert('Mensagem gerada com sucesso')
    console.log('Mensagem gerada com sucesso')
}

//Criando Objetos
const notebook = {
    marca: 'Apple',
    linha: 'Mac Book Pro',
    tela: 'Retina',
    memóriaRam: '8GB',
    leitorBiométrico: 'true',
    valor: '11.996,99'
}
console.log (notebook);

function diaseAnos(anos = 1, dias = 365) {
    return anos * dias;
}
console.log(diaseAnos());
