class Pessoa {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = new Date(nascimento);
    }
    getIdade() {
        let idade = date.getFullYear() - this.nascimento.getFullYear();
        if (date.getMonth() < this.nascimento.getMonth()) {
            idade--; }
        else if (
            date.getMonth() == this.nascimento.getMonth() &&
            date.getDate() < this.nascimento.getDate()
        )
            {
                idade--; }
        return idade;
    }
    getNome() {
        return this.nome;
    }
}

const date = new Date(); 
const pessoa = new Array(10); 
    { 
    pessoa[0] = new Pessoa ('Bruno', '2000-07-03');
    pessoa[1] = new Pessoa ('Mayara', '2001-05-07');
    pessoa[2] = new Pessoa ('Julia', '2005-01-23');
    pessoa[3] = new Pessoa ('Emily', '2004-09-18');
    pessoa[4] = new Pessoa ('Mariana', '2003-03-13');
    pessoa[5] = new Pessoa ('Catharina', '2002-06-05');
    pessoa[6] = new Pessoa ('Vitoria', '2006-10-24');
    pessoa[7] = new Pessoa ('Larissa', '2009-12-02');
    pessoa[8] = new Pessoa ('Manuela', '2008-11-04');
    pessoa[9] = new Pessoa ('Thiago', '2009-07-03');
    }

Pessoa.prototype.getNiver = function () {
    let dia = 'Já fez aniversário esse ano';
    if (date.getMonth() < this.nascimento.getMonth()) {
        dia = 'Ainda não fez aniversário esse ano'
    }
    else if  (
        date.getMonth() == this.nascimento.getMonth() &&
        date.getDate() < this.nascimento.getDate()
    ) {
        dia = 'Ainda não fez aniversário esse ano'
    }
    return dia;
}

for(let i = 0; i< pessoa.length; i++) {
    console.log(`${pessoa[i].nome} tem ${pessoa[i].getIdade()} anos de idade ${pessoa[i].getNiver()}`)
}
