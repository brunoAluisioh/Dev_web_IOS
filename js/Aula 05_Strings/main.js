// Trabalhando com Strings 
// Concatenar 
let exemplo1 = 10;
let exemplo2 = 2;
let string1 = 'Aqui vai um texto'

console.log('O resultado da soma é:' + exemplo1 + exemplo2 ) 
// exemplo: concatenando com aspas simples.
console.log("O resultado da soma é:" + (exemplo1 + exemplo2 )) 
// exemplo: concatenando com aspas dupla.
console.log(`O resultado da soma é: ${exemplo1 + exemplo2}`) 


//Acessa String
let string2 = 'Aqui vai um texto';
console.log(string2.charAt(0));
console.log(string2 [1]);

// Tamanho da String tem 17 palavras contando com o espaço
let string3 = 'Aqui vai um texto';
console.log(string3.length);

// Maiusculo e minusculo
let string4 = 'Aqui vai um texto';
console.log(string4.toUpperCase());
console.log(string4.toLowerCase());

//Substrings 
let string5 = 'Mozilla';
console.log(string5.substring(1, 3))

//Slipt separar as palavras e determinar a posição
let string6 = 'A raposa é um animal';
let string7 = string6.split(' ');
console.log(string7[1])

//Substituir uma string dentro da string
let string8 = 'Aqui vai um texto';
let string9 = string8.replace('Aqui', 'Bruno')
console.log(string9)

//Remover espaços da string 
let string10 = '                Aqui vai um texto                ';
console.log(string10)
console.log(string10.trim())

// Métodos de buscar as strings
//String.indexOf():
let string11 = 'Aqui vai um texto Aqui';
console.log(string11.indexOf('Aqui'))

//String.lastIndexOf()
console.log(string11.lastIndexOf('Aqui'))

//String.search()
console.log(string11.search())

//String.startsWith() true or false no começo 
console.log(string11.startsWith('A'))
console.log(string11.startsWith('s'))
console.log(string11.startsWith('Aqui'))

//String.endsWith() true or false analise o final
console.log(string11.endsWith('.'))
console.log(string11.endsWith('i'))
console.log(string11.endsWith('I'))



//var = 10
//var = '10'
//A == B VERDADEIRO
//A === B falso por conta do caracter
