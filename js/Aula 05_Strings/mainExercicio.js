// Criando variavel
var leroLero = "Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar";
console.log(leroLero)

//acessando a primeira posição do índice
console.log(leroLero [0])

//tamanho da String
console.log(`O tamanho da String é: ${leroLero.length}`)

// troca de String
var leroLero1 = "Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar";

var leroLero2 = leroLero1.replace('Dr Stephen Strange', 'Feiticeira Escarlate');
console.log(leroLero2)

// Substituir uma string dentro da string
console.log(leroLero)
var leroLero3 = (leroLero.split(' '));
console.log(leroLero3)
console.log(leroLero3[13])


// String inteira em Maiúsculo
console.log(leroLero.toUpperCase());