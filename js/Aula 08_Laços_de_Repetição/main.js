//Laço (while) do Bruno

var profHelo = 1;
while (profHelo <= 5) {
  console.log("Bate palma");
  //profHelo = profHelo + 1
  profHelo++;
  //sempre tem que existir um incremento ou decremento
}

var profHelo1 = 1;
do {
  //do while
  console.log("Bate palma");
  console.log(profHelo1);
  profHelo1++;
} while (profHelo1 <= 5);

//Exibir o valor de 1 até 10
let contador = 1;
while (contador <= 10) {
  console.log(`O valor do contador é? ${contador}`);
  contador++;
}

// Laço for
for (let bruno = 1; bruno <= 5; bruno++) {
  console.log("Olá Jackass");
}

//Decremento
let contador2 = 10;
// Começa com valor 10 e termina com 0
while (contador2 >= 0) {
  console.log(`O valor: ${contador2}`);
  contador2--;
}

// Começa com valor 10 e termina com 0
for (let i = 10; i >= 0; i--) {
  console.log(`Contador: ${i}`);
}

// Laços de repetição array
//lenght pega o array completo
const frutas = ["maca", "laranja", "pera", 10];
for (let j = 0; j < frutas.length; j++) {
  console.log(`Nome: ${frutas[j]}`);
}

//Crie um array chamado carros com 8 carros e percorra o array de 2 em 2 exibindo os carros do array

const carros = [
  "civic",
  "uno,",
  "corolla",
  "fluence",
  "gol",
  "citroen",
  "combalt",
  "mercedes",
];
for (let a = 0; a < carros.length; a += 2) {
  console.log(`Tipos de carros: ${carros[a]}`);
}

// Array de objetos e laços
console.clear();
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];
// For overloop
for (let t of todos) {
  console.log(t);
  console.log(t.text);
  console.log(t.id);
}
