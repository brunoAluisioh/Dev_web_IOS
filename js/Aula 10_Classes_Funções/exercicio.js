class Pessoa {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = new Date(nascimento);
    }
    getIdade(date) {
        let idade = date.getFullYear() - this.nascimento.getFullYear();
        if (date.getMonth() < this.nascimento.gitMonth()) idade--;
        else if (
            date.Month() == this.nascimento.getMonth() &&
            date.getDate() < this.nascimento.getDate
        )
            idade--;
        return idade;
    }
    getNome() {
        return this.nome;
    }
}

const pessoas = new Array(10); [
    { nome: 'Bruno', nascimento: '2000-07-03' },
    { nome: 'Mayara', nascimento: '2001-05-07' },
    { nome: 'Julia', nascimento: '2005-01-23' },
    { nome: 'Emily', nascimento: '2004-09-18' },
    { nome: 'Mariana', nascimento: '2003-03-13' },
    { nome: 'Catharina', nascimento: '2002-06-05' },
    { nome: 'Vitoria', nascimento: '2006-10-24' },
    { nome: 'Larissa', nascimento: '2009-12-02' },
    { nome: 'Manuela', nascimento: '2008-11-04' },
    { nome: 'Thiago', nascimento: '2009-07-03' },
];

Pessoa.prototype.getNiver = function (date) {
    let dia = 0;
    if (date.getMonth() < this.nascimento.getMonth()) ++dia;
    else if (
        date.getMonth() == this.nascimento.Month() &&
        date.getDate() < this.nascimento.getDate
    )
    ++dia;
    return dia == 0;
}

