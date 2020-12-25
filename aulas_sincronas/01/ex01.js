// Comentário
/* Comentários 
em varias 
linhas */

// Variaveis:
let nome = "Tiago";
var idade = 18;
const instituto = "IFSP";

// Escopo de variaveis e hoisting quando for var:
for (let i = 0; i < 10; i++) {
  let oi = 3 + i;
  console.log(oi);
}
// console.log(oi); vai dar erro pois o let foi declarado dentro de um scopo

// IF e ELSE:
if (nome == "Gabriel") {
  console.log("Olá Gabriel");
} else {
  console.log("Oi desconhecido");
}

// Igualdade:
0 == "0"; // Igualdade de valor
0 === "0"; //Igualdade de valor e tipo

// Arrays:
let v1 = ["oi", 10, ["olá"], true];
v1[0] = "Oi IFSP";
v1[4] = "Novo valor";
let v2 = [];
v2["instituto"] = "IFSP";

// Manipulando array:
let ultimo_elem = v1.pop(); //Remove o ultimo elemento do array e retorna ele
let x = v1.push("Novo ultimo"); // Adiciona um elemento e retorna o tamanho do array
let primeiro_elem = v1.shift(); //Remove o primeiro elemento do array e retorna ele
let y = v1.unshift(); //Adciona no comeco do array

// Percorrendo array
for (let i = 0; i < length; i++) {}

// METODOS: Map, Reduce e Filter
v1.map();
v1.filter();
v1.reduce();

function Nome(var1, var2, var3) {
  // Codigo da funçao
  return 10;
}
