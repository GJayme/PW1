function delta(a, b, c) {
  return b ** 2 - 4 * a * c;
}

function baskhara(a, b, c) {
  var valor_delta = delta(a, b, c);
  if (valor_delta > 0) {
    var raiz_delta = Math.sqrt(valor_delta);
    var x1 = (-b + raiz_delta) / (2 * a);
    var x2 = (-b - raiz_delta) / (2 * a);
    console.log("X1: " + x1);
    console.log("X2: " + x2);
  } else if (valor_delta === 0) {
    var x1 = -b / (2 * a);
    var x2 = -b / (2 * a);
    console.log("X1: " + x1);
    console.log("X2: " + x2);
  } else {
    console.log("O delta deu negativo, logo não existe raiz real");
  }
}

var a = parseFloat("1");
var b = parseFloat("2");
var c = parseFloat("1");

baskhara(a, b, c);

// 1 - bug, a funçao de baskara não tinha checagem do valor da Raiz do delta.
//     caso desse delta negativo, toda a funçao de baslara ficaria comprometida.
// 2 - criar um if para checar se o delta deu positivo;
// 3 - criar um else if para checar se o delta deu igual a 0;
// 4 - criar um else para checar se o delta deu negativo;
// 5 - realocação dos console.log para mostra apenas quando entra em cada checagem.
