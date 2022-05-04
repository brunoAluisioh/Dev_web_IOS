const festa = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(festa);

// Entrou Amanda, colocar no começo Unshift
festa.unshift('Amanda');
console.log(`Entrando Amanda: ${festa}`);

//POP automaticamente reitra o ultimo (Retirando Xavier)
festa.pop();
console.log(`Xavier saiu da festa: ${festa}`);

//Push Inserindo na ultima posição Zuleica
festa.push('Zuleica');
console.log(`Chegou Zuleica: ${festa}`);

//Shift Retirando Amanda da primeira posição 
festa.shift();
console.log(`Saiu Amanda: ${festa}`);

// Delete saindo Silva de uma determinada posição 
delete festa [2];
console.log(`Saindo Silva na posição do meio: ${festa}`);

//Inserindo uma posição 
festa[2] = 'Silvana';
console.log(`Chegou Silvana: ${festa}`)

// Template String
console.log(`Ficaram 4 pessoas na festa, que são: ${festa}`);













