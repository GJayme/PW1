// Dada a fórmula de conversão de Fahrenheit para Celsius abaixo,
// imprima no console todos as temperaturas F e C de -30C a 150C,
// com incrementos de 10 em 10.

// F = (C ∗ 9/5) +32

var f = 0;
var c = -30;

for (c; c <= 150; c = c + 10) {
  console.log(c + " Celcius");
  f = c * (9 / 5) + 32;
  console.log(f + " Fahrenheint");
  console.log("\n");
}
