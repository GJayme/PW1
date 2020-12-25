// A sequência de Fibonacci é um exercício clássico de programação.
// Nesse exercício, leia um número inteiro dado pelo usuário (N) e, caso
// seja maior que zero, imprima no console os N primeiros números da
// sequência de Fibonacci.

var anteNumero = 0;
var fibonacci = 1;
var temporario;
var num = prompt("Digite o número para saber a sequência de Fibonacci: ");

if (num > 0) {
  while (num >= 0) {
    temporario = anteNumero;
    anteNumero = anteNumero + fibonacci;
    fibonacci = temporario;
    num--;

    console.log(fibonacci);
  }
}
